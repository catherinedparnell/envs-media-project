/* eslint-disable max-len */
import React from 'react';

import BarChart from '../../lib/barChart';
import NavigationPage from '../../lib/navigationPage';
import LottieAnimation from '../../lib/lottieAnimation';

import Suzie from './animationData/suziePlastic.json';

import Text from './constants';
import Vector from '../../lib/vectors';
import Data from './data';

export default function EcologicalFlow() {
  return (
    <div>
      <div className="bg-offwhite text-dark h-screen">
        <div className="py-40">
          <div className="absolute z-50 h-screen w-screen flex-col">
            <div className="font-sans uppercase text-5xl">{Text.graphTitle}</div>
            <BarChart data={Data} width={500} height={500} />
          </div>
        </div>
      </div>
      {/* h-screen overflow-y-scroll */}
      <div className="relative bg-dark text-offwhite">
        <div className="w-screen h-screen flex-col relative">
          <div className="font-sans uppercase text-5xl absolute left-0 top-0 p-8">{Text.suzie}</div>
          <Vector name="suzie" className="absolute top-40 left-40" />
          <div className="font-sans uppercase text-3xl w-1/2 absolute right-0 bottom-0 p-8">{Text.endangered}</div>
        </div>
        <div className="w-screen h-screen flex-col relative">
          <div className="font-sans uppercase text-3xl w-1/2 absolute left-0 top-0 p-8">{Text.journey}</div>
          <Vector name="suzie" className="absolute top-40 left-40" />
          <div className="font-sans uppercase text-3xl w-1/2 absolute right-0 bottom-0 p-8">{Text.eggs}</div>
        </div>
        <div className="w-screen h-screen relative flex">
          <div className="font-sans uppercase text-5xl">{Text.threat}</div>
          <div className="absolute bottom-0 right-0 z-50 h-screen w-screen overflow-hidden">
            <LottieAnimation animationData={Suzie} />
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
          <Vector name="suzie" className="absolute top-40 left-40" />
          <div className="font-sans uppercase text-3xl w-1/2 absolute right-0 bottom-0 p-8">{Text.baby}</div>
        </div>
        <div className="w-screen h-screen flex relative">
          <div className="font-sans uppercase text-5xl text-center z-50 p-52">{Text.actions}</div>
          <Vector name="suzie" className="absolute top-40 left-1/4" />
        </div>
      </div>
      <NavigationPage />
    </div>
  );
}
