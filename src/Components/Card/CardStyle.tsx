import styled from 'styled-components';

// to style the individual task card
export const Card = styled.div`
  background-color: #fff;
  width: 17rem;
  height: fit-content;
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0.3rem 0.3rem 0.9rem 0rem #ccc;
`;

export const P = styled.p`
  text-align: left;
`;

// for positioning the task information
export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

// for styling the due date card
export const DueDate = styled.span`
  line-height: 0.2rem;
  background-color: #ccc;
  padding: 0 0.4rem;
  border-radius: 0.3rem;
  font-size: 0.7rem;
  font-weight: bold;
`;
