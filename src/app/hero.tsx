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
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
