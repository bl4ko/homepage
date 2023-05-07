/**
 * This is the index page of the website.
 */

import NextLink from "next/link";
import Image from "next/image";
import { Flex, Container, Box, Button, useColorModeValue, Heading, Link } from "@chakra-ui/react";
import ContentLayout from "../components/layouts/content";
import Section from "../components/section"
import IndentedParagraph from "../components/paragraph"
import { BioSection, BioYear } from "@/components/bio";
import { IotIcon } from "@/components/icons";

export default function Home() {
    return (
        <ContentLayout>
            <div>
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

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam corrupti necessitatibus aliquam id sapiente quia tempora doloribus, dolores ipsa commodi consectetur, fugit ut. Laboriosam iure beatae voluptatibus hic earum?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, recusandae. Repellendus laboriosam, veritatis, sapiente quidem inventore dolore voluptatum sequi ipsa recusandae cupiditate ipsam ducimus eveniet quisquam odit delectus autem maxime.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam corrupti necessitatibus aliquam id sapiente quia tempora doloribus, dolores ipsa commodi consectetur, fugit ut. Laboriosam iure beatae voluptatibus hic earum?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, recusandae. Repellendus laboriosam, veritatis, sapiente quidem inventore dolore voluptatum sequi ipsa recusandae cupiditate ipsam ducimus eveniet quisquam odit delectus autem maxime.
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

            </div>
        </ContentLayout >
    );
}
