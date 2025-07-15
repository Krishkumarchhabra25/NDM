import Skeleton from "./SkeletonLoader"; // 🆕
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MainFeature = () => {
  const { articles, loading } = useSelector((state: RootState) => state.articles);
  const features = [...articles]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
  };

  if (loading || features.length === 0) {
    return (
      <section className="col-span-12 md:col-span-6 border-x px-4 md:px-6">
        <Skeleton className="w-full aspect-[16/9]" />
        <Skeleton className="h-6 mt-4 w-2/3" />
        <Skeleton className="h-4 mt-2 w-1/2" />
        <Skeleton className="h-3 mt-1 w-1/3" />
      </section>
    );
  }

  const currentFeature = features[index];

  return (
    <section className="relative col-span-12 md:col-span-6 text-center border-x border-[#dcdcdc] px-4 md:px-6">
      <Link to={`/article/${currentFeature._id}`} key={currentFeature._id}>
        <div className="w-full aspect-[16/9] overflow-hidden relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={currentFeature.image}
              src={currentFeature.image}
              alt={currentFeature.title}
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

        <div className="mt-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-800 font-heading">
            {currentFeature.title}
          </h1>
          <p className="text-base md:text-lg mb-2 text-gray-800 font-subheading">
            {currentFeature.subheading}
          </p>
          <p className="uppercase text-xs md:text-sm text-gray-600 font-author">
            By {currentFeature.author}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default MainFeature;
