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
import EarthCanvas from "../canvas/Earth";
import StarsCanvas from "../canvas/Stars";

interface LayoutProps {
    children: ReactNode;
    router: NextRouter;
}

export default function AppLayout({ children, router }: LayoutProps) {
    return (
        <main className="relative pb-8 h-full">

            <Head>
                {/* title has to be defined on component level:  https://nextjs.org/docs/messages/no-title-in-document-head*/}
                <title>Bl4ko</title>
                {/* viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <StarsCanvas />

            <NavBar path={router.asPath} />

            <div className="text-base md:text-lg max-w-6xl pt-14 mx-auto xl:px-16 lg:px-12 md:px-10 xs:px-8 px-4">

                <EarthCanvas />

                {children}

                {/* <Footer /> */}

            </div>
        </main>
    );
}
