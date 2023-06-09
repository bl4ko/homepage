interface HamburgerIconProps {
    height?: string;
    width?: string;
    viewBox?: string;
    fill?: string;
}


export default function HamburgerIcon({ height = "40", width = "40", viewBox = "0 0 24 24", fill = "white" }: HamburgerIconProps): JSX.Element {
    return (
        <svg fill={fill} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Menu">
                    <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24">
                    </rect>
                    <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round">
                    </line>
                    <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round">
                    </line>
                    <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round">
                    </line>
                </g>
            </g>
        </svg>
    );
}