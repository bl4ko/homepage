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
    position: "Junior Cloud Engineer",
    company: "SRC D.O.O",
    companyLink: "https://www.src.si/",
    time: "July 2022 - Present",
    address: "Ljubljana, Slovenia",
    work: "Working on deploying and maintaining cloud infrastructure on our local kubernetes clusters. Fixing network issues, automating tasks using renovate and ansible. Also developed cloud native application using python django, react and postgresql.",
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
