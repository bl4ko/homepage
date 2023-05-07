/**
 * This is the index page of the website.
 */

import NextLink from "next/link";
import Image from "next/image";
import ContentLayout from "../components/layouts/content";
import { IotIcon } from "@/components/icons";


import Section from "../components/section"
import { BioSection, BioYear } from "@/components/bio";
import { Box, Button, Heading, Link } from "@chakra-ui/react";


export default function Home() {
    return (
        <ContentLayout>
            <div>
                <div className="my-4 rounded-xl p-3 text-center bg-white bg-opacity-50 backdrop-blur-md dark:bg-dark">
                    Hello, I&apos;m a dev ops guy from Slovenia
                </div>

                <div className="md:flex items-center">
                    <div className="flex-grow">
                        <h2 className="text-4xl font-bold">Bl4ko</h2>
                        <div className="flex items-center">
                            <p>IoT enthusiast</p>
                            <IotIcon />
                        </div>
                    </div>

                    <div className="shrink-0 mt-3 md:ml-6 text-center">
                        <div className="border-white border-opacity-100 border-2 w-24 h-24 rounded-full overflow-hidden inline-block">
                            <Image src="/images/profile.png" alt="Bl4ko" width={100} height={100} />
                        </div>
                    </div>
                </div>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <p className="text-justify indent-5 hyphens-auto">
                        Bl4ko is a computer science student at the University Of Ljubljana. He is
                        currently working on machine learning projects and working as a dev ops developer. When not working,
                        he enjoys sports and spending time playing chess.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam corrupti necessitatibus aliquam id sapiente quia tempora doloribus, dolores ipsa commodi consectetur, fugit ut. Laboriosam iure beatae voluptatibus hic earum?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, recusandae. Repellendus laboriosam, veritatis, sapiente quidem inventore dolore voluptatum sequi ipsa recusandae cupiditate ipsam ducimus eveniet quisquam odit delectus autem maxime.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam corrupti necessitatibus aliquam id sapiente quia tempora doloribus, dolores ipsa commodi consectetur, fugit ut. Laboriosam iure beatae voluptatibus hic earum?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, recusandae. Repellendus laboriosam, veritatis, sapiente quidem inventore dolore voluptatum sequi ipsa recusandae cupiditate ipsam ducimus eveniet quisquam odit delectus autem maxime.
                    </p>

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
                    <p className="text-justify indent-1 hyphens-auto">
                        Bl4ko enjoys sports including cycling, tennis, boxing and fitness.
                    </p>
                </Section>

            </div>
        </ContentLayout >
    );
}
