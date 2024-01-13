import React from 'react';
import pt from 'prop-types';

import Link from './Link';

function Button({
  children,
  link,
  text,
  buttonType,
  variant,
  size,
  className,
  wrapperClass,
  ...props
}) {
  const btnClass = () => {
    if (variant === 'ghost' && size === 'l') return 'button-ghost-m sm:button-ghost-l';
    if (variant === 'cta' && size === 'l') return 'button-cta-m sm:button-cta-l';
    if (variant === 'ghost' && size === 'm') return 'button-ghost-m';
    if (variant === 'cta' && size === 'm') return 'button-cta-m';
    if (variant === 'ghost' && size === 's') return 'button-ghost-s';
    if (variant === 'cta' && size === 's') return 'button-cta-s';

    return 'button-cta-m sm:button-cta-xl';
  };

  if (link) {
    return (
      <div className={wrapperClass}>
        <Link href={link} className={`${btnClass()} ${className}`.trim()}>
          {text || children || 'Button'}
        </Link>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      {/* eslint-disable-next-line react/button-has-type */}
      <button type={buttonType} className={`${btnClass()} ${className}`.trim()} {...props}>
        {text || children || 'Button'}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: pt.node,
  link: pt.string,
  text: pt.string,
  buttonType: pt.oneOf(['button', 'submit']),
  variant: pt.oneOf(['cta', 'ghost']),
  size: pt.oneOf(['s', 'm', 'l', 'xl']),
  className: pt.string,
  wrapperClass: pt.string,
};

Button.defaultProps = {
  text: '',
  buttonType: 'button',
  variant: 'cta',
  size: 'l',
  className: '',
  wrapperClass: '',
};

export default Button;
