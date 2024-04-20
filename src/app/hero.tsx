"use client";

import { IconButton, Typography } from "@material-tailwind/react";

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
      </div>
    </div>
  );
}

export default Hero;
