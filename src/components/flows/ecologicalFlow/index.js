/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';

import BarChart from '../../lib/barChart';
import NavigationPage from '../../lib/navigationPage';
import LottieAnimation from '../../lib/lottieAnimation';

import Suzie from './animations/suziePlastic.json';
import SuzieSwim from './animations/suzieSwim.json';

import Text from './constants';
import Vector from '../../lib/vectors';
import Data from './data';

export default function EcologicalFlow() {
  const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <div>
      <div className="relative bg-dark text-offwhite">
        <div className="w-screen h-screen flex-col relative">
          <div className="font-sans uppercase text-5xl absolute left-0 top-0 p-8">{Text.suzie}</div>
          <Vector name="suzie" className="absolute top-40 left-40" />
          <div className="font-sans uppercase text-3xl w-1/2 absolute right-0 bottom-0 p-8">{Text.endangered}</div>
        </div>
        <div className="w-screen h-screen flex-col relative">
          <div className="font-sans uppercase text-3xl w-1/2 absolute left-0 top-0 p-8">{Text.journey}</div>
          {/* <Vector name="suzie" className="absolute top-40 left-40" /> */}
          <LottieAnimation animationData={SuzieSwim} />
          <div className="font-sans uppercase text-3xl w-1/2 absolute right-0 bottom-0 p-8">{Text.eggs}</div>
        </div>
        <div className="w-screen h-screen relative flex">
          <div className="font-sans uppercase text-5xl">{Text.threat}</div>
          <div className="absolute bottom-0 right-0 z-50 h-screen w-screen overflow-hidden">
            <LottieAnimation animationData={Suzie} />
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
                There are an estimated<div className="text-8xl text-red">2,334 tons</div> of macroplastics in the world&apos;s surface oceans.
              </div>
            </motion.div>
            <div className="bg-offwhite container m-10 p-10 w-1/2">
              <div className="font-sans text-2xl w-3/4 py-5">{Text.graphTitle}</div>
              <BarChart data={Data} width={500} height={500} />
            </div>
          </div>
        </div>
        <div className="w-screen h-screen flex relative">
          <div className="font-sans uppercase text-5xl text-center z-50 p-52">{Text.story}</div>
          <Vector name="suzie" className="absolute top-40 left-1/4" />
        </div>
        <div className="w-screen h-screen relative">
          <div className="font-sans uppercase text-3xl w-1/2 absolute left-0 top-0 p-8">{Text.others}</div>
          <Vector name="plastics" />
          <div className="font-sans uppercase text-3xl w-1/2 absolute right-0 bottom-0 p-8">{Text.caught}</div>
        </div>
        <div className="w-screen h-screen flex relative">
          <div className="font-sans uppercase text-3xl w-1/2 absolute left-0 top-0 p-8">{Text.hatchlings}</div>
          <Vector name="suzie" className="absolute top-28 right-40" />
          <div className="flex-col my-40 ml-40">
            <Vector name="suzie" className="m-10 w-20 h-20" />
            <Vector name="suzie" className="m-10 ml-32 w-20 h-20" />
            <Vector name="suzie" className="m-10 w-20 h-20" />
          </div>
          <div className="font-sans uppercase text-3xl w-1/2 absolute right-0 bottom-0 p-8">{Text.baby}</div>
        </div>
        <div className="w-screen h-screen flex relative bg-red justify-center">
          <div className="bg-yellow text-dark container h-1/2 w-1/2 z-50 mt-10">
            <div className="font-sans uppercase text-5xl text-center p-10">{Text.actions}</div>
          </div>

        </div>
        <Vector name="wave-bottom" className="z-0 absolute bottom-0" />
      </div>
      <NavigationPage />
    </div>
  );
}
