/**
 * This is the index page of the website.
 */

import Link from "next/link";
import Image from "next/image";
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
        <div>
            <div className="my-4 rounded-xl p-3 text-center bg-secondary bg-opacity-50 backdrop-blur-md">
                Hello, I&apos;m a tech enthusiast from Slovenia
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
                    I&apos;m a Computer Science student at the University of Ljubljana, studying aspects of Artificial Intelligence such as Machine Perception, Intelligent Systems, and Data Mining. Concurrently, I&apos;m gaining real-world experience in Cloud Engineering, Automation, and DevOps.
                </p>
                <p className="text-justify indent-5 hyphens-auto mt-6">
                    In addition to my academic and professional pursuits, I spend time on IoT projects, automating and improving home processes. This hands-on engagement broadens my understanding of the current tech landscape.
                </p>

                <p className="text-justify indent-5 hyphens-auto mt-6">
                    On a personal level, I maintain physical health through sports like tennis, cycling, and fitness training. For mental fitness, I enjoy strategic games like chess, which aid in refining my problem-solving skills.
                </p>

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
                    Runner up in the Slovenian National U16 Tennis Championship.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Started working as a cloud engineer at <Link href="https://src.si/" target="_blank">SRC</Link>.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Completed the Bachelor&apos;s degree in Artificial Intelligence from the University of Ljubljana Faculty of Computer and Information Science.
                </BioSection>
            </div>

            <div>

                <h3 className="section-title">
                    Hobbies
                </h3>
                <p className="text-justify indent-1 hyphens-auto">
                    Bl4ko enjoys sports including cycling, chess, cue sports, tennis, boxing and fitness.
                </p>
            </div>

        </div >
    );
}
