import React, { useState } from 'react';
import { Card, DueDate, P, Span } from './CardStyle';
import Edit from '../../Assets/edit.svg';
import CardAdderOption from '../CardAdderOption/CardAdderOption';

interface ItemProps {
  id: string;
  task: string;
  description: string;
  status: string;
  start: Date;
  end: Date;
}

interface Props {
  key?: string;
  id?: string;
  type: string;
  description?: string;
  due: string;
  children?: React.ReactNode;
  drag?: any;
  update?: any;
  data: ItemProps;
}

const Cards: React.FC<Props> = ({ type, due, drag, update, data }) => {
  const [descriptionvisibility, setvisibility] = useState(false);
  const [editmode, setedit] = useState(false);

  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    // id edit mode is on the card with edit option will be shown otherwise card with task information is shown
    editmode ? (
      <CardAdderOption
        edit={true}
        value={type}
        data={data}
        savedata={update}
        exit={() => setedit(false)}
      ></CardAdderOption>
    ) : (
      <Card
        draggable="true"
        onDragStart={() => drag(type, data.id)}
        onMouseEnter={() => setvisibility(true)}
        onMouseLeave={() => setvisibility(false)}
      >
        <Span>
          <Span>
            {data.task}{' '}
            <span onClick={() => setedit(true)}>
              <img src={Edit} alt="edit" width="17rem" />
            </span>
          </Span>
          <DueDate>
            <p>DUE ON</p>
            <p>
              {due[9] +
                due[10] +
                ' ' +
                (due[6] === '0'
                  ? month[Number(due[7]) - 1]
                  : due[7] === '1'
                  ? 'Nov'
                  : 'Dec') +
                ' ' +
                due[3] +
                due[4]}
            </p>
          </DueDate>
        </Span>
        {descriptionvisibility ? <P>{data.description}</P> : ''}
      </Card>
    )
  );
};

export default Cards;
