/* eslint-disable max-len */
import React from 'react';
import Graph from '../../lib/transitionBarGraph';

// data from https://journals.plos.org/plosone/article/figure?id=10.1371/journal.pone.0111913.t001
import plasticPollutionData from '../../../data/plasticPollution.json';
import NavigationPage from '../../lib/navigationPage';
import Vector from '../../lib/vectors';

import Text from './constants';

export default function HumanFlow() {
  return (
    <div>
      <div className="bg-yellow text-dark h-screen">
        <Vector name="wave-tilt-left" className="absolute z-0" />
        <div className="py-40">
          <div className="absolute z-50 h-screen w-screen">
            <div className="font-sans uppercase text-5xl">{Text.graphTitle}</div>
            <Graph human data={plasticPollutionData.count} id="impact-parts-graph" initialHeight={350} initialWidth={1000} initialMargin={60} />
          </div>
        </div>
      </div>
      <div className="bg-red text-yellow flex-col justify-center">
        <div className="w-1/2 flex-col justify-center">
          {Text.intro.map((text) => <div className="font-sans uppercase text-5xl py-60">{text}</div>)}
        </div>
      </div>
      <div className="bg-yellow text-red flex-col justify-center relative">
        <div className="flex">
          <div className="font-sans text-right text-4xl w-1/2 pr-5">{Text.extent}</div>
          <div className="font-sans text-left text-4xl w-1/2 pl-5 pt-80 pb-5">{Text.harm}</div>
        </div>
        <div className="font-sans text-dark text-center w-1/2 text-4xl absolute bottom-10 left-1/4">{Text.final}</div>
        <Vector name="wave-bottom" className="absolute bottom-0" />
      </div>
      <NavigationPage />
    </div>
  );
}
