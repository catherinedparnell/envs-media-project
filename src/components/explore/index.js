import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Explore(props) {
  return (
    <div>
      <div>This is the explore the policies page.</div>
      <NavLink to="/">Go back to beginning</NavLink>
    </div>
  );
}
