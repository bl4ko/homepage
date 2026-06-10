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
    position: "DevOps Engineer",
    company: "SRC d.o.o.",
    companyLink: "https://www.src.si/",
    time: "July 2022 - March 2025",
    address: "Ljubljana, Slovenia",
    work: "Built and maintained on-premise Kubernetes clusters serving production workloads. Automated infrastructure with Ansible and Renovate. Developed two cloud-native applications (Django/React/Go) from architecture to deployment. Resolved complex networking issues across multi-cluster environments.",
  },
  {
    position: "Fullstack Engineer",
    company: "Freelance",
    time: "October 2024 - Present",
    companyLink: "",
    address: "Ljubljana, Slovenia",
    work: "Delivering end-to-end infrastructure and application solutions for clients in real esatate and gambling industries.",
  },
  {
    position: "Senior DevOps Engineer",
    company: "CyberGrid GmbH",
    companyLink: "https://www.cyber-grid.com/",
    time: "March 2025 - Present",
    address: "Remote (Austria)",
    work: "Architecting multi-tenant AWS infrastructure with GitOps. Designing scalable Kubernetes platforms, CI/CD pipelines, and infrastructure automation for energy sector SaaS products.",
  },
];
