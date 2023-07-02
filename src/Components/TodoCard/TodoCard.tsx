import React from 'react';
import { Card } from './TodoCardStyle';

interface Props {
  children?: React.ReactNode;
  type: string;
  handler: any;
}

// the container for open, in progress and completed task holder
const TodoCard: React.FC<Props> = ({ type, handler, children }) => {
  return <Card onDragLeave={() => handler(type)}>{children}</Card>;
};

export default TodoCard;
