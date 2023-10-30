interface CursorDotProps {
    left: string;
    top: string;
    background: string;
    height: number;
    width: number;
}

export default function CursorDot({
    left,
    top,
    background,
    height,
    width,
}: CursorDotProps) {
    return (
        <div
            style={{
                position: "fixed",
                top: top,
                left: left,
                background: background,
                height: height,
                width: width,
                borderRadius: "100%",
                transform: "translate(-50%, -50%)",
                zIndex: 999,
                pointerEvents: "none",
            }}
        />
    );
}
