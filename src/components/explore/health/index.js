import React from 'react';
import NavBar from '../navBar';

import Text from './healthText';

export default function Health() {
  return (
    <div className="mt-16 bg-offwhite">
      <NavBar />
      <div className="flex-col text-lg text-left p-10">
        <div className="uppercase text-center text-5xl">{Text.microplastic}</div>
        <div className="pt-10">{Text.harmful}</div>
        <div className="pt-10">{Text.ingestion}</div>
        <div className="pt-10">{Text.negative}</div>
        <div className="pt-10">{Text.examples}</div>
        <div className="pt-10">{Text.poisonous}</div>
        <div className="pt-10">{Text.toxins}</div>
        <div className="pt-10">{Text.leach}</div>
        <div className="pt-10">{Text.question}</div>
        <div className="pt-10">{Text.survive}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center text-4xl">{Text.sectionHeader}</div>
        </div>
        <div className="pt-10">{Text.biomagnification}</div>
        <div className="pt-10">{Text.plate}</div>
        <div className="pt-10">{Text.understand}</div>
        <div className="pt-10">{Text.linked}</div>
        <div className="pt-10">{Text.you}</div>
      </div>
    </div>
  );
}
