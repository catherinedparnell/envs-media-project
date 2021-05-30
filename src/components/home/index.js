import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import America from './america';

export default function Home() {
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  const [none, setNone] = useState(true);
  const [show, setShow] = useState(false);
  const [onNav, setOnNav] = useState(false);
  const [textID, setTextID] = useState(-1);

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

  const handleClick = () => {
    if (textID < 2) {
      if (textID === 1) {
        setOnNav(true);
      }
      setTextID(textID + 1);
    }
  };

  if (onNav) {
    return (
      <NavLink to="/intro">
        <America left={left} top={top} none={none} textID={textID} />
      </NavLink>
    );
  } else {
    return (
      <div onClick={handleClick} role="button" tabIndex={0}>
        <America left={left} top={top} none={none} textID={textID} />
      </div>
    );
  }
}
