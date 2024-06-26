export type Color = "blue" | "green" | "red" | "yellow" | "purple";

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
        color: "blue",
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
    name: "Simple chat app",
    description:
      "Simple server-client tls communication app in python using custom messages protocol. App is able to send public and private messages, between peers.",
    tags: [
      {
        name: "python",
        color: "blue",
      },
      {
        name: "bash",
        color: "green",
      },
    ],
    image: "tls_communication.png",
    source: "https://github.com/bl4ko/SSL-TLS-Communication",
  },
];
