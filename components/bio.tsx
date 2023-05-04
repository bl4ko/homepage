import { Box, Text, BoxProps, TextProps } from '@chakra-ui/react';

interface BioSectionProps extends BoxProps {
    children: React.ReactNode;
}

interface BioYearProps extends TextProps {
    children: React.ReactNode;
}

export function BioSection({ children, ...props }: BioSectionProps) {
    return (
        <Box
            sx={{
                paddingLeft: '3.4em',
                textIndent: '-3.4em',
            }}
            {...props}
        >
            {children}
        </Box>
    );
}

export function BioYear({ children, ...props }: BioYearProps) {
    return (
        <Text
            as="span"
            fontWeight="bold"
            marginRight="1em"
            {...props}
        >
            {children}
        </Text>
    );
}
