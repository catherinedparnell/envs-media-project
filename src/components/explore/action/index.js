import React from 'react';
import NavBar from '../navBar';

import Text from './actionText';

export default function Action() {
  return (
    <div className="mt-16 text-xl">
      <NavBar />
      <div className="flex-col text-left p-10">
        <div className="uppercase text-center text-5xl">{Text.now}</div>
        <div className="pt-10 text-center">{Text.you}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center text-4xl">{Text.part}</div>
        </div>
        <div className="pt-10 text-2xl">{Text.easy}</div>
        <div>
          <div className="pt-10">{Text.swaps}</div>
          <div className="pt-5">{Text.single.map((t) => <div className="ml-10">{t}</div>)}</div>
          <div className="pt-10">{Text.recycle}</div>
          <div className="pt-5">{Text.confusing.map((t) => <div className="ml-10">{t}</div>)}</div>
          <div className="pt-10">{Text.water}</div>
          <div className="pt-5"><div className="ml-10">{Text.ditch}</div></div>
          <div className="pt-10">{Text.cleanup}</div>
          <div className="pt-5"><div className="ml-10">{Text.help}</div></div>
          <div className="pt-10">{Text.bans}</div>
          <div className="pt-5"><div className="ml-10">{Text.support}</div></div>
        </div>
      </div>
    </div>
  );
}
