import React from 'react';
import { NextSeo } from 'next-seo';
import { Button, Title, Text } from '../atoms';

function NotFoundPage() {
  const title = 'This page could not be found';
  const description = 'The page you are trying to access does not exist.';

  return (
    <>
      <NextSeo title={title} description={description} />
      <section className="not-found my-64px md:my-[140px]">
        <div className="container">
          <div className="not-found__info text-center">
            <Title size="h3" className="not-found__title mb-sm">
              Oops, something went wrong
            </Title>
            <Text size="l" className="not-found__text text-gray-100">
              Page not found
            </Text>
            <Button variant="cta" size="l" link="/" wrapperClass="not-found__button mt-md md:mt-xl">
              Go back home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
