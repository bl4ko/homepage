"use client";

import { ThemeContext } from "@/context/ThemeProvider";
import { useContext, useEffect, useState } from "react";

// Cursor customization
// These variables are exported so they can be used with
// playwright tests. Change them to change the cursor
export const cursorColors = { dark: "#00FFAD", light: "#000000" };
export const cursorSizeS = "10px";
export const cursorSizeL = "40px";
export const cursorBorderW = "2px";

export default function Cursor({
  initialCursorColors = cursorColors,
  cursorSizeSmall = cursorSizeS,
  cursorSizeLarge = cursorSizeL,
  initialBorderWidth = cursorBorderW,
}: {
  initialCursorColors?: { dark: string; light: string };
  cursorSizeSmall?: string;
  cursorSizeLarge?: string;
  initialBorderWidth?: string;
}): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const [mousePosition, setMousePosition] = useState<{ x: Number; y: Number }>({
    x: 0,
    y: 0,
  });
  const [cursorSize, setCursorSize] = useState<string>(cursorSizeSmall);
  const [cursorFill, setCursorFill] = useState<boolean>(true);

  // Variable for determening if we are using touch device or not.
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  // Function for checking if we are on touch device https://stackoverflow.com/a/71883890.
  // We check this to disable custom cursor on touch devices.
  const checkIfIsTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  // Throttle function to reduce the number of times we update the cursor: #https://jsfiddle.net/jonathansampson/m7G64/
  // eslint-disable-next-line no-unused-vars
  function throttle(callback: (event: MouseEvent) => void, limit: number) {
    var wait = false;
    return function (event: MouseEvent) {
      if (!wait) {
        callback(event);
        wait = true;
        setTimeout(function () {
          wait = false;
        }, limit);
      }
    };
  }

  useEffect(() => {
    // If it's a touch device, do not initialize custom cursor events
    if (checkIfIsTouchDevice()) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    function mouseMoveHandler(event: MouseEvent) {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    }
    function handleMouseOver() {
      setCursorSize(cursorSizeLarge);
      setCursorFill(false);
    }
    function handleMouseOut() {
      setCursorSize(cursorSizeSmall);
      setCursorFill(true);
    }

    // Add event listener for moving mouse, so we can calculate its position
    const throttledMouseMoveHandler = throttle(mouseMoveHandler, 10);
    document.addEventListener("mousemove", throttledMouseMoveHandler);

    // Attach to all links on the page
    const startingLinks = document.querySelectorAll("a");
    startingLinks.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    // Add MutationObserver, to detect when DOM is changed so we can
    // attach to all links and change the color
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          // console.debug("New Nodes added: ", mutation.addedNodes);
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === "A") {
                // console.debug("New node is a link: ", element);
                element.addEventListener("mouseover", handleMouseOver);
                element.addEventListener("mouseout", handleMouseOut);
              }

              // If the added node contains other nodes, we need to attach to them as well
              const links = element.querySelectorAll("a");
              links.forEach((link) => {
                link.addEventListener("mouseover", handleMouseOver);
                link.addEventListener("mouseout", handleMouseOut);
              });
            }
          });
        }
        if (mutation.removedNodes.length) {
          // console.debug("Nodes removed: ", mutation.removedNodes);
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const removedElement = node as Element;
              if (removedElement.tagName === "A") {
                removedElement.removeEventListener(
                  "mouseover",
                  handleMouseOver,
                );
                removedElement.removeEventListener("mouseout", handleMouseOut);
              }

              // Also clean up any nested nodes
              const links = removedElement.querySelectorAll("a");
              links.forEach((link) => {
                link.removeEventListener("mouseover", handleMouseOver);
                link.removeEventListener("mouseout", handleMouseOut);
              });
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const handleMouseDown = () => {
      setCursorSize(cursorSizeLarge);
      setCursorFill(false);
    };
    const handleMouseUp = () => {
      setCursorSize(cursorSizeSmall);
      setCursorFill(true);
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", throttledMouseMoveHandler);
      observer.disconnect();
      startingLinks.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [cursorSizeSmall, theme, cursorSizeLarge, initialCursorColors]);

  return isTouchDevice ? (
    <></>
  ) : (
    <div
      data-testid="cursor"
      style={{
        position: "fixed",
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
        height: cursorSize,
        width: cursorSize,
        background: cursorFill ? initialCursorColors[theme] : "transparent",
        borderWidth: initialBorderWidth,
        borderColor: initialCursorColors[theme],
        borderStyle: "solid",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
        zIndex: 999,
        pointerEvents: "none",
      }}
    />
  );
}
