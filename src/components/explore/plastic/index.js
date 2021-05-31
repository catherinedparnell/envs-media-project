import React from 'react';
import Vectors from '../vectors';
import NavBar from '../navBar';

import BarChart from '../../lib/barChart';
import Text from './plasticText';
import MacroData from '../../flows/ecologicalFlow/data';
import MicroData from '../../flows/humanFlow/data';

export default function Plastic() {
  return (
    <div className="mt-16 h-screen w-screen text-xl bg-offwhite">
      <NavBar />
      <div className="flex-col text-center p-10">
        <div className="uppercase text-5xl">{Text.intro[0]}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center text-4xl">{Text.lifecycle[0]}</div>
        </div>
      </div>
      <Vectors name="plastic-chart" className="h-full w-full" />
      <div className="flex-col text-left p-10">
        <div className="pt-10">{Text.long}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center text-4xl">Macroplastics</div>
        </div>
        <div className="pt-10">{Text.macroplastic}</div>
      </div>
      <div className="bg-yellow p-5 mx-10">
        <div className="bg-offwhite container mx-40 p-10 w-3/4">
          <div className="font-sans text-2xl w-3/4 py-5">{Text.graphmacroTitle}</div>
          <BarChart data={MacroData} width={500} height={500} />
        </div>
      </div>

      <div className="flex-col text-left p-10">
        <div className="pt-10">{Text.patch}</div>
        <div className="pt-10">{Text.decades}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center text-4xl">Microplastics</div>
        </div>
        <div className="pt-10">{Text.microplastic}</div>
        <div className="pt-10">{Text.particles}</div>
      </div>
      <div className="bg-yellow p-5 mx-10">
        <div className="bg-offwhite container mx-40 p-10 w-3/4">
          <div className="font-sans text-2xl w-3/4 py-5">{Text.graphmicroTitle}</div>
          <BarChart data={MicroData} width={500} height={500} />
        </div>
      </div>
      <div className="flex-col text-left p-10">
        <div>{Text.end}</div>
      </div>
    </div>
  );
}
