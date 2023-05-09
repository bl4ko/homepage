/**
 * Custom Document template for the HTML structure that is common across
 * all pages of our application, we add the ColorModeScript here to ensure that the
 * color mode is at all pages and not only at the _app.tsx page.
 */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/images/profile_no_background.png" />

                <meta charSet="UTF-8" />
                <meta name="description" content="Bl4ko's homepage" />
                <meta name="author" content="Bl4ko" />
                {/* Meta tags for webcrawlers */}
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Bl4ko, Bl4ko's homepage" />
            </Head>
            <body className="h-full">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
