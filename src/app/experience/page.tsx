"use client";

import { motion, useScroll } from "framer-motion";
import { Experience as ExperienceType, experiences } from "@/constants";
import { useRef, JSX } from "react";

function LiIcon({ reference }: { reference: any }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "end end"],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 stroke-cyan">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        {/* Outside circle */}
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-cyan stroke-1 fill-none"
        />
        {/* Middle circle */}
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-black"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        {/* Inner circle */}
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-cyan"
        />
      </svg>
    </figure>
  );
}

function Details({ experience }: { experience: ExperienceType }) {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {experience.position}&nbsp;
          { experience.companyLink ?
          <a
            className="text-cyan capitalize"
            target="_blank"
            href={experience.companyLink}
          >
            @{experience.company}
          </a>
          :<span className="text-cyan capitalize">@{experience.company}

          </span>
          }
        </h3>
        <span className="capitalize font-medium text-gray">
          {experience.time} | {experience.address}
        </span>
        <p className="font-medium w-full">{experience.work}</p>
      </motion.div>
    </li>
  );
}

export default function Experience(): JSX.Element {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start animation when the top of the element is 50% in viewport
    // End animation when bottom of the element is above the end of the viewport
    offset: ["start center", "end end"],
  });

  return (
    <div className="my-12">
      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-cyan origin-top shadow-3xl"
        />
        <ul
          ref={ref}
          className="w-full flex flex-col items-start justify-between ml-6 sm:ml-4 md:ml-2 lg:ml-0"
        >
          {experiences.map((experience: ExperienceType, index: number) => (
            <Details key={`experience-${index}`} experience={experience} />
          ))}
        </ul>
      </div>
    </div>
  );
}
