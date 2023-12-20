import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';

const DaysContainer = (props) => {
  const [clickedC, setClickedC] = useState(false);
  const [clickedR, setClickedR] = useState(false);
  const [clickedN, setClickedN] = useState(false);
  const [count, setCount] = useState(0);

  const clickOnIconC = () => {
    setClickedC(!clickedC);
    if (count === 0) {
      setCount(count + 1);
      if (props.onCheck) props.onCheck(count + 1);
    }
    if (clickedR) {
      setClickedR(!clickedR)
    }
    if (clickedN) {
      setClickedN(!clickedN)
    }
  }
  const clickOnIconR = () => {
    setClickedR(!clickedR);
    if (clickedC) {
      setClickedC(!clickedC)
      setCount(0);
      if (props.onCheck) props.onCheck( - 1);
    }
    if (clickedN) {
      setClickedN(!clickedN)
    }
  }
  const clickOnIconN = () => {
    setClickedN(!clickedN);
    if (clickedR) {
      setClickedR(!clickedR)
    }
    if (clickedC) {
      setClickedC(!clickedC)
      setCount(0);
      if (props.onCheck) props.onCheck( - 1);
    }

  }
  return (

    <>

      <div className="days-container">
        <h2>{props.day}</h2>
        <h3>{props.tareekh}</h3>
        <div className="icons-container">
          <CheckIcon style={{ fontSize: "large" }} className={clickedC ? 'button-clicked currect c-icons' : 'button-unclicked u-icons'} onClick={clickOnIconC} />
          <CloseIcon style={{ fontSize: "large" }} className={clickedR ? 'button-clicked remove c-icons' : 'button-unclicked u-icons'} onClick={clickOnIconR} />
          <RemoveIcon style={{ fontSize: "large" }} className={clickedN ? 'button-clicked non c-icons' : 'button-unclicked u-icons'} onClick={clickOnIconN} />
        </div>
      </div>

    </>
  )
}
export default DaysContainer;