import React from 'react';
import NavBar from '../navBar';

import Text from './turtleText';

export default function Suzie() {
  return (
    <div className="mt-16 text-darker thin">
      <NavBar />
      <div className="flex flex-col text-2xl text-left p-10 items-center">
        <div className="flex">
          <div className="uppercase font-bold text-5xl">{Text.magnificent}</div>
          <img src="/images/turtlethoughtbubble.png" alt="table" className="h-3/5 w-3/5 mt-10" />
        </div>
        <div className="text-4xl font-bold text-left">{Text.seven}</div>
        <img src="/images/seven.png" alt="table" className="h-4/5 w-4/5 mx-10 mt-10" />
        <div className="pt-10 w-full font-bold text-4xl text-left">{Text.endangered}</div>
        <div className="pt-10 w-full text-left">{Text.cycle}</div>
        <div className="pt-10 w-full text-left">{Text.nest}</div>
        <img src="/images/suziecrawl.png" alt="table" className="h-2/5 w-2/5 mt-10 container" />
        <div className="pt-10 w-full text-left">{Text.incubate}</div>
        <div className="pt-10 w-full text-left">{Text.hatch}</div>
        <img src="/images/hatchlings.png" alt="table" className="h-2/5 w-2/5 mt-10 container" />
        <div className="pt-10 w-full text-left">{Text.seaweed}</div>
        <img src="/images/sargassum.png" alt="table" className="h-2/5 w-2/5 mt-10 container" />
        <div className="pt-10 w-full text-left">{Text.survive}</div>
        <div className="pt-10 w-full text-left">{Text.maturity}</div>
        <div className="pt-10 w-full text-left">{Text.old}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite w-full">
          <div className="text-center font-bold text-4xl">{Text.heading}</div>
        </div>
        <div className="pt-10 text-left text-3xl">{Text.states}</div>
        <img src="/images/usturtles.png" alt="table" className="h-3/5 w-3/5 my-10" />
        <div className="pt-10 w-full text-left">{Text.protect}</div>
        <div className="pt-10 w-full text-left font-bold text-3xl">{Text.threatTitle}</div>
        <div className="pt-5 w-full text-left">{Text.threat.map((t) => <div className="ml-10">{t}</div>)}</div>
        <div className="pt-10 w-full text-left">{Text.plastic}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite w-full">
          <div className="text-center font-bold text-4xl">{Text.section}</div>
        </div>
        <div className="pt-10 text-left w-full font-bold text-3xl">{Text.impactTitle}</div>
        <div className="pt-5 text-left w-full">{Text.impact.map((t) => <div className="ml-10">{t}</div>)}</div>
        <div className="pt-10 text-left w-full">{Text.young}</div>
        <div className="pt-10 text-left w-full">{Text.baby}</div>
        <div className="pt-10 text-left w-full">{Text.digestive}</div>
        <div className="pt-10 text-left w-full">{Text.death}</div>
        <img src="/images/deadbabyturt.png" alt="table" className="h-2/5 w-2/5 mt-10 container" />
        <div className="pt-10 font-bold text-3xl">{Text.hope}</div>
        <img src="/images/hopefulbaby.png" alt="table" className="h-2/5 w-2/5 mt-10 container" />
      </div>
    </div>
  );
}
