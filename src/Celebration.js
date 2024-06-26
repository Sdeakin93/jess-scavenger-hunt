// Celebration.js
import React from 'react';
import { useTransition, animated } from 'react-spring';

const emojis = ['❄️', '🧊', '☃️', '🥶']; // Your emoji list
const multipliedEmojis = emojis.flatMap(emoji => Array(5).fill(emoji)); // Multiply emojis

const Celebration = () => {
  const transitions = useTransition(multipliedEmojis, {
    from: { opacity: 0, transform: 'translate3d(0,0,0) scale(0)' },
    enter: item => async (next, cancel) => {
      // Generate random x, y, and scale for each emoji
      const x = (Math.random() - 0.5) * window.innerWidth * 2;
      const y = -Math.random() * window.innerHeight;
      const scale = Math.random() * 4 + 1; // Random scale between 1x and 3x
      await next({ opacity: 1, transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`, config: { duration: 1000 } });
      await next({ opacity: 0, transform: `translate3d(${x}px, ${y}px, 0) scale(0)`, config: { duration: 1000 } });
    },
    leave: { opacity: 0 },
    config: { mass: 1, tension: 200, friction: 10 },
    trail: 100
  });

  return transitions((styles, item) => (
    <animated.div
      style={{
        ...styles,
        position: 'fixed',
        willChange: 'transform, opacity',
        // Adjust the fontSize to fit the scaling if needed
        fontSize: '2em',
        right: 0,
        bottom: 0,
      }}
    >
      {item}
    </animated.div>
  ));
};

export default Celebration;
