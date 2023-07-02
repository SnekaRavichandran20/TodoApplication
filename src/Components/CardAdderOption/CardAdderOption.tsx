import React, { useEffect, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import {
  InputField,
  Card,
  Div,
  Save,
  DatePick,
  Option,
  Notification,
} from './CardAdderOptionStyle';
import DropDownInput from '../DropDownInput/DropDownInput';

interface ItemProps {
  id: string;
  task: string;
  description: string;
  status: string;
  start: Date;
  end: Date;
}

interface Props {
  value: string;
  savedata: any;
  exit: any;
  edit: boolean;
  data?: ItemProps;
}

// the reusable component that have input field for getting task information
const CardAdderOption: React.FC<Props> = ({
  value,
  savedata,
  exit,
  edit,
  data,
}) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data !== undefined) {
      setStartDate(new Date(data.start));
      setEndDate(new Date(data.end));
    }
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (reference.current && !reference.current.contains(e.target)) {
        exit();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [data, exit]);

  const [type, settype] = useState(value);
  const [taskname, settaskname] = useState(data !== undefined ? data.task : '');
  const [description, setdescription] = useState(
    data !== undefined ? data.description : ''
  );
  const [message, setmessage] = useState('');

  const fixingtype = (v: string) => {
    settype(v);
  };

  const returndata = () => {
    if (taskname !== '' && startDate !== undefined && endDate !== undefined) {
      if (!edit) {
        console.log('Edit');
        const update = {
          id: Math.floor(Math.random() * 16777210).toString(16),
          task: taskname,
          description: description,
          status: type,
          start: startDate,
          end: endDate,
        };
        savedata(update);
      } else {
        let updateddata = {
          id: data !== undefined ? data.id : '',
          task: taskname,
          description: description,
          status: type,
          start: startDate,
          end: endDate,
        };
        savedata(data !== undefined ? data.id : 1, updateddata);
        exit();
      }
    } else {
      if (taskname === '') {
        setmessage('Please Enter the task name');
      } else if (startDate === undefined) {
        setmessage('Please select start date');
      } else if (endDate === undefined) {
        setmessage('Please select end date');
      }
      setTimeout(() => setmessage(''), 1000);
    }
  };

  return (
    <Div ref={reference}>
      {message !== '' ? <Notification>{message}</Notification> : ''}
      <Card>
        <InputField
          type="text"
          placeholder="Task Name"
          value={taskname}
          onChange={(e) => settaskname(e.target.value)}
        />
        <DropDownInput type={value} handler={fixingtype}></DropDownInput>
      </Card>
      <InputField
        type="text"
        placeholder="Add Description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <Card>
        <DatePick
          placeholderText="Start Date"
          dateFormat="MMMM d, yyyy"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <DatePick
          placeholderText="End Date"
          dateFormat="MMMM d, yyyy"
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date: Date) => setEndDate(date)}
        />
      </Card>
      <Option>
        <Save onClick={returndata}>Save</Save>
        <Save onClick={exit}>close</Save>
      </Option>
    </Div>
  );
};

export default CardAdderOption;
