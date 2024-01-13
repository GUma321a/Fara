import React from 'react';
import pt from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function Motion({ children, duration, threshold, from, delay, className }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const initialProps = {
    opacity: 0,
    scale: 1,
    x: 0,
    y: 30,
    ...from,
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 },
        hidden: initialProps,
      }}
      transition={{ duration, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

Motion.propTypes = {
  children: pt.node,
  duration: pt.number,
  threshold: pt.number,
  from: pt.shape(),
  delay: pt.number,
  className: pt.string,
};

Motion.defaultProps = {
  duration: 0.5, // In seconds
  threshold: 0.8, // [from 0 to 1] Indicating the percentage that should be visible before triggering
  delay: 0,
  className: '',
};

export default Motion;
