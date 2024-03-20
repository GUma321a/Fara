import React from 'react';
import pt from 'prop-types';

function Text({ children, text, size = 'm', className, ...props }) {
  const textClass = () => {
    if (size === 'l') return 'body-text-m sm:body-text-l';
    if (size === 'm') return 'body-text-m';
    if (size === 's') return 'body-text-s';

    return 'body-text-m';
  };

  return (
    <p className={`${textClass()} ${className}`.trim()} {...props}>
      {text || children || 'Text'}
    </p>
  );
}

Text.propTypes = {
  children: pt.node,
  text: pt.string,
  size: pt.oneOf(['s', 'm', 'l']),
  className: pt.string,
};

export default Text;
