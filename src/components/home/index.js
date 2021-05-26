import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  const [none, setNone] = useState(true);
  const [show, setShow] = useState(false);

  function onMouseMove(e) {
    if (!show) {
      setNone(false);
      setLeft(e.pageX + 20);
      setTop(e.pageY - 20);
    }
  }

  function showHeadlines(e) {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseout', (event) => {
      if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
        setNone(true);
      }
    });
    setShow(true);
    setNone(true);
  }

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mousedown', showHeadlines);
  window.addEventListener('mouseout', (event) => {
    if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
      setNone(true);
    }
  });

  const variants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  console.log(window.screen.width, window.screen.height);

  return (
    <NavLink to="/intro">
      <div className="bg-dark text-offwhite flex h-screen relative">
        <motion.div
          className="flex-col w-1/2 self-end m-3 mb-36"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="font-sans uppercase text-7xl">
            Governments are imposing legislation to reduce <span className="text-red">plastic</span> in
          </div>
          <div className="font-sans uppercase text-9xl bg-wave-pattern wave">
            our oceans.
          </div>
        </motion.div>
        <motion.div initial="hidden"
          animate="visible"
          variants={variants}
          className={none ? 'hidden' : 'absolute h-10 w-10 rounded-full bg-yellow'}
          style={{ left, top }}
        />
      </div>
    </NavLink>
  );
}
