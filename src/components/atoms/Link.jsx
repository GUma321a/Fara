import React from 'react';
import pt from 'prop-types';
import NextLink from 'next/link';

function Link({ href, className, ...props }) {
  if (!href) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a className={className} {...props} />;
  }

  if (href.match(/^https?:/)) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a className={className} href={href} target="_blank" rel="nofollow noreferrer" {...props} />
    );
  }

  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a className={className} {...props} />
    </NextLink>
  );
}

Link.propTypes = {
  href: pt.string,
  className: pt.string,
};

Link.defaultProps = {
  href: '',
  className: '',
};

export default Link;
