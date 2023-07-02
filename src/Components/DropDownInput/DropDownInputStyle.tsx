import styled from 'styled-components';

// for dropdown button
export const Button = styled.button`
  border: 1px solid #ccc;
  width: auto;
  cursor: pointer;
  border-radius: 0.3rem;
  padding: 0.4rem;
  :hover {
    background-color: #ccc;
  }
`;

//  for styling the options field
export const Option = styled.button`
  padding: 0.4rem 0.6rem;
  display: block;
  width: 5.2rem;
  border: 0.1rem solid #ccc;
  background-color: #f1f1f1;
  text-align: left;
  cursor: pointer;
  font-size: 0.7rem;
  z-index: 1000;

  :hover {
    background-color: #ddd;
  }
`;

export const OptionField = styled.div`
  position: absolute;
  z-index: 1;
`;
