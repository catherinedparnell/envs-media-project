import React from 'react';
import NavBar from '../navBar';

import Text from './turtleText';

export default function Suzie() {
  return (
    <div className="mt-16">
      <NavBar />
      <div className="flex-col text-lg text-left p-10">
        <div className="uppercase text-center text-5xl">{Text.magnificent}</div>
        <div className="pt-10">{Text.seven}</div>
        <div className="pt-10">{Text.endangered}</div>
        <div className="pt-10">{Text.cycle}</div>
        <div className="pt-10">{Text.nest}</div>
        <div className="pt-10">{Text.incubate}</div>
        <div className="pt-10">{Text.gender}</div>
        <div className="pt-10">{Text.hatch}</div>
        <div className="pt-10">{Text.seaweed}</div>
        <div className="pt-10">{Text.survive}</div>
        <div className="pt-10">{Text.maturity}</div>
        <div className="pt-10">{Text.old}</div>
        <div className="pt-10">{Text.heading}</div>
        <div className="pt-10">{Text.states}</div>
        <div className="pt-10">{Text.protect}</div>
        <div className="pt-10">{Text.threatTitle}</div>
        <div className="pt-5">{Text.threat.map((t) => <div className="ml-10">{t}</div>)}</div>
        <div className="pt-10">{Text.plastic}</div>
        <div className="pt-10">{Text.section}</div>
        <div className="pt-10">{Text.impactTitle}</div>
        <div className="pt-5">{Text.impact.map((t) => <div className="ml-10">{t}</div>)}</div>
        <div className="pt-10">{Text.young}</div>
        <div className="pt-10">{Text.baby}</div>
        <div className="pt-10">{Text.digestive}</div>
        <div className="pt-10">{Text.death}</div>
        <div className="pt-10">{Text.hope}</div>
      </div>
    </div>
  );
}
