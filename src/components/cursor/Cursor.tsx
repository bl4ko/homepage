import { useEffect, useState } from "react";
import CursorRing from "./CursorRing";
import CursorDot from "./CursorDot";

type CursorProps = {
  color?: string;
  showRing?: boolean;
  ringSizeInitial?: number;
  cursorSize?: number;
  ringBorder?: number;
};

export default function Cursor({
  color = "#ffffff",
  showRing = true,
  ringSizeInitial = 50,
  ringBorder = 2,
  cursorSize = 10,
}: CursorProps): JSX.Element {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ringSize, setRingSize] = useState(ringSizeInitial);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", () =>
      setRingSize(ringSizeInitial - 30)
    );
    document.addEventListener("mouseup", () => setRingSize(ringSizeInitial));

    const links = Array.from(document.getElementsByTagName("a"));
    links.forEach((element) => {
      element.addEventListener("mouseover", () =>
        setRingSize(ringSizeInitial + 30)
      );
      element.addEventListener("mouseout", () => setRingSize(ringSizeInitial));
    });
  });

  return (
    <>
      {showRing && (
        <CursorRing
          left={`${mousePosition.x}px`}
          top={`${mousePosition.y}px`}
          borderColor={color}
          borderWidth={ringBorder}
          height={ringSize}
          width={ringSize}
        />
      )}
      <CursorDot
        left={`${mousePosition.x}px`}
        top={`${mousePosition.y}px`}
        background={color}
        height={cursorSize}
        width={cursorSize}
      />
    </>
  );
}
