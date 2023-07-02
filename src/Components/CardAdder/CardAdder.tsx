import React from 'react';
import { Adder } from './CardAdderStyle';

interface Props {
  handler: any;
}

// the reusable component for adding another card
const CardAdder: React.FC<Props> = ({ handler }) => {
  return <Adder onClick={handler}>+ Add another card</Adder>;
};

export default CardAdder;
