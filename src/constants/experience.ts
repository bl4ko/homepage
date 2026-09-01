export type Experience = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

export const experiences: Experience[] = [
  {
    position: "Senior DevOps Engineer",
    company: "CyberGrid GmbH",
    companyLink: "https://www.cyber-grid.com/",
    time: "March 2025 - Present",
    address: "Remote (Austria)",
    work: "Design and operate multi-tenant AWS infrastructure and Kubernetes application platforms using Terraform and GitOps. Build CI/CD, infrastructure automation, observability, and incident-response capabilities for an energy-sector SaaS platform.",
  },
  {
    position: "DevOps Engineer",
    company: "SRC d.o.o.",
    companyLink: "https://www.src.si/",
    time: "July 2022 - March 2025",
    address: "Ljubljana, Slovenia",
    work: "Built and operated on-premises Kubernetes clusters serving production workloads. Automated host and application lifecycle management with Ansible and AWX. Developed and deployed cloud-native services and investigated infrastructure and application incidents.",
  },
  {
    position: "Independent Engineer",
    company: "Freelance",
    time: "October 2024 - Present",
    companyLink: "https://about.bl4ko.com",
    address: "Ljubljana, Slovenia",
    work: "Build infrastructure automation and cloud-native applications for clients, with end-to-end ownership from architecture through deployment and operations.",
  },
];
