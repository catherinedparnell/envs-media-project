import { motion } from 'framer-motion';
import React from 'react';
import NavigationPage from '../../lib/navigationPage';
import PieChart from './pie';
import Text from './constants';

export default function Intro(props) {
  const variants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  return (
    <div>
      <div className="bg-blue text-offwhite h-screen min-w-full overflow-x-scroll flex">
        <motion.div
          className="self-start m-3"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="font-sans text-white uppercase text-7xl">
            The world produces <div className="text-8xl text-yellow">381 million tons</div> of <span className="text-red">plastic</span> per year.
          </div>
        </motion.div>
        <div className="overflow-y-scroll p-14">
          <div className="container flex bg-yellow justify-center p-10 m-5 mt-10 mb-60">
            <div className="font-sans uppercase text-3xl text-blue">{Text.entersOceans}</div>
            <PieChart width={450} height={450} />
          </div>
          <div className="container flex bg-yellow justify-center p-10 m-5 my-60">
            <div className="font-sans uppercase text-3xl text-blue">{Text.entersOceans}</div>
            <PieChart width={450} height={450} />
          </div>
          <div className="container flex bg-yellow justify-center p-10 m-5 my-80">
            <div className="font-sans uppercase text-3xl text-blue">{Text.problem}</div>
          </div>
        </div>
      </div>
      <div className="bg-red h-screen min-w-full flex justify-center content-center">
        <div className="font-sans uppercase text-8xl mt-96 text-white">So why is <span className="wave bg-wave-pattern">OCEAN PLASTIC POLLUTION</span> a problem?</div>
      </div>
      <NavigationPage introFlow />
    </div>
  );
}
