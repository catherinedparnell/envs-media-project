import React from 'react';
import { NavLink } from 'react-router-dom';

import LineChart from '../../lib/lineChart';

import Data from './data';

export default function CombinedFlow(props) {
  return (
    <div>
      This is the combined flow page.
      <div className="flex w-screen justify-evenly">
        <LineChart height={500} width={500} data={Data.macroplasticData} />
        <LineChart height={500} width={500} data={Data.microplasticData} />
      </div>
      <NavLink to="/explore">Go explore</NavLink>
    </div>
  );
}
