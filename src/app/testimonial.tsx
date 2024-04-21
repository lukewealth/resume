"use client";

import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
  Avatar,
  IconButton,
} from "@/components/tailwind/compo";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className='py-12 px-8 mb-20 lg:py-24'>
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
        <Card color='transparent' shadow={false} className='py-8 lg:flex-row'>
          <CardBody className='w-full lg:gap-10 h-full lg:!flex justify-between '>
            <div className='w-full mb-10 lg:mb-0'>
              <Typography
                variant='h3'
                color='blue-gray'
                className='mb-4 font-bold lg:max-w-xs'
              >
                Uniben Taskman Mobile Application
              </Typography>
              <Typography className='mb-3 w-full lg:w-8/12 font-normal !text-gray-500'>
                I had the pleasure of working with Luke on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </Typography>
              <Typography variant='h6' color='blue-gray' className='mb-0.5'>
                Victor - Exams and Records
              </Typography>
              <Typography
                variant='small'
                className='font-normal mb-5 !text-gray-500'
              >
                Admin @ UNIBEN.
              </Typography>
              {/* <div className='flex items-center gap-4'>
                <Avatar
                  variant='rounded'
                  src='/image/avatar1.jpg'
                  alt='spotify'
                  size='sm'
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <div className='w-[1px] h-[36px] bg-blue-gray-100 '></div>
                <Avatar
                  variant='rounded'
                  src='/image/avatar2.jpg'
                  alt='spotify'
                  size='sm'
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className='w-[1px] h-[36px] bg-blue-gray-100' />
                <Avatar
                  variant='rounded'
                  src='/image/avatar3.jpg'
                  alt='spotify'
                  size='sm'
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                />
              </div> */}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
