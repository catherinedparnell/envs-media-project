/* eslint-disable no-plusplus */
import React from 'react';
import { motion } from 'framer-motion';

const SimpleTranslationExample = (props) => {
  const { scale } = props;
  return (
    <motion.div
      className="plastic"
      animate={{
        x: [0, Math.random() * scale * 100],
        y: [0, Math.random() * scale, Math.random() * scale * -10, 0],
        rotate: 360,
      }}
      transition={{ duration: 4, ease: 'circOut' }}
    />
  );
};

export default function AnimatedPlastics(props) {
// eslint-disable-next-line prefer-spread
  const n = Array.apply(null, Array(1000)).map((x, i) => { return i; });

  return (
    <div className="plastic-animation">
      {n.map((key) => <SimpleTranslationExample key={key} scale={key} />)}
    </div>
  );
}
