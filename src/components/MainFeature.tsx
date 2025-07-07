import  { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import data from '../data/data';

const MainFeature = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const features = data.main;

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // swipe left to right
      setIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative col-span-12 md:col-span-6 text-center border-x border-[#dcdcdc] px-4 md:px-6">
      <div className="w-full aspect-[16/9] overflow-hidden relative">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={features[index].image}
            src={features[index].image}
            alt={features[index].title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Text below image */}
      <div className="mt-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-800 font-heading">
          {features[index].title}
        </h1>
        <p className="text-base md:text-lg mb-2 text-gray-800 font-subheading">
          {features[index].subheading}
        </p>
        <p className="uppercase text-xs md:text-sm text-gray-600 font-author">
          By The India Desk
        </p>
      </div>
    </section>
  );
};

export default MainFeature;
