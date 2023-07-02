import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// for styling the datepicker
export const DatePick = styled(DatePicker)`
  width: 7.2rem;
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  padding: 0.4rem 0.5rem;
  outline: none;
`;

// for the edit/ add information card
export const Card = styled.div`
  background-color: #fff;
  width: 17rem;
  height: fit-content;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

// for styling input tag
export const InputField = styled.input`
  border: none;
  outline: none;
`;

export const Div = styled.div`
  background-color: #fff;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  padding: 0.5rem;
`;

// for styling the save and close button
export const Save = styled.button`
  background-color: #ddd;
  border-radius: 0.3rem;
  border: 1px solid #bbb;
  cursor: pointer;
  margin-left: 0.5rem;

  :hover {
    background-color: #ccc;
  }
`;

export const Option = styled.div`
  text-align: right;
`;

// for toast notification
export const Notification = styled.div`
  position: absolute;
  top: 5rem;
  right: 5rem;
  width: auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.3rem;
  font-weight: bold;
  box-shadow: 0.3rem 0.3rem 0.9rem 0rem #ccc;
  color: #00467f;
`;
