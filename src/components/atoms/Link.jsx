import React from 'react';
import pt from 'prop-types';
import Link from 'next/link';

function LinkComponent({ href = '', external = false, ...props }) {
  if (!href) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} />;
  }

  if (href.match(/^https?:/) || external) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={href} target="_blank" rel="nofollow noreferrer" {...props} />
    );
  }

  return <Link href={href} passHref {...props} />;
}

LinkComponent.propTypes = {
  href: pt.string,
  external: pt.bool,
};

export default LinkComponent;
