import React, { useState } from "react";
import InputBox from "./InputBox";
import "./inputBox.css";

const Habit = () => {
  // State to manage the visibility of the modal.
  const [modal, setModal] = useState(false);

  // Function to toggle the visibility of the modal.
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {/* Button to open the modal, calling the toggleModal function on click. */}
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {/* Conditional rendering of InputBox component based on the modal state. */}
      {modal && <InputBox mame={modal} toglfn={toggleModal} />}
    </>
  );
}

export default Habit;
