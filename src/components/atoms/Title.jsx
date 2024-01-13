import React from 'react';
import pt from 'prop-types';

function Element({ as, ...props }) {
  const As = as;
  return <As {...props} />;
}

Element.propTypes = {
  as: pt.string,
};

function Title({ children, text, size, className, ...props }) {
  const titleClass = () => {
    if (size === 'h1')
      return 'heading-h5 md:heading-h4 lg:heading-h3 midlg:heading-h2 xl:heading-h1';
    if (size === 'h2') return 'heading-h5 lg:heading-h4 midlg:heading-h3 xl:heading-h2';
    if (size === 'h3') return 'heading-h5 lg:heading-h4 xl:heading-h3';
    if (size === 'h4') return 'body-heading-xl md:heading-h5 lg:heading-h5 midlg:heading-h4';
    if (size === 'h5') return 'body-heading-xl lg:heading-h5';

    return 'heading-h5 md:heading-h4 lg:heading-h3 midlg:heading-h2 xl:heading-h1';
  };

  return (
    <Element as={size} className={`${titleClass()} ${className}`.trim()} {...props}>
      {text || children || 'Title'}
    </Element>
  );
}

Title.propTypes = {
  children: pt.node,
  text: pt.string,
  size: pt.oneOf(['h5', 'h4', 'h3', 'h2', 'h1']),
  className: pt.string,
};

Title.defaultProps = {
  text: '',
  size: 'h1',
  className: '',
};

export default Title;
