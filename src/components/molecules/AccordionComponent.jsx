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
            className="lg:body-text-xl body-text-l rounded-[8px] border-[2px] border-secondary bg-transparent px-[20px] py-[10px] uppercase text-secondary md:px-[30px] md:py-[14px]"
          >
            <AccordionItemHeading>
              <AccordionItemButton className={titleClass}>{i.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Text size="m" className={textClass}>
                {i.text}
              </Text>
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
