export type Color = "blue" | "green" | "red" | "yellow" | "purple" | "black" | "aqua";

export type Tag = {
  name: string;
  color: Color;
};

export type Project = {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source: string;
};

export type Contribution = {
  name: string;
  description: string;
  url: string;
};

export const contributions: Contribution[] = [
  {
    name: "CloudPirates Helm Charts",
    description: "Community-driven Helm charts for Kubernetes — Redis, RabbitMQ, Keycloak, and more.",
    url: "https://github.com/CloudPirates-io/helm-charts",
  },
  {
    name: "Kubescape Helm Charts",
    description: "Official Helm charts for deploying Kubescape security platform on Kubernetes.",
    url: "https://github.com/kubescape/helm-charts",
  },
  {
    name: "go-proxmox",
    description: "Go client library for the Proxmox VE API.",
    url: "https://github.com/luthermonson/go-proxmox",
  },
  {
    name: "NetBox Helm Chart",
    description: "Official Helm chart for deploying NetBox on Kubernetes.",
    url: "https://github.com/netbox-community/netbox-chart",
  },
  {
    name: "NetBox Device Type Library",
    description: "Community-sourced library of device type definitions for NetBox.",
    url: "https://github.com/netbox-community/devicetype-library",
  },
  {
    name: "Renovate Operator",
    description: "Kubernetes operator for running Renovate dependency updates as CronJobs.",
    url: "https://github.com/mogenius/renovate-operator",
  },
  {
    name: "media-stack",
    description: "Docker Compose media server stack with VPN integration.",
    url: "https://github.com/navilg/media-stack",
  },
  {
    name: "certstream-go",
    description: "Go client for real-time certificate transparency log streaming.",
    url: "https://github.com/SRC-doo/certstream-go",
  },
];

export const projects: Project[] = [
  {
    name: "Netbox-ssot",
    description: "Microservice that turns netbox to automatic ssot.",
    tags: [
      {
        name: "go",
        color: "aqua",
      },
    ],
    image: "gopher_custom.png",
    source: "https://github.com/bl4ko/netbox-ssot",
  },
  {
    name: "Turtlebot Rescuer",
    description:
      "Programming turtlebot to perform various tasks in real time. These tasks include system setup, autonomous navigation and advanced perception and cognitive capabilities.",
    tags: [
      {
        name: "python",
        color: "blue",
      },
      {
        name: "ros",
        color: "yellow",
      },
      {
        name: "c++",
        color: "green",
      },
    ],
    image: "turtlebot.png",
    source: "https://github.com/bl4ko/ROS",
  },
  {
    name: "RealEstate ninja",
    description:
      "RealEstate ninja is a web application that allows users to search for real estate properties in Slovenia and comparing their prices.",
    tags: [
      {
        name: "python",
        color: "blue",
      },
      {
        name: "nextjs",
        color: "purple",
      },
    ],
    image: "real_estate_ninja.png",
    source: "",
  },
  {
    name: "Certstream-go",
    description: "Go client for connecting to CertStream",
    tags: [
      {
        name: "go",
        color: "aqua",
      },
    ],
    image: "certstream.png",
    source: "https://github.com/bl4ko/certstream-go",
  },
];
