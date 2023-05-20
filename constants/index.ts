// const services = [
//     {
//         title: "Web Developer",
//         icon: web,
//     },
//     {
//         title: "React Native Developer",
//         icon: mobile,
//     },
//     {
//         title: "Backend Developer",
//         icon: backend,
//     },
//     {
//         title: "Content Creator",
//         icon: creator,
//     },
// ];

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

// const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#383E56",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#E6DEDD",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#383E56",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#E6DEDD",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

// const testimonials = [
//     {
//         testimonial:
//             "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//         name: "Sara Lee",
//         designation: "CFO",
//         company: "Acme Co",
//         image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//         testimonial:
//             "I've never met a web developer who truly cares about their clients' success like Rick does.",
//         name: "Chris Brown",
//         designation: "COO",
//         company: "DEF Corp",
//         image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//         testimonial:
//             "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//         name: "Lisa Wang",
//         designation: "CTO",
//         company: "456 Enterprises",
//         image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
// ];

export type Experience = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string[];
}

const experiences: Experience[] = [
    {
        position: "Software Engineer",
        company: "Google",
        companyLink: "https://www.google.com/",
        time: "June 2021 - Present",
        address: "Mountain View, CA",
        work: [
            "Developed and maintained web applications using React.js and other related technologies.",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implemented responsive design and ensured cross-browser compatibility.",
        ] 
    },
        {
        position: "Software Engineer",
        company: "Google",
        companyLink: "https://www.google.com/",
        time: "June 2021 - Present",
        address: "Mountain View, CA",
        work: [
            "Developed and maintained web applications using React.js and other related technologies.",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implemented responsive design and ensured cross-browser compatibility.",
        ] 
    },
        {
        position: "Software Engineer",
        company: "Google",
        companyLink: "https://www.google.com/",
        time: "June 2021 - Present",
        address: "Mountain View, CA",
        work: [
            "Developed and maintained web applications using React.js and other related technologies.",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implemented responsive design and ensured cross-browser compatibility.",
        ] 
    },
        {
        position: "Software Engineer",
        company: "Google",
        companyLink: "https://www.google.com/",
        time: "June 2021 - Present",
        address: "Mountain View, CA",
        work: [
            "Developed and maintained web applications using React.js and other related technologies.",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implemented responsive design and ensured cross-browser compatibility.",
        ] 
    },
    
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
        name: "Project3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: [
            {
                name: "c++",
                color: "blue",
            },
            {
                name: "python",
                color: "green",
            },
        ],
        image: "tesseract.png",
        source: "https://github.com/",
    },
];

// export { services, technologies, experiences, testimonials, projects };
export { projects, experiences };