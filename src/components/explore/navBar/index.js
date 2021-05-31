import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div className="nav fixed text-xl top-0 w-screen bg-dark text-offwhite flex justify-evenly h-16">
      <NavLink className="navLink" to="/explore/"><div className="p-4">Home</div></NavLink>
      <NavLink className="navLink" to="/explore/plastic"><div className="p-4">Everything Plastic</div></NavLink>
      <NavLink className="navLink" to="/explore/suzie"><div className="p-4">Suzie the Sea Turtle</div></NavLink>
      <NavLink className="navLink" to="/explore/health"><div className="p-4">Human Health</div></NavLink>
      <NavLink className="navLink" to="/explore/action"><div className="p-4">Take Action</div></NavLink>
      <NavLink className="navLink" to="/explore/methods"><div className="p-4">Methodology</div></NavLink>
      <NavLink className="navLink" to="/"><div className="p-4">Story</div></NavLink>
    </div>
  );
}
