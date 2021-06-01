import React from 'react';
import NavBar from '../navBar';

import Text from './methodologyText';
import Vector from '../vectors';

export default function Methods() {
  return (
    <div className="mt-16 text-xl bg-offwhite text-darker">
      <NavBar />
      <div className="m-10 flex flex-col">
        <Vector name="dark-logo" className="h-1/2 w-1/2 mt-10 self-center" />
        <div className="py-5 bg-dark text-offwhite">
          <div className="text-center text-4xl">Methodology</div>
        </div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center text-4xl">Sources</div>
        </div>
        <div className="pt-10 text-3xl">Data &amp; Background Information:</div>
        <div className="pt-5 pl-5">{Object.keys(Text).map((t) => <div className="py-2 ml-10 indent">{Text[t]}</div>)}</div>
      </div>
    </div>
  );
}
