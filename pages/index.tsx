/**
 * This is the index page of the website.
 */

import Link from "next/link";
import Image from "next/image";
import ContentLayout from "../components/layouts/content";
import { IotIcon } from "@/components/icons";

interface BioSectionProps {
    children: React.ReactNode;
}

function BioSection({ children }: BioSectionProps): JSX.Element {
    return (
        <div className="pl-20 indent-[-3.5rem]">
            {children}
        </div>
    );
}

interface BioYearProps {
    children: React.ReactNode;
}

function BioYear({ children }: BioSectionProps): JSX.Element {
    return (
        <span className="font-bold mr-4"
        >
            {children}
        </span>
    );
}

export default function Home() {
    return (
        <ContentLayout>
            <div>
                <div className="my-4 rounded-xl p-3 text-center bg-secondary bg-opacity-50 backdrop-blur-md">
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

                <div>
                    <h3 className="section-title">
                        About
                    </h3>
                    <p className="text-justify indent-5 hyphens-auto">
                        Bl4ko is a computer science student at the University Of Ljubljana. He is
                        currently working on machine learning projects and working as a dev ops developer. When not working,
                        he enjoys sports and spending time playing chess.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam corrupti necessitatibus aliquam id sapiente quia tempora doloribus, dolores ipsa commodi consectetur, fugit ut. Laboriosam iure beatae voluptatibus hic earum?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, recusandae. Repellendus laboriosam, veritatis, sapiente quidem inventore dolore voluptatum sequi ipsa recusandae cupiditate ipsam ducimus eveniet quisquam odit delectus autem maxime.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quam corrupti necessitatibus aliquam id sapiente quia tempora doloribus, dolores ipsa commodi consectetur, fugit ut. Laboriosam iure beatae voluptatibus hic earum?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, recusandae. Repellendus laboriosam, veritatis, sapiente quidem inventore dolore voluptatum sequi ipsa recusandae cupiditate ipsam ducimus eveniet quisquam odit delectus autem maxime.
                    </p>

                    <div className="flex justify-center my-4">
                        <Link href="/404">
                            <button className="font-bold py-3 px-5 rounded transition duration-200 ease-in-out hover:bg-tertiary hover:underline">
                                My portfolio
                            </button>
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="section-title">
                        Bio
                    </h3>
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
                </div>

                <div>

                    <h3 className="section-title">
                        Hobbies
                    </h3>
                    <p className="text-justify indent-1 hyphens-auto">
                        Bl4ko enjoys sports including cycling, tennis, boxing and fitness.
                    </p>
                </div>

            </div >
        </ContentLayout >
    );
}
