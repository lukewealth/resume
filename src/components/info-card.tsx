import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@/components/tailwind/compo";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  date: string;
  children: React.ReactNode;
  inView: boolean;
}

export function InfoCard({
  icon: Icon,
  title,
  date,
  children,
  inView,
}: InfoCardProps) {
  const animation = useAnimation();
  const animationImg = useAnimation();
  useEffect(() => {
    console.log("inView", inView);

    if (!inView) {
      animation.start({
        x: -200,
        opacity: 0,
      });
      animationImg.start({
        x: +200,
        opacity: 0,
      });
    } else {
      animation.start({
        x: 0,
        opacity: 1,
      });
      animationImg.start({
        x: 0,
        opacity: 1,
      });
    }
  }, [inView, animation, animationImg]);
  return (
    <motion.div animate={animation} transition={{ duration: 0.6 }}>
      <Card>
        <CardHeader
          className='flex items-center justify-between rounded-none overflow-visible'
          floated={false}
          shadow={false}
        >
          <div className='flex flex-col gap-1 w-full'>
            <Typography color='blue' className='font-bold text-xs'>
              {date}
            </Typography>
            <Typography color='blue-gray' variant='h5' className='w-full'>
              {title}
            </Typography>
          </div>
          <IconButton
            className='flex-shrink-0 pointer-events-none'
            ripple={false}
          >
            <Icon className='h-5 w-5' strokeWidth={2} />
          </IconButton>
        </CardHeader>
        <CardBody className='grid justify-start !px-3.5 pt-2'>
          <Typography className=' font-normal !text-gray-500'>
            {children}
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default InfoCard;
