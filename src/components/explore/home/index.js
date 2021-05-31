import React from 'react';
import Vector from '../vectors';
import NavBar from '../navBar';

import Text from './homeText';

export default function Home() {
  return (
    <div className="mt-16 bg-offwhite relative h-screen w-screen">
      <NavBar />
      <div className="flex-col text-center p-10">
        <div className="uppercase text-5xl">{Text.know}</div>
        <div>{Text.learn}</div>
        <div>{Text.explore}</div>
      </div>
      <Vector name="sea-floor" className="absolute bottom-0" />
      {/* <Vector name="wave-bottom2" className="absolute top-40 z-0" />
      <Vector name="scuba" className="absolute bottom-60 right-56 z-25" />
      <div className="bg-blue h-40 absolute bottom-0 p-32 w-screen" /> */}
    </div>
  );
}
