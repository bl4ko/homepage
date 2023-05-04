import { Box } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box textAlign="center" opacity={0.4} fontSize="sm">
            © {new Date().getFullYear()} Bl4ko. Copy as much as you want.
        </Box>
    );
}
