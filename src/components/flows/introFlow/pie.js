import React from 'react';
import { Pie } from 'react-chartjs-2';
import Data from './data';

export default function PieChart(props) {
  const { width, height } = props;
  return (
    <div>
      <Pie data={Data}
        width={width}
        height={height}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
