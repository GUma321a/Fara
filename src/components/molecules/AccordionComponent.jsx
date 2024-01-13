/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import pt from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Text } from '../atoms';

export default function AccordionComponent({ content, textClass, titleClass, wrapperClass }) {
  return (
    <Accordion className={wrapperClass}>
      {content.map((i) => {
        return (
          <AccordionItem
            key={i.id}
            className="lg:body-text-xl body-text-l uppercase bg-transparent border-[2px] border-secondary text-secondary rounded-[8px] py-[10px] px-[20px] md:py-[14px] md:px-[30px]"
          >
            <AccordionItemHeading>
              <AccordionItemButton className={titleClass}>{i.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Text size="m" text={i.text} className={textClass} />
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

AccordionComponent.propTypes = {
  content: pt.instanceOf(Array),
  textClass: pt.string,
  titleClass: pt.string,
  wrapperClass: pt.string,
};
