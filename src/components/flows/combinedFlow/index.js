import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedPlastics from '../../lib/animatedPlastics';

export default function CombinedFlow(props) {
  return (
    <div>
      This is the combined flow page.
      <AnimatedPlastics />
      <NavLink to="/explore">Go explore</NavLink>
    </div>
  );
}
