import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import LineChart from '../../lib/lineChart';
import Vector from '../../lib/vectors';

import Text from './constants';
import Data from './data';

export default function CombinedFlow() {
  const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className="text-dark">
      <div className="bg-yellow relative h-screen w-screen">
        <div className="text-center text-6xl p-20">{Text.intro}</div>
        <Vector name="wave-bottom2" className="bottom-0 absolute" />
        <Vector name="plastics2" className="absolute -bottom-10" />
      </div>
      <div className="flex-col w-screen h-screen bg-blue">
        <div className="flex justify-evenly">
          <div className="bg-yellow container m-10 h-3/5 p-2 flex-col">
            <div className="text-center text-m p-2">Future of macroplastics in our oceans</div>
            <LineChart height={400} width={500} data={Data.macroplasticData} />
          </div>
          <div className="bg-yellow container m-10 h-3/5 p-2 flex-col">
            <div className="text-center text-m p-2">Future of microplastics in our oceans</div>
            <LineChart height={400} width={500} data={Data.microplasticData} />
          </div>
        </div>
        <div className="text-white text-5xl mx-10 p-5 w-screen h-60 overflow-y-scroll">
          <div className="p-3">{Text.graph[0]}</div>
          <div className="ml-10 text-4xl">
            <div>{Text.graph[1]}</div>
            <div>{Text.graph[2]}</div>
            <div>{Text.graph[3]}</div>
          </div>
          <div className="mt-20">
            <div className="p-3">{Text.graphGist[0]}</div>
            <div className="ml-10 mx-10">{Text.graphGist[1]}</div>
          </div>
        </div>
      </div>
      <div className="bg-blue relative h-screen w-screen">
        <div className="bg-offwhite container p-10 mx-10">
          <div className="text-center text-6xl">{Text.buried}</div>
        </div>
        <Vector name="sand-plastics" className="bottom-0 absolute" />
      </div>
      <div className="bg-yellow relative h-screen w-screen">
        <div className="text-center bottom-0 absolute text-6xl p-20">{Text.break}</div>
        <Vector name="plastics-chart" className="pt-40" />
      </div>
      <div className="bg-dark text-offwhite relative h-screen w-screen">
        <div className="text-center text-6xl p-20">{Text.time}</div>
        <div className="text-center text-6xl p-20">{Text.now}</div>
        <motion.div initial="hidden"
          animate="visible"
          variants={variants}
          className="absolute left-1/4 w-full mx-44 mt-40"
        >
          <NavLink to="/explore">
            <div className="container relative flex-col bg-offwhite text-dark uppercase w-1/4 text-3xl p-10 text-center">
              Click to explore
              <div className="scroll-prompt" scroll-prompt="" ng-show="showPrompt" style={{ opacity: 1 }}>
                <div className="scroll-prompt-arrow-container">
                  <div className="scroll-prompt-arrow"><div /></div>
                  <div className="scroll-prompt-arrow"><div /></div>
                </div>
              </div>
            </div>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}
