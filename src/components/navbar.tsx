"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { GithubIcon } from "./icons";
import ThemeToggleButton from "./icons/theme-toggle-button";
import { motion } from "framer-motion";

const mobileMenuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

interface LinkItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
  toggleMenu?: () => void;
}

function LinkItem({
  href,
  path,
  children,
  className,
  toggleMenu,
  ...props
}: LinkItemProps) {
  const active = path === href;

  function handleClick() {
    if (toggleMenu) {
      toggleMenu();
    }
  }

  return (
    <Link
      className={`${
        active ? "bg-aqua" : ""
      } px-2 py-1 text-textPrimary transition-colors duration-200 ${className}`}
      href={href}
      {...props}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="items-center fixed w-full z-10 backdrop-blur md:py-3 sm:py-2">
      <div className="w-full flex justify-between mx-auto items-center px-4 max-w-6xl">
        <div className="hidden sm:flex flex-1 space-x-4 md:mt-0">
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/experience" path={path}>
            Experience
          </LinkItem>
          <LinkItem href="https://blog.bl4ko.com" path={path}>
            Blog
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
          <div className="ml-1 sm:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Options"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
            <motion.div
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={mobileMenuVariants}
              transition={{ duration: 0.5 }}
              className="absolute right-0 mt-2 w-48 bg-tertiary rounded-md shadow-lg mr-1 border-2 text-sm"
            >
              <ul>
                <li className="px-4 py-2">
                  <LinkItem href="/" path={path} toggleMenu={toggleMenu}>
                    Home
                  </LinkItem>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <LinkItem
                    href="/projects"
                    path={path}
                    toggleMenu={toggleMenu}
                  >
                    Projects
                  </LinkItem>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <LinkItem
                    href="/experience"
                    path={path}
                    toggleMenu={toggleMenu}
                  >
                    Experience
                  </LinkItem>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <LinkItem
                    href="https://blog.bl4ko.com"
                    path={path}
                    toggleMenu={toggleMenu}
                  >
                    Blog
                  </LinkItem>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <LinkItem
                    target="_blank"
                    href="https://github.com/bl4ko/homepage"
                    path={path}
                    className="inline-flex items-center gap-1 pl-1"
                    toggleMenu={toggleMenu}
                  >
                    <GithubIcon />
                    Code
                  </LinkItem>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
}
