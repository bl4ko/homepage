/**
 * This is the index page of the website.
 */

import NextLink from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Flex, Container, Box, Button, useColorModeValue, Heading, Link } from "@chakra-ui/react";
import ArticleLayout from "../components/layouts/article";
import Section from "../components/section"
import IndentedParagraph from "../components/paragraph"
import { BioSection, BioYear } from "@/components/bio";
import { IotIcon } from "@/components/icons";

export default function Home() {
    return (
        <ArticleLayout>
            <Container>

                <Box className="my-4 rounded-lg p-3 text-center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
                    Hello, I&apos;m a dev ops guy from Slovenia
                </Box>

                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Bl4ko
                        </Heading>
                        <Flex alignItems="center" justifyContent={"left"}>
                            <IndentedParagraph>IoT enthusiast</IndentedParagraph>
                            <Box marginLeft="1rem">
                                <IotIcon />
                            </Box>
                        </Flex>
                    </Box>

                    <Box borderColor="white.Alpha.800" borderWidth={2} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" overflow="hidden">
                        <Image src="/images/profile.png" alt="Bl4ko" width={100} height={100} />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <IndentedParagraph>
                        Bl4ko is a computer science student at the University Of Ljubljana. He is
                        currently working on machine learning projects and working as a dev ops developer. When not working,
                        he enjoys sports and spending time playing chess.
                    </IndentedParagraph>
                    <Box display="flex" justifyContent="center" my={4}>
                        <Button as={NextLink} href="/portfolio" colorScheme="teal">
                            My portfolio
                        </Button>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2001</BioYear>
                        Born in Slovenia 🇸🇮, Ljubljana.
                    </BioSection>
                    <BioSection>
                        <BioYear>2016</BioYear>
                        Runner up slovenian tennis national championship U16.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Started working as dev ops engineer at <Link href="https://src.si/" target="_blank">SRC</Link>.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Completed the Bachelor&apos;s Artificial Intelligence Program at the University of Ljubljana Faculty of Computer and Information Science.
                    </BioSection>
                </Section>

                <Section delay={0.3}>

                    <Heading as="h3" variant="section-title">
                        Hobbies
                    </Heading>
                    <IndentedParagraph>
                        Bl4ko enjoys sports including cycling, tennis, boxing and fitness.
                    </IndentedParagraph>
                </Section>

            </Container>
        </ArticleLayout >
    );
}
