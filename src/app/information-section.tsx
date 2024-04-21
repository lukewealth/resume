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
const PROJECTS = [
  {
    icon: BriefcaseIcon,
    title: "Unversity of Benin TaskMan Android Application",
    date: "2023",
    children:
      "Developed screen components UI using react-native. Implemented chat functionality using and push notifications.",
  },
  {
    icon: BriefcaseIcon,
    title: "TRICODE NETWORK",
    date: "2023",
    children:
      "I created TRICODE NETWORK which is a remote recruitment Platform for software programmers and Engineers.",
  },
  {
    icon: BriefcaseIcon,
    title: "Project Irecycle",
    date: "2022",
    children:
      "Coordinated a team of developers during research and development. Provided insights on datas and presented to governmental bodies.",
  },
  {
    icon: BriefcaseIcon,
    title: "OyaNow Mobile Application",
    date: "2020",
    children:
      "Implemented store API , Wrote data structure and designed database using Python and storage in mogoDB",
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
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.3 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.3 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.3 });

  return (
    <section className='pb-28 w-full px-8'>
      <div className='grid xl:grid-cols-2 md:grid-cols-1 container w-full gap-20 mx-auto items-start'>
        <div ref={ref}>
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
        <div ref={ref1}>
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
              <InfoCard inView={inView1} key={idx.toString()} {...props} />
            ))}
          </div>
        </div>
        <div className='w-full' ref={ref2}>
          <div className='mb-10'>
            <Typography color='blue-gray' className='mb-2 text-3xl font-bold'>
              Projects
            </Typography>
            <Typography variant='lead' className='!text-gray-500'>
              See my projects undertaken.
            </Typography>
          </div>
          <div className='container mx-auto w-[80vw] border grid grid-cols-1 md:grid-cols-2 gap-16 gap-y-12'>
            {PROJECTS.map((props, idx) => (
              <InfoCard inView={inView2} key={idx.toString()} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div ref={ref3} className='container gap-20 mt-36 mx-auto items-center'>
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
              <InfoCard inView={inView3} key={idx.toString()} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
