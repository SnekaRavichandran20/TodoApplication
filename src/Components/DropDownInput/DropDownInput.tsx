import React, { useState } from 'react';
import { Button, Option, OptionField } from './DropDownInputStyle';

interface Props {
  handler?: any;
  type: string;
}

// for the dropdown to select open or in progress or completed status
const DropDownInput: React.FC<Props> = ({ handler, type }) => {
  const [value, setValue] = useState(type);
  const [option, setOption] = useState(false);
  const optionhandler = (optionvalue: string) => {
    setValue(optionvalue);
    handler(optionvalue);
    setOption(!option);
  };
  return (
    <span>
      <Button onClick={() => setOption(!option)}>{value}</Button>
      <OptionField>
        {option ? (
          <span>
            <Option onClick={() => optionhandler('Open')}>Open</Option>
            <Option onClick={() => optionhandler('In Progress')}>
              In Progress
            </Option>
            <Option onClick={() => optionhandler('Completed')}>
              Completed
            </Option>
          </span>
        ) : (
          ''
        )}
      </OptionField>
    </span>
  );
};

export default DropDownInput;
