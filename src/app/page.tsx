import Link from "next/link";
import Image from "next/image";
import SocialIcon from "@/components/social-icons";
import { JSX } from "react";

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

const services = [
  {
    title: "Kubernetes Platform Engineering",
    description: "Cluster architecture, multi-tenancy, Day 2 operations",
  },
  {
    title: "Infrastructure as Code",
    description: "Terraform, CloudFormation, Ansible",
  },
  {
    title: "GitOps & CI/CD Pipelines",
    description: "ArgoCD, GitHub Actions, automated delivery with rollback",
  },
  {
    title: "Observability & Monitoring",
    description: "Prometheus, Grafana, Mimir, Loki, Tempo, alerting that matters",
  },
  {
    title: "Security Hardening & Compliance",
    description:
      "Vault secrets management, CrowdSec IDS, Falco runtime security, Wazuh SIEM, Kyverno policies",
  },
  {
    title: "Cloud Architecture",
    description: "AWS, multi-tenant platform design, cost optimization, migration planning",
  },
];

export default function Home() {
  return (
    <div>
      <div className="my-6 md:flex items-center bg-secondary/50 rounded-xl p-5 border border-green/10">
        <div className="grow">
          <h1 className="text-2xl font-bold">Gašper Oblak</h1>
          <p className="text-green font-bold mt-1">DevOps Engineer</p>
          <p className="text-sm text-text-secondary mt-1">Kubernetes &middot; Infrastructure as Code &middot; Cloud-Native Architecture</p>
          <p className="text-sm text-text-secondary mt-1">Available for remote contract work.</p>
          <a
            href="mailto:gasperoblak@bl4ko.com"
            className="inline-block bg-green text-black font-bold px-5 py-2.5 rounded-lg no-underline hover:opacity-90 transition-opacity duration-200 mt-3 text-sm"
          >
            Get in Touch
          </a>
        </div>

        <div className="shrink-0 mt-3 md:ml-6 text-center">
          <div className="border-green/30 border-2 w-24 h-24 rounded-full overflow-hidden inline-block">
            <Image
              src="/images/profile.png"
              alt="Gašper Oblak"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary/50 rounded-xl p-5 border border-green/10 mt-4">
        <h2 className="section-title">About</h2>
        <p>
          I design and operate production Kubernetes platforms for companies that need reliable, secure infrastructure. My work spans the full stack: Terraform provisioning, GitOps delivery with ArgoCD, observability (Prometheus, Grafana, Loki), and security hardening (Vault, CrowdSec, Falco).
        </p>
        <p className="mt-6">
          4+ years running multi-node clusters in production. CKA, RHCE, and RHCSA certified. I ship infrastructure that scales, stays observable, and passes security audits.
        </p>
      </div>

      <div className="bg-secondary/50 rounded-xl p-5 border border-green/10 mt-4">
        <h2 className="section-title">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((service) => (
            <div key={service.title} className="bg-secondary/50 rounded-lg p-4 border border-green/10">
              <p className="font-bold text-green text-sm">{service.title}</p>
              <p className="text-text-secondary text-sm mt-1">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-secondary/50 rounded-xl p-5 border border-green/10 mt-4">
        <h2 className="section-title">Bio</h2>

        <BioSection>
          <BioYear>2022</BioYear>
          <BioText>Started as a <strong>DevOps Engineer</strong> at <Link href="https://src.si/" target="_blank">SRC</Link>, building and maintaining production Kubernetes clusters.</BioText>
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          <BioText>Graduated with a <strong>Bachelor&apos;s in Artificial Intelligence</strong> from the University of Ljubljana.</BioText>
        </BioSection>

        <BioSection>
          <BioYear>2024</BioYear>
          <BioText>
            Earned <strong>RHCSA</strong> and <strong>Red Hat Specialist in Containers</strong> certifications.
            <br />
            Spoke at <strong>two cloud-native conferences</strong>.
            <br />
            Started freelance consulting as a <strong>DevOps Engineer</strong>.
          </BioText>
        </BioSection>

        <BioSection>
          <BioYear>2025</BioYear>
          <BioText>Earned <strong>RHCE</strong> and <strong>Certified Kubernetes Administrator (CKA)</strong>. Joined <Link href="https://www.cyber-grid.com/" target="_blank">CyberGrid</Link> as Senior DevOps Engineer, architecting multi-tenant AWS infrastructure.</BioText>
        </BioSection>
      </div>

      <div className="bg-secondary/50 rounded-xl p-5 border border-green/10 mt-4">
        <h2 className="section-title">Contact</h2>
        <p className="mb-4 text-text-secondary">Available for remote contract work.</p>
        <a
          href="mailto:gasperoblak@bl4ko.com"
          className="inline-block bg-green text-black font-bold px-6 py-3 rounded-lg no-underline hover:opacity-90 transition-opacity duration-200"
        >
          Get in Touch
        </a>
        <div className="flex-row flex mt-4">
          <div className="mx-1 my-1">
            <SocialIcon kind="github" href="https://github.com/bl4ko" size={30} />
          </div>
          <div className="mx-1 my-1">
            <SocialIcon kind="linkedin" href="https://www.linkedin.com/in/ga%C5%A1per-oblak-b3779b2ba/" size={30} />
          </div>
          <div className="mx-1 my-1">
            <SocialIcon kind="mail" href="mailto:gasperoblak@bl4ko.com" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
