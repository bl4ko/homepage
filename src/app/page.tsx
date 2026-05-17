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

export default function Home() {
  return (
    <div>
      <div className="my-4 rounded-xl p-3 text-center bg-secondary bg-opacity-50 backdrop-blur-md">
        DevOps Engineer specializing in Kubernetes, Infrastructure as Code, and Cloud-Native Architecture
      </div>

      <div className="md:flex items-center">
        <div className="grow">
          <h2 className="text-2xl font-bold">Gašper Oblak</h2>
          <div className="flex items-center">
            <p>DevOps Engineer | Available for Contract</p>
          </div>
        </div>

        <div className="shrink-0 mt-3 md:ml-6 text-center">
          <div className="border-white border-opacity-100 border-2 w-24 h-24 rounded-full overflow-hidden inline-block">
            <Image
              unoptimized
              src="/images/profile.png"
              alt="Gašper Oblak"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="section-title">About</h3>
        <p className="text-justify indent-5 hyphens-auto">
          I design and operate production Kubernetes platforms for companies that need reliable, secure infrastructure. My work spans the full stack: Terraform provisioning, GitOps delivery with ArgoCD, observability (Prometheus, Grafana, Loki), and security hardening (NetworkPolicy, Vault, CrowdSec).
        </p>
        <p className="text-justify indent-5 hyphens-auto mt-6">
          4+ years running multi-node clusters in production. CKA, RHCE, and RHCSA certified. I ship infrastructure that scales, stays observable, and passes security audits.
        </p>
      </div>

      <div>
        <h3 className="section-title">Services</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><b>Kubernetes Platform Engineering</b> — cluster architecture, multi-tenancy, upgrades, and Day 2 operations</li>
          <li><b>Infrastructure as Code</b> — Terraform, Ansible, reproducible environments from dev to production</li>
          <li><b>GitOps & CI/CD Pipelines</b> — ArgoCD, GitHub Actions, automated delivery with rollback</li>
          <li><b>Observability & Monitoring</b> — Prometheus, Grafana, Mimir, Loki, Tempo, alerting that matters</li>
          <li><b>Security Hardening & Compliance</b> — NetworkPolicy, Vault secrets, CrowdSec IDS, Kyverno policies</li>
        </ul>
      </div>

      <div>
        <h3 className="section-title">Bio</h3>

        <BioSection>
          <BioYear>2022</BioYear>
          <BioText>Started as a <b>DevOps Engineer</b> at&nbsp;
            <Link href="https://src.si/" target="_blank">SRC</Link>, building and maintaining production Kubernetes clusters.
          </BioText>
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          <BioText>Graduated with a <b>Bachelor&apos;s in Artificial Intelligence</b> from the University of Ljubljana.</BioText>
        </BioSection>

        <BioSection>
          <BioYear>2024</BioYear>
          <BioText>
            Earned <b>RHCSA</b> and <b>Red Hat Specialist in Containers</b> certifications.
            <br />
            Spoke at <b>two cloud-native conferences</b>.
            <br />
            Started independent consulting as a <b>DevOps Engineer</b>.
          </BioText>
        </BioSection>

        <BioSection>
          <BioYear>2025</BioYear>
          <BioText>Earned <b>RHCE</b> and <b>Certified Kubernetes Administrator (CKA)</b>. Joined <Link href="https://www.cyber-grid.com/" target="_blank">CyberGrid</Link> as Senior DevOps Engineer, architecting multi-tenant AWS infrastructure.</BioText>
        </BioSection>
      </div>

      <div>
        <h3 className="section-title">Contact</h3>
        <p className="mb-3 text-text-secondary">Available for remote contract work — US-friendly timezone (CET/UTC+1)</p>
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
