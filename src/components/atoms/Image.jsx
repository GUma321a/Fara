import React from 'react';
import NextImage from 'next/image';
import { motion, useAnimation } from 'framer-motion';

function ImageComponent({
  props,
  alt = '',
  src = '',
  width = '',
  height = '',
  className = '',
  quality = 100,
  loading = 'lazy',
}) {
  const [loaded, setLoaded] = React.useState(false);
  const motionControls = useAnimation();

  const onLoadingComplete = () => {
    setLoaded(true);
  };

  React.useEffect(() => {
    if (loaded) {
      motionControls.start('visible');
    }
  }, [loaded, motionControls]);

  const motionProps = {
    initial: 'hidden',
    animate: motionControls,
    variants: {
      visible: { opacity: 1 },
      hidden: { opacity: 1 },
    },
    transition: {
      ease: 'easeOut',
      duration: 0.1,
    },
  };

  return (
    <motion.span {...motionProps} className="block h-full">
      <NextImage
        {...props}
        alt={alt}
        src={src}
        width={width}
        height={height}
        onLoad={onLoadingComplete}
        quality={quality}
        loading={loading}
        className={className}
      />
    </motion.span>
  );
}

export default ImageComponent;
