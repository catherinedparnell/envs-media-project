/* eslint-disable max-len */
import React from 'react';
import Graph from '../../lib/transitionBarGraph';

// data from https://journals.plos.org/plosone/article/figure?id=10.1371/journal.pone.0111913.t001
import plasticPollutionData from '../../../data/plasticPollution.json';
import NavigationPage from '../../lib/navigationPage';

import Text from './constants';

export default function EcologicalFlow() {
  return (
    <div>
      <div className="bg-yellow text-dark h-screen">
        <div className="py-40">
          <div className="absolute z-50 h-screen w-screen flex-col">
            <div className="font-sans uppercase text-5xl">{Text.graphTitle}</div>
            <Graph data={plasticPollutionData.weight} id="impact-parts-graph" initialHeight={350} initialWidth={1000} initialMargin={60} />
          </div>
        </div>
      </div>
      <NavigationPage />
    </div>
  );
}
