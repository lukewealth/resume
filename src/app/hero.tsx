"use client";

import { IconButton, Typography } from "@/components/tailwind/compo";
import Image from "next/image";
function Hero() {
  return (
    <div className='relative  mb-20 w-full'>
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
        <div className='flex w-[90%] md:flex-row flex-col-reverse  justify-around'>
          <div className='md:w-[50%]'>
            <h3 className='text-lg font-semibold'> About Me</h3>
            Luke Okagha is an entrepreneur and tech enthusiast dedicated to
            leveraging technology to solve real-world challenges. As the
            co-founder of TRICODE Professional Remote Network, Luke is leading
            the charge in building a global community of engineers and
            professionals to collaborate on projects and share knowledge.
            <br className='' />
            {/* <h3 className='capitalize w-full font-semibold text-center'>
              Areas of Expertise
            </h3> */}
            <br />
            <h3 className='text-lg font-semibold'> Industrial Design:</h3>
            Luke has a keen eye for 3D product rendering, electrical and
            electronics isometric drawing and a deep understanding of industrial
            design principles, enabling me to understand users' needs in both
            hardware and software products with multiple disciplines in
            programming languages such as python, JavaScript, R and a little bit
            of C+ to build cross functional applications design thinking
            principles in problem solving when innovating user-friendly
            products.
            <br />
            <br />
            <h3 className='text-lg font-semibold'>Technical Support:</h3>
            With extensive experience in technical support, I can easily learn
            and excel at troubleshooting network systems, firewalls testing and
            resolving technical issues to ensure smooth operations.
            <br />
            <br />
            <h3 className='text-lg font-semibold'> DevOps Engineering:</h3>
            Luke is proficient in DevOps practices and tools like Git action, K8
            and Docker facilitating streamlined software development processes
            and enhanced collaboration between teams.
          </div>
          <div className='h-[21rem] rounded-lg w-full sm:w-[18rem] mb-44 md:mb-0 shrink-0'>
            <Image
              width={768}
              height={768}
              src={`/image/luke.jpg`}
              alt='testimonial image'
              className='h-full rounded-lg w-full object-cover'
            />
            <Typography className='mt-12 mb-4 text-blue-gray-900 font-medium uppercase'>
              Connect me on:
            </Typography>
            <div className='gap-2 lg:flex'>
              <IconButton variant='text' color='gray'>
                <a href='https://linkedin.com/in/luke-okagha'>
                  <i className='fa-brands fa-linkedin text-lg' />
                </a>
              </IconButton>
              <IconButton variant='text' color='gray'>
                <a href='https://github.com/lukewealth'>
                  <i className='fa-brands fa-github text-lg' />
                </a>
              </IconButton>
            </div>
            <a
              className='text-green-700 font-semibold hover:underline'
              href='https://drive.google.com/file/d/1XaXLyip53gAJV-SI0w70518J0wmzwLSF/view?usp=drivesdk'
            >
              Download Cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
