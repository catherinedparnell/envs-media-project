/* eslint-disable max-len */
import React, { useState } from 'react';

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

  return (
    <div>
      <div className="bg-yellow text-dark h-screen">
        <Vector name="wave-tilt-left" className="absolute z-0" />
        <div className="py-40">
          <div className="absolute z-50 h-screen w-screen">
            <div className="font-sans uppercase text-5xl">{Text.graphTitle}</div>
            <BarChart data={Data} width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="bg-red text-yellow flex-col justify-center">
        <div className="w-1/2 flex-col justify-center">
          {Text.intro.map((text) => <div className="font-sans uppercase text-5xl py-60">{text}</div>)}
        </div>
      </div>
      <div className="bg-dark text-offwhite flex justify-center h-screen">
        <AnimatedPlastics setStarted={setStarted} start={started} />
        <LottieAnimation animationData={Fish} stop={!started} />
        <div className="font-sans uppercase text-5xl py-60 w-1/2">{Text.eat}</div>
      </div>
      <div className="bg-blue text-offwhite flex justify-center">
        <LottieAnimation animationData={Human} />
        <div className="font-sans uppercase text-5xl py-60 w-1/2">{Text.eat}</div>
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
