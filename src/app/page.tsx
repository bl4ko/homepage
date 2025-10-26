/**
 * This is the index page of the website.
 */

import Link from "next/link";
import Image from "next/image";
import SocialIcon from "@/components/social-icons";

interface BioSectionProps {
  children: React.ReactNode;
}

function BioSection({ children }: BioSectionProps): JSX.Element {
  return <div className="flex flex-row mx-2 lg:mx-3">{children}</div>;
}

function BioText({ children }: BioSectionProps): JSX.Element {
  return <span>{children}</span>;
}

function BioYear({ children }: BioSectionProps): JSX.Element {
  return <span className="font-bold mr-4 lg:mr-5">{children}</span>;
}

export default function Home() {
  return (
    <div>
      <div className="my-4 rounded-xl p-3 text-center bg-secondary bg-opacity-50 backdrop-blur-md">
        Hello, I&apos;m a DevOps Engineer from Slovenia
      </div>

      <div className="md:flex items-center">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">Bl4ko, Gašper Oblak</h2>
          <div className="flex items-center">
            <p>Freelance DevOps Engineer & Cloud Consultant</p>
          </div>
        </div>

        <div className="shrink-0 mt-3 md:ml-6 text-center">
          <div className="border-white border-opacity-100 border-2 w-24 h-24 rounded-full overflow-hidden inline-block">
            <Image
              unoptimized
              src="/images/profile.png"
              alt="Bl4ko"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="section-title">About</h3>
        <p className="text-justify indent-5 hyphens-auto">
          I&apos;m a DevOps engineer from Ljubljana, Slovenia, with a Bachelor’s degree in Artificial Intelligence from the University of Ljubljana, Faculty of Computer and Information Science. My expertise lies in Cloud Engineering, Automation, and Software Architecture, where I continuously refine my skills through hands-on projects and real-world applications.
        </p>
        <p className="text-justify indent-5 hyphens-auto mt-6">Beyond my professional role, I&apos;m deeply passionate about IoT—automating and optimizing home processes to enhance efficiency and convenience. These projects keep me at the forefront of emerging technologies and broaden my technical perspective.</p>

        <p className="text-justify indent-5 hyphens-auto mt-6">Outside of tech, I stay active with tennis, cycling, and fitness training, balancing physical well-being with strategic mental exercises like chess, which sharpens my problem-solving skills.</p>
      </div>

      <div>
        <h3 className="section-title">Bio</h3>

        <BioSection>
          <BioYear>2001</BioYear>
          <BioText>Born in Ljubljana, Slovenia 🇸🇮.</BioText>
        </BioSection>

        <BioSection>
          <BioYear>2016</BioYear>
          <BioText>Achieved runner-up in the Slovenian National U16 Tennis Championship.</BioText>
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          <BioText>Began my career as a <b>DevOps engineer</b> at&nbsp;
            <Link href="https://src.si/" target="_blank">SRC</Link>.
          </BioText>
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          <BioText>Graduated with a <b>Bachelor’s degree in Artificial Intelligence</b>
            from the University of Ljubljana, Faculty of Computer and Information Science.</BioText>
        </BioSection>

        <BioSection>
          <BioYear>2024</BioYear>
          <BioText>
            Earned two Red Hat certifications: <b>RHCSA and Red Hat Specialist in Containers.</b>
            <br />
            Spoke at <b>two Slovenian cloud-native conferences</b>.
            <br />
            Started freelancing as a <b>DevOps engineer and Cloud consultant</b>.
          </BioText>
        </BioSection>

        <BioSection>
          <BioYear>2025</BioYear>
          <BioText>Earned two new certifications: <b>Red Hat Certified System Engineer (RHCE)</b> and <b>Certified Kubernetes administrator (CKA) certification</b>.</BioText>
        </BioSection>
      </div>

      <div>
        <h3 className="section-title">Hobbies</h3>
        <p className="text-justify indent-1 hyphens-auto">
          Bl4ko enjoys sports including cycling, chess, cue sports, tennis,
          boxing and fitness.
        </p>
      </div>

      <div>
        <h3 className="section-title">Contact</h3>
        <div className="flex-row flex">
          <div className="mx-2 my-2">
          <SocialIcon kind="github" href="https://github.com/bl4ko" size={30} />
          </div>
          <div className="mx-2 my-2">
          <SocialIcon kind="linkedin" href="https://www.linkedin.com/in/ga%C5%A1per-oblak-b3779b2ba/" size={30} />
          </div>
          <div className="mx-2 my-2">
          <SocialIcon kind="mail" href="mailto:gasperoblak@bl4ko.com" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
