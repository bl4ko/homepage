import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode("#f0e7db", "#202023")(props),
            },
        }),
    },
    components: {
        Heading: {
            variants: {
                "section-title": {
                    fontSize: 22,
                    textUnderlineOffset: 6,
                    marginTop: 3,
                    marginBottom: 3,
                    textDecoration: "underline",
                    textDecorationColor: "#525252",
                    textDecorationThickness: 4,
                },
            },
        },
    },
});

export default theme;
