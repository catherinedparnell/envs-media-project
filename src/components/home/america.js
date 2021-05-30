import React from 'react';
import { motion } from 'framer-motion';
import Vector from '../lib/vectors';
import Text from './constants';

export default function America(props) {
  const {
    none, top, left, textID,
  } = props;
  const variants = {
    visible: { opacity: 1, transition: { duration: 4 } },
    hidden: { opacity: 0 },
  };
  const renderText = () => {
    switch (textID) {
      case 0:
        return (
          <div className="relative flex-col justify-center h-full">
            {Text[textID]}
          </div>
        );
      case 1:
        return (
          <div className="relative flex-col justify-center h-full pt-20">
            {Text[textID]}
          </div>
        );
      case 2:
        return (
          <div className="relative flex-col justify-center h-full text-9xl pt-20">
            {Text[textID]}
          </div>
        );
      default:
        break;
    }
    return null;
  };
  return (
    <div className="flag text-offwhite flex h-screen w-screen relative">
      <div className="relative h-screen w-screen flex justify-center m-3">
        <Vector name="america" />
      </div>
      <div className="font-sans uppercase text-7xl h-screen w-screen absolute">
        <div className="relative h-full w-full">
          {textID === -1 ? (
            <div className="absolute right-1/4 flex-col text-center w-1/2 top-40">
              Our
              <div className="font-sans uppercase text-9xl bg-wave-pattern wave">Oceans</div>
              <div className="text-5xl">Are the</div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                pulse of america.
              </motion.div>
            </div>
          ) : (
            <motion.div
              className="absolute right-1/4 flex-col text-center w-1/2 top-40"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              {renderText()}
            </motion.div>
          )}
        </div>

      </div>
      <motion.div initial="hidden"
        animate="visible"
        variants={variants}
        className={none ? 'hidden' : 'absolute h-10 w-10 rounded-full bg-yellow'}
        style={{ left, top }}
      />
    </div>
  );
}
