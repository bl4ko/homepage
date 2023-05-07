/**
 * Main layout component for the Next.js application.
 *
 * This component sets up the common layout structure for the application, including:
 *   - HTML head with meta tags, description, and title.
 *   - NavBar component for navigation.
 *   - Container component to constrain and style the page content.
 *   - Footer component.
 *
*/
import Head from "next/head";
import NavBar from "../navbar";
import { ReactNode } from "react";
import { NextRouter } from "next/router";
import Footer from "../footer";
import EarthCanvas from "../canvas/Earth";

interface LayoutProps {
    children: ReactNode;
    router: NextRouter;
}

export default function AppLayout({ children, router }: LayoutProps) {
    return (
        <main className="pb-8">
            <Head>
                {/* title has to be defined on component level:  https://nextjs.org/docs/messages/no-title-in-document-head*/}
                <title>Bl4ko</title>
                {/* viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <NavBar path={router.asPath} />

            <div className="text-base max-w-2xl pt-14 mx-auto xs:px-4 xss:px-3">

                <div className="relative z-0">
                    <EarthCanvas />
                    {/* <StarsCanvas /> */}
                </div>

                {children}

                <Footer />
            </div>
        </main>
    );
}
