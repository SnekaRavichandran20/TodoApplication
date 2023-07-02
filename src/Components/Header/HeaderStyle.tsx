import styled from 'styled-components';

// for header div
export const Head = styled.div`
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

// for styling the heading
export const Span = styled.span`
  color: #00467f;
  font-weight: bold;
  text-transform: capitalize;
`;

// to make the cursor pointer for three dots image
export const Img = styled.img`
  cursor: pointer;
`;

// to style the menu options
export const Options = styled.div`
  text-align: left;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.3rem 0;
  border-radius: 0.3rem;
  cursor: pointer;

  :hover {
    background-color: #fff;
  }
`;

//to style menu bar
export const MenuItem = styled.div`
  background-color: #ddd;
  position: absolute;
  margin-left: 17rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  background-color: #eee;
  z-index: 1;
`;
