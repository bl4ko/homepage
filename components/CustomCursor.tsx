import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const onMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;

        if (cursorRef.current) {
            cursorRef.current.style.left = `${clientX}px`;
            cursorRef.current.style.top = `${clientY}px`;
        }

    };

    function onMouseEnter() {
        if (cursorRef.current && contentRef.current) {
            cursorRef.current.classList.add('hovered');
            cursorRef.current.style.width = '2rem';
            cursorRef.current.style.height = '2rem';
            // Remove background color
            contentRef.current.style.backgroundColor = 'transparent';
        }
    }

    function onMouseLeave() {
        if (cursorRef.current && contentRef.current) {
            // cursorRef.current.classList.remove('hovered');
            cursorRef.current.style.width = '1rem';
            cursorRef.current.style.height = '1rem';
            // Add var green background color
            contentRef.current.style.backgroundColor = 'var(--color-green)';
        }
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);

        const links = document.querySelectorAll('a, button, img');
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnter);
            link.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnter);
                link.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <div ref={cursorRef} className="cursor-frame">
            <div ref={contentRef} className="cursor-content"></div>
        </div>
    );
};
