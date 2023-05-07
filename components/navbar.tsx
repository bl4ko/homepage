import { useState } from "react";
import Link from "next/link";
import { HamburgerIcon } from "@/components/icons";
import { GithubIcon } from "./icons";
import ThemeToggleButton from "./icons/theme-toggle-button";

interface LinkItemProps {
    href: string;
    path: string;
    children: React.ReactNode;
    target?: string;
    className?: string;
}

function LinkItem({ href, path, children, className, ...props }: LinkItemProps) {
    const active = path === href;
    return (
        <Link className={`${active ? 'bg-grassTeal text-[#202023]' : 'text-white '} px-2 py-1 transition-colors duration-200 ${className}`}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
};

export default function Navbar(props: any) {
    const { path } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="items-center fixed w-full z-10 backdrop-blur py-3">
            <div className="w-full flex justify-between mx-auto items-center px-4 max-w-2xl">
                <div className="hidden sm:flex flex-1 space-x-4 md:mt-0">
                    <LinkItem href="/" path={path}>
                        Home
                    </LinkItem>
                    <LinkItem href="/works" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/experience" path={path}>
                        Experience
                    </LinkItem>
                    <LinkItem href="/tech" path={path}>
                        Tech
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/bl4ko/homepage"
                        path={path}
                        className="inline-flex items-center gap-1 pl-1"
                    >
                        <GithubIcon />
                        Code
                    </LinkItem>
                </div>

                <div className="flex flex-wrap justify-end items-center w-full">
                    <ThemeToggleButton />
                    <div className="ml-2 sm:hidden">
                        <button onClick={toggleMenu} className="focus:outline none" aria-label="Options">
                            <HamburgerIcon />
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg mr-2 border-2">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        <LinkItem href="/" path={path}>
                                            Home
                                        </LinkItem>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        <LinkItem href="/projects" path={path}>
                                            Projects
                                        </LinkItem>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        <LinkItem href="/experience" path={path}>
                                            Experience
                                        </LinkItem>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        <LinkItem href="/tech" path={path}>
                                            Tech
                                        </LinkItem>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        <LinkItem
                                            target="_blank"
                                            href="https://github.com/bl4ko/homepage"
                                            path={path}
                                            className="inline-flex items-center gap-1 pl-1"
                                        >
                                            <GithubIcon />
                                            Code
                                        </LinkItem>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
