import { JSX } from "react";

interface HamburgerIconProps {
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function HamburgerIcon({ height = "40", width = "40", viewBox = "0 0 24 24" }: HamburgerIconProps): JSX.Element {
    return (
        <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}
