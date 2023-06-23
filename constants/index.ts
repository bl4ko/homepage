// const technologies = [
//     {
//         name: "HTML 5",
//         icon: html,
//     },
//     {
//         name: "CSS 3",
//         icon: css,
//     },
//     {
//         name: "JavaScript",
//         icon: javascript,
//     },
//     {
//         name: "TypeScript",
//         icon: typescript,
//     },
//     {
//         name: "React JS",
//         icon: reactjs,
//     },
//     {
//         name: "Redux Toolkit",
//         icon: redux,
//     },
//     {
//         name: "Tailwind CSS",
//         icon: tailwind,
//     },
//     {
//         name: "Node JS",
//         icon: nodejs,
//     },
//     {
//         name: "MongoDB",
//         icon: mongodb,
//     },
//     {
//         name: "Three JS",
//         icon: threejs,
//     },
//     {
//         name: "git",
//         icon: git,
//     },
//     {
//         name: "figma",
//         icon: figma,
//     },
//     {
//         name: "docker",
//         icon: docker,
//     },
// ];

export type Experience = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
}

const experiences: Experience[] = [
    {
        position: "Junior Cloud Engineer",
        company: "SRC D.O.O",
        companyLink: "https://www.src.si/",
        time: "July 2022 - Present",
        address: "Ljubljana, Slovenia",
        work: "Working on deploying and maintaining cloud infrastructure on our local kubernetes clusters. Fixing network issues, automating tasks using renovate and ansible. Also developed cloud native application using python django, react and postgresql."
    },
    //     {
    //     position: "Software Engineer",
    //     company: "Google",
    //     companyLink: "https://www.google.com/",
    //     time: "June 2021 - Present",
    //     address: "Mountain View, CA",
    //     work: [
    //         "Developed and maintained web applications using React.js and other related technologies.",
    //         "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implemented responsive design and ensured cross-browser compatibility.",
    //     ] 
    // },
    //     {
    //     position: "Software Engineer",
    //     company: "Google",
    //     companyLink: "https://www.google.com/",
    //     time: "June 2021 - Present",
    //     address: "Mountain View, CA",
    //     work: [
    //         "Developed and maintained web applications using React.js and other related technologies.",
    //         "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implemented responsive design and ensured cross-browser compatibility.",
    //     ] 
    // },
    
];


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
}

const projects: Project[] = [
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
    {
        name: "Cloud Native Dashboard",
        description:
            "Cloud native dashboard for monitoring deployed applications.",
        tags: [
            {
                name: "python",
                color: "blue",
            },
            {
                name: "react",
                color: "yellow",
            },
        ],
        image: "tesseract.png",
        source: "https://github.com/",
    },
];

// export { services, technologies, experiences, testimonials, projects };
export { projects, experiences };