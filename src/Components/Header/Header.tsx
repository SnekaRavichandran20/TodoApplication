import React, { useEffect, useRef, useState } from 'react';
import { Head, Span, Img, Options, MenuItem } from './HeaderStyle';
import Threedots from '../../Assets/threedots.svg';

interface Props {
  type: string;
  handler: any;
}

// for the todo card header that holds the heading
const Header: React.FC<Props> = ({ type, handler }) => {
  const reference = useRef<HTMLDivElement>(null);
  const [menuflag, setmenuflag] = useState(false);
  const addHandler = () => {
    handler();
    setmenuflag(!menuflag);
  }

  useEffect(() => {
    // method for making the div close when touched outside
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menuflag && reference.current && !reference.current.contains(e.target)) {
        setmenuflag(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menuflag])

  return (
    <div ref={reference}>
      <Head>
        <Span>{type.toUpperCase()}</Span>
        <span onClick={() => setmenuflag(!menuflag)}><Img src={Threedots} alt="dots" width="20rem" /></span>
      </Head>
      {menuflag? (
      <MenuItem>
        <Options onClick={addHandler}>Add Task</Options>
        <Options onClick={() => setmenuflag(!menuflag)}>Exit</Options>
      </MenuItem>) : "" }
    </div>
  );
};

export default Header;
