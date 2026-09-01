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

const focusAreas = [
  {
    title: "Agent Infrastructure",
    description: "Reliable execution, least-privilege tools, approval-bounded remediation",
  },
  {
    title: "Kubernetes Platforms",
    description: "Multi-tenant clusters, capacity planning, Day 2 operations",
  },
  {
    title: "Reliability & Incident Response",
    description: "Failure analysis, alerting, recovery, and permanent fixes",
  },
  {
    title: "Observability",
    description: "OpenTelemetry, Prometheus, Grafana, Loki, Mimir, Tempo",
  },
  {
    title: "Security & Isolation",
    description: "Vault, RBAC, NetworkPolicy, Kyverno, Falco, audit logging",
  },
  {
    title: "Infrastructure as Code & GitOps",
    description: "Terraform, Ansible, Argo CD, Helm, GitHub Actions",
  },
];

export default function Home() {
  return (
    <div>
      <div className="my-6 md:flex items-center bg-secondary/50 rounded-xl p-5 border border-green/10">
        <div className="grow">
          <h1 className="text-2xl font-bold">Gašper Oblak</h1>
          <p className="text-green font-bold mt-1">Platform &amp; Site Reliability Engineer</p>
          <p className="text-sm text-text-secondary mt-1">Kubernetes &middot; Agent Infrastructure &middot; Terraform &middot; Observability</p>
          <p className="text-sm text-text-secondary mt-1">Building reliable infrastructure for cloud-native and AI agent workloads.</p>
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
          I design and operate production Kubernetes platforms across AWS and on-premises environments. My work spans Terraform provisioning, GitOps delivery with Argo CD, observability with Prometheus, Grafana, Loki, and OpenTelemetry, and security controls around workload and tenant boundaries.
        </p>
        <p className="mt-6">
          My current focus is infrastructure for autonomous agents: reliable execution, least-privilege tooling, approval boundaries, and safe remediation. I have 4+ years of production experience and hold CKA, CKS, KCSA, RHCE, and RHCSA certifications.
        </p>
      </div>

      <div className="bg-secondary/50 rounded-xl p-5 border border-green/10 mt-4">
        <h2 className="section-title">Focus</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="bg-secondary/50 rounded-lg p-4 border border-green/10">
              <p className="font-bold text-green text-sm">{area.title}</p>
              <p className="text-text-secondary text-sm mt-1">{area.description}</p>
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

        <BioSection>
          <BioYear>2026</BioYear>
          <BioText>Earned <strong>CKS</strong> and <strong>KCSA</strong>. Built Kubernetes-hosted agents for continuous incident investigation, infrastructure audits, and policy-controlled remediation.</BioText>
        </BioSection>
      </div>

      <div className="bg-secondary/50 rounded-xl p-5 border border-green/10 mt-4">
        <h2 className="section-title">Contact</h2>
        <p className="mb-4 text-text-secondary">Open to remote Platform, SRE, and Agent Infrastructure roles in Europe.</p>
        <a
          href="mailto:gasperoblak@bl4ko.com"
          className="inline-block bg-green text-black font-bold px-7 py-3 rounded-full no-underline shadow-[0_4px_20px_-6px_var(--color-green)] hover:shadow-[0_6px_28px_-6px_var(--color-green)] hover:-translate-y-0.5 transition-all duration-200"
        >
          Get in Touch
        </a>
        <div className="flex-row flex mt-5 gap-1">
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
