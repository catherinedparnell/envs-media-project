import React from 'react';
import { NavLink } from 'react-router-dom';
import Vector from '../vectors';

export default function NavigationPage(props) {
  const { introFlow } = props;
  return (
    <div className="bg-black text-white flex-col h-screen min-w-full">
      {introFlow
        ? (
          <div className="font-sans text-white text-5xl">
            3% seems like a pretty small percentage of overall global plastic waste
          </div>
        ) : null }
      <div className="font-sans text-white uppercase text-7xl">
        {introFlow ? 'So why is' : 'Learn more about how'} <span className="wave bg-wave-pattern">OCEAN PLASTIC POLLUTION</span> {introFlow ? 'such a problem?' : 'is sucha problem.'}
      </div>
      <div className="flex relative w-full justify-evenly">
        <div className="z-50">
          <NavLink to="/eco"><Vector name="arrow-left" /></NavLink>
          <div className="font-sans uppercase text-7xl bg-wave-pattern wave">Marine Life</div>
        </div>
        <Vector name="plastic" className="background-plastic" />
        <div className="z-50">
          <NavLink to="/human"><Vector name="arrow-right" /></NavLink>
          <div className="font-sans uppercase text-7xl bg-wave-pattern wave">People</div>
        </div>
      </div>
      {!introFlow
        ? (
          <NavLink to="/future">Keep going</NavLink>
        )
        : null}
    </div>
  );
}
