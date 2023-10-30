interface CursorRingProps {
  left: string;
  top: string;
  borderColor: string;
  borderWidth: number;
  height: number;
  width: number;
}

export default function CursorRing({
  left,
  top,
  borderColor,
  borderWidth,
  height,
  width,
}: CursorRingProps): JSX.Element {
  return (
    <div
      style={{
        position: "fixed",
        top: top,
        left: left,
        width: width,
        height: height,
        borderColor: borderColor,
        borderWidth: `${borderWidth}px`,
        borderStyle: "solid",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
        transition: "0.2s ease-out",
        zIndex: 999,
        pointerEvents: "none",
      }}
    />
  );
}
