import { ReactNode } from "react";
import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager,
} from "@chakra-ui/react";
import theme from "../theme/theme";

interface ChakraProps {
    cookies: string | undefined;
    children: ReactNode;
}

export default function Chakra({ cookies, children }: ChakraProps) {
    const colorModeManager =
        typeof cookies === "string"
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager;

    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    );
}

// Get the `cookies` from the request headers
// and pass it to the `Chakra` component
export async function getServerSideProps({ req }: any) {
    return {
        props: {
            cookies: req.headers.cookie ?? "",
        },
    };
}
