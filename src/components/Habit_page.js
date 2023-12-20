import React, { useState } from "react";
import InputBox from "./InputBox";
import "./inputBox.css";

const Habit = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return <>
    <button onClick={toggleModal} className="btn-modal">
      Open
    </button>
    {modal && <InputBox mame={modal} toglfn={toggleModal} />}

  </>
}
export default Habit;


