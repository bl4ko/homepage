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
    position: "Junior DevOps Engineer",
    company: "SRC D.O.O",
    companyLink: "https://www.src.si/",
    time: "July 2022 - August 2024",
    address: "Ljubljana, Slovenia",
    work: "Working on deploying and maintaining cloud infrastructure on our local kubernetes clusters. Fixing network issues, automating tasks using renovate and ansible. Also developed two cloud native application using python django, react, postgresql and go.",
  },
  {
    position: "Software Architect",
    company: "Self Employed",
    time: "October 2024 - Present",
    companyLink: "",
    address: "Ljubljana Slovenia",
    work: "Implemented real estate web application for a real estate agency. Also working on automating tasks for e-casinos",
  },
  {
    position: "DevOps Engineer",
    company: "SRC D.O.O",
    companyLink: "https://www.src.si/",
    time: "September 2024 - Present",
    address: "Ljubljana, Slovenia",
    work: "Working on deploying and maintaining cloud infrastructure on our local kubernetes clusters. Fixing network issues, automating tasks using renovate and ansible. Also developed two cloud native application using python django, react, postgresql and go.",
  },
];
