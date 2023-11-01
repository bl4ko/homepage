"use client";

import { ThemeContext } from "@/src/context/ThemeProvider";
import { useContext, useEffect, useState } from "react";

export default function Cursor({
  cursorColors = { dark: "#00FFAD", light: "#000000" },
  initialCursorSize = 10,
  initialBorderWidth = 2,
}: {
  cursorColors?: { dark: string; light: string };
  initialCursorSize?: number;
  initialBorderWidth?: number;
}): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const [mousePosition, setMousePosition] = useState<{ x: Number; y: Number }>({
    x: 0,
    y: 0,
  });
  const [cursorSize, setCursorSize] = useState<Number>(initialCursorSize);
  const [cursorFill, setCursorFill] = useState<boolean>(true);

  useEffect(() => {
    function mouseMoveHandler(event: MouseEvent) {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    }
    function handleMouseOver() {
      setCursorSize(initialCursorSize + 30);
      setCursorFill(false);
    }
    function handleMouseOut() {
      setCursorSize(initialCursorSize);
      setCursorFill(true);
    }

    // Add event listener for moving mouse, so we can calculate its position
    document.addEventListener("mousemove", mouseMoveHandler);

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
                // console.debug(
                //   `Adding eventListeners to new link: `,
                //   link,
                // );
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
                // console.debug(
                //   `Removing eventListeners from link: `,
                //   link,
                // );
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

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      observer.disconnect();
      startingLinks.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [initialCursorSize, theme, cursorColors]);

  // Effects for mouse presses
  useEffect(() => {
    const handleMouseDown = () => {
      setCursorSize(initialCursorSize + 30);
      setCursorFill(false);
    };
    const handleMouseUp = () => {
      setCursorSize(initialCursorSize);
      setCursorFill(true);
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [initialCursorSize, theme, cursorColors]);

  return (
    <div
      style={{
        position: "fixed",
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
        height: `${cursorSize}px`,
        width: `${cursorSize}px`,
        background: cursorFill ? cursorColors[theme] : "transparent",
        borderWidth: `${initialBorderWidth}px`,
        borderColor: cursorColors[theme],
        borderStyle: "solid",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
        zIndex: 999,
        pointerEvents: "none",
      }}
    />
  );
}
