import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './navBar';

export default function Explore(props) {
  return (
    <div className="relative">
      <NavBar />
      <div className="mt-16">
        <div>This is the explore the policies page.</div>
        <NavLink to="/">Go back to beginning</NavLink>
      </div>
    </div>
  );
}
