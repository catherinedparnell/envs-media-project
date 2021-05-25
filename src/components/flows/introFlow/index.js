import { motion } from 'framer-motion';
import React from 'react';
import NavigationPage from '../../lib/navigationPage';

export default function Intro(props) {
  const variants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  return (
    <div>
      <div className="bg-blue text-offwhite h-screen min-w-full overflow-x-scroll flex-col">
        <motion.div
          className="self-start m-3"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="font-sans text-white uppercase text-7xl">
            The world produces <span className="text-9xl">381 million tons</span> of plastic per year.
          </div>
        </motion.div>
        <div className="flex self-end">
          <div className="rounded-xl h-10 w-10 m-20 bg-dark" />
          <div className="rounded-xl h-20 w-20 m-20 bg-dark" />
          <div className="rounded-xl h-36 w-36 m-20 bg-dark" />
          <div className="rounded-xl h-64 w-64 m-20 bg-dark" />
          <div className="rounded-xl h-10 w-10 m-20 bg-dark" />
        </div>
      </div>
      <NavigationPage introFlow />
    </div>
  );
}
