"use client";

import { Typography } from "@/components/tailwind/compo";
function Hero() {
  return (
    <div className='relative w-full'>
      <div className='grid place-items-center min-h-[92vh] px-8'>
        <div className='container mx-auto grid place-items-center h-max text-center'>
          <Typography variant='h1' color='blue-gray'>
            Technical Product Manager
          </Typography>
          <Typography
            variant='lead'
            color='gray'
            className='mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl'
          >

            Welcome to the online portfolio of Luke Okagha, a visionary tech
            innovator, and co-founder of TRICODE Professional Remote Network.
          </Typography>
        </div>
 <div className='container max-w-screen-lg mx-auto'>
        <div className='container mx-auto mb-20 text-center'>
          <Typography variant='h2' color='blue-gray' className='mb-4'>
            What Clients Say
          </Typography>
          <Typography
            variant='lead'
            className='mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12'
          >
About Me
Luke Okagha is an entrepreneur and tech enthusiast dedicated to leveraging technology to solve real-world challenges. As the co-founder of TRICODE Professional Remote Network, Luke is leading the charge in building a global community of engineers and professionals to collaborate on projects and share knowledge.

Areas of Expertise
Industrial Design: Luke has a keen eye for 3D product rendering, electrical and electronics isometric drawing and a deep understanding of industrial design principles, enabling me to understand users' needs in both hardware and software products with multiple disciplines in programming languages such as python, JavaScript, R and a little bit of C+ to build cross functional applications design thinking principles in problem solving when innovating user-friendly products.

Technical Support: With extensive experience in technical support, I can easily learn and excel at troubleshooting network systems, firewalls testing and resolving technical issues to ensure smooth operations.

DevOps Engineering: Luke is proficient in DevOps practices and tools like Git action, K8 and Docker facilitating streamlined software development processes and enhanced collaboration between teams.


            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
