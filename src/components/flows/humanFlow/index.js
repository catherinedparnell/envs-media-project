/* eslint-disable max-len */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import NavigationPage from '../../lib/navigationPage';
import Vector from '../../lib/vectors';
import BarChart from '../../lib/barChart';
import LottieAnimation from '../../lib/lottieAnimation';
import AnimatedPlastics from '../../lib/animatedPlastics';

import Text from './constants';
import Data from './data';
import Human from './animations/human.json';
import Fish from './animations/fish.json';

export default function HumanFlow() {
  const [started, setStarted] = useState(false);

  const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <div>
      <div className="bg-blue text-dark flex-col justify-center h-screen overflow-y-scroll">
        <div className="w-1/2 flex-col justify-center">
          {Text.intro.map((text) => <div className="font-sans uppercase text-5xl py-60">{text}</div>)}
        </div>
      </div>
      <div className="bg-yellow text-dark h-screen">
        <div className="h-screen w-screen flex">
          <motion.div
            className="self-start m-10 w-1/2"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <div className="font-sans text-blue uppercase text-7xl">
              There are almost <div className="text-8xl text-red">5 trillion</div> microplastic particles in the world&apos;s surface oceans.
            </div>
          </motion.div>
          <div className="bg-offwhite container m-10 p-10 w-1/2">
            <div className="font-sans text-2xl w-3/4 py-5">{Text.graphTitle}</div>
            <BarChart data={Data} width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="bg-dark text-offwhite flex justify-center h-screen">
        <AnimatedPlastics setStarted={setStarted} start={started} />
        <LottieAnimation animationData={Fish} stop={!started} />
        <div className="font-sans uppercase text-5xl py-60 w-1/2">{Text.ingest}</div>
      </div>
      <div className="bg-blue text-dark flex justify-evenly h-screen w-screen">
        <div className="flex-col w-1/2">
          <div className="flex bg-yellow container justify-center p-5 h-1/3 m-20">
            <div className="font-sans uppercase text-3xl m-5 my-12 w-3/4">{Text.dinner}</div>
            <Vector name="dinner-plate" className="my-14" />
          </div>
          <div className="flex bg-yellow container justify-center p-5 h-1/3 m-20">
            <div className="font-sans uppercase text-3xl m-5 my-10">{Text.eat}</div>
          </div>
        </div>
        <div className="mt-5 ml-20 w-1/2">
          <LottieAnimation animationData={Human} />
        </div>
      </div>
      <div className="bg-yellow text-red flex-col h-screen justify-center relative">
        <div className="flex">
          <div className="font-sans text-right text-4xl w-1/2 pr-5">{Text.extent}</div>
          <div className="font-sans text-left text-4xl w-1/2 pl-5 pt-80 pb-5">{Text.harm}</div>
        </div>
        <div className="font-sans text-dark text-center w-1/2 text-4xl absolute bottom-10 left-1/4">{Text.final}</div>
        {/* <Vector name="wave-bottom" className="absolute bottom-0" /> */}
      </div>
      <NavigationPage />
    </div>
  );
}
