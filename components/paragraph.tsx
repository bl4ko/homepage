interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> { }

export default function IndentedParagraph({ children, ...props }: React.PropsWithChildren<ParagraphProps>) {
    return (
        <p style={{
            textAlign: 'justify',
            textIndent: '1em',
            hyphens: 'auto',
        }}>
            {children}
        </p>
    );
};
