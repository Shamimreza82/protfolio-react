import React from 'react';
import { useSpring, animated } from '@react-spring/web'

const Amination = () => {

    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
      })

    return (
        <animated.div
          style={{
            width: 80,
            height: 80,
            background: '#ff6d6d',
            borderRadius: 8,
          }}
        />
      )
};

export default Amination;