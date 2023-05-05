import { forwardRef } from "react";
import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    LinkProps,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./icons/logo";
import ThemeToggleButton from "./icons/theme-toggle-button";
import { GithubIcon } from "./icons";

interface LinkItemProps extends LinkProps {
    href: string;
    path: string;
}

const LinkItem = ({
    href,
    path,
    target,
    children,
    ...props
}: LinkItemProps) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? "grassTeal" : undefined}
            color={active ? "#202023" : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    );
};

const MenuLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
));

MenuLink.displayName = 'MenuLink';

export default function Navbar(props: any) {
    const { path } = props;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
            >
                {/* <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex> */}

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/" path={path}>
                        Home
                    </LinkItem>
                    <LinkItem href="/works" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/blog" path={path}>
                        Blog
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        Contact
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/bl4ko/homepage"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <GithubIcon />
                        Code
                    </LinkItem>
                </Stack>

                <Box flex={1} alignItems="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">
                                    Home
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/">
                                    Projects
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/works">
                                    Blog
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/posts">
                                    Contacts
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/crafthttps://github.com/bl4ko/homepage"
                                >
                                    Code
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
