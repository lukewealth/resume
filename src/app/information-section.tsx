"use client";
import { Typography } from "@/components/tailwind/compo";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";
import { useInView } from "react-intersection-observer";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Bsc. Computer Science department of information Technology",
    date: "2019",
    children:
      "This comprehensive program covered HTML5, CSS3, JavaScript, responsive design, server-side scripting, and web security.",
  },
  {
    icon: AcademicCapIcon,
    title: "Odinary National Diploma (OND), Electrical Electronics Engineering",
    date: "2013-2015",
    children:
      "Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering, Database Management.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Costumer Relationship Manager",
    date: "2021",
    children:
      "The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the project's specifications.",
  },
  {
    icon: BriefcaseIcon,
    title: "Engineering consultant",
    date: "2015 - 2016",
    children:
      "Developed 10+ responsive websites for clients in a variety of industries.",
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "Front-End Frameworks",
    date: "Technical Skills",
    children:
      "Competent in working with front-end frameworks such as React, Angular, or Vue.js to develop dynamic and responsive web applications with a focus on user experience.",
  },
  {
    icon: FireIcon,
    title: "Attention to Detail",
    date: "Soft Skills",
    children:
      "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
  },
  {
    icon: FireIcon,
    title: "Responsive Web Design",
    date: "Technical Skills",
    children:
      "Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.",
  },
  {
    icon: FireIcon,
    title: "Time Management",
    date: "Soft Skills",
    children:
      "Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
  },
];

export function InformationSection() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section ref={ref} className='pb-28  px-8'>
      <div className='grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start'>
        <div>
          <div className='mb-10'>
            <Typography color='blue-gray' className='mb-2 text-3xl font-bold'>
              Education & Certifications
            </Typography>
            <Typography variant='lead' className='!text-gray-500'>
              See my education history.
            </Typography>
          </div>
          <div className='container mx-auto grid grid-cols-1 gap-16 gap-y-12'>
            {EDUCATION.map((props, idx) => (
              <InfoCard inView={inView} key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className='mb-10'>
            <Typography color='blue-gray' className='mb-2 text-3xl font-bold'>
              Experience
            </Typography>
            <Typography variant='lead' className='!text-gray-500'>
              See my experience as a developer.
            </Typography>
          </div>
          <div className='container mx-auto grid grid-cols-1 gap-16 gap-y-12'>
            {EXPERIENCE.map((props, idx) => (
              <InfoCard inView={inView} key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className='container gap-20 mt-36 mx-auto items-center'>
        <div>
          <div className='mb-10'>
            <Typography color='blue-gray' className='mb-2 text-3xl font-bold'>
              Skills
            </Typography>
            <Typography variant='lead' className='!text-gray-500'>
              Check out my technical and soft skills.
            </Typography>
          </div>
          <div className='container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2'>
            {SKILLS.map((props, idx) => (
              <InfoCard inView={inView} key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
