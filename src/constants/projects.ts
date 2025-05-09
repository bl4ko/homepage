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
