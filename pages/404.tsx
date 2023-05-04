import NextLink from "next/link";
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
} from "@chakra-ui/react";

export default function NotFound() {
    return (
        <Container>
            <Heading as="h1">404 - Page not found</Heading>
            <Text my={6}>Sorry, we couldn&apos;t find the page you were looking for.</Text>
            <Divider my={6} />
            <Box my={6} textAlign="center">
                <Button as={NextLink} href="/" colorScheme="teal">
                    Return to homepage
                </Button>
            </Box>
        </Container>
    );
}
