import React from 'react';
import { NavLink } from 'react-router-dom';
import Vector from '../vectors';

export default function Footer() {
  return (
    <div className="nav absolute text-xl bottom-0 w-screen bg-dark text-offwhite flex justify-evenly h-16">
      <NavLink to="/explore/"><div className="h-20 w-40 pb-2"><Vector name="logo" className="h-full w-full" /></div></NavLink>
    </div>
  );
}
