import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';

const DaysContainer = (props) => {
  // State to track the "Check" button click status
  const [clickedC, setClickedC] = useState(false);
  
  // State to track the "Remove" button click status
  const [clickedR, setClickedR] = useState(false);
  
  // State to track the "Non" button click status
  const [clickedN, setClickedN] = useState(false);
  
  // State to track the count of clicks on the "Check" button
  const [count, setCount] = useState(0);

  // Function for handling "Check" button click
  const clickOnIconC = () => {
    setClickedC(!clickedC);
    if (count === 0) {
      setCount(count + 1);
      // Callback to parent component with the updated count
      if (props.onCheck) props.onCheck(count + 1);
    }
    if (clickedR) {
      setClickedR(!clickedR);
    }
    if (clickedN) {
      setClickedN(!clickedN);
    }
  }

  // Function for handling "Remove" button click
  const clickOnIconR = () => {
    setClickedR(!clickedR);
    if (clickedC) {
      setClickedC(!clickedC);
      setCount(0);
      // Callback to parent component with the updated count (decrement)
      if (props.onCheck) props.onCheck(-1);
    }
    if (clickedN) {
      setClickedN(!clickedN);
    }
  }

  // Function for handling "Non" button click
  const clickOnIconN = () => {
    setClickedN(!clickedN);
    if (clickedR) {
      setClickedR(!clickedR);
    }
    if (clickedC) {
      setClickedC(!clickedC);
      setCount(0);
      // Callback to parent component with the updated count (decrement)
      if (props.onCheck) props.onCheck(-1);
    }
  }

  return (
    <>
      {/* Container for a day's information and buttons */}
      <div className="days-container">
        <h2>{props.day}</h2>
        <h3>{props.tareekh}</h3>
        {/* Container for icons (Check, Remove, Non) */}
        <div className="icons-container">
          {/* Check Icon */}
          <CheckIcon style={{ fontSize: "large" }} className={clickedC ? 'button-clicked currect c-icons' : 'button-unclicked u-icons'} onClick={clickOnIconC} />
          {/* Close Icon (Remove) */}
          <CloseIcon style={{ fontSize: "large" }} className={clickedR ? 'button-clicked remove c-icons' : 'button-unclicked u-icons'} onClick={clickOnIconR} />
          {/* Remove Icon (Non) */}
          <RemoveIcon style={{ fontSize: "large" }} className={clickedN ? 'button-clicked non c-icons' : 'button-unclicked u-icons'} onClick={clickOnIconN} />
        </div>
      </div>
    </>
  );
}

export default DaysContainer;
