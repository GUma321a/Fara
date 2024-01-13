import React from 'react';
import pt from 'prop-types';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import HeadNext from 'next/head';
import truncate from 'lodash/truncate';

import { url } from '../../utils';

function Head({ title, description }) {
  const { asPath } = useRouter();

  const truncDescription = (length) => truncate(description, { length, omission: '…' });

  const openGraph = {
    url: url(asPath),
    type: 'website',
    site_name: 'Project',
    images: [
      {
        url: url('cover-image.png'),
        width: 1200,
        height: 630,
      },
    ],
    description: truncDescription(140),
  };

  const linkTags = [
    {
      rel: 'icon',
      href: url('favicon.ico'),
      sizes: 'any',
    },
    {
      rel: 'icon',
      href: url('icon.svg'),
      type: 'image/svg+xml',
    },
    {
      rel: 'apple-touch-icon',
      href: url('apple-touch-icon.png'),
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: url('site.webmanifest'),
    },
  ];

  return (
    <>
      <DefaultSeo
        title={title}
        description={truncDescription(200)}
        canonical={url(asPath)}
        openGraph={openGraph}
        additionalLinkTags={linkTags}
        twitter={{
          cardType: 'summary_large_image',
        }}
        dangerouslySetAllPagesToNoIndex
        dangerouslySetAllPagesToNoFollow
      />
      <HeadNext>
        <meta name="theme-color" content="#040C25" />
      </HeadNext>
    </>
  );
}

Head.propTypes = {
  title: pt.string,
  description: pt.string,
};

Head.defaultProps = {
  title: 'watchTowr',
  description:
    'With the watchTowr Platform, continuously discover high-impact vulnerabilities in your organisation.',
};

export default Head;
