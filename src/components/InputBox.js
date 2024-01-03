import React, { useState } from "react";
import "./inputBox.css";

const InputBox = (props) => {
  // State to manage the input data for the new habit.
  const [data, setData] = useState("");
  
  // State to manage the visibility of the modal.
  const [modal, setModal] = useState(false);

  // Handler for updating the data state based on input changes.
  const dataHandler = (event) => {
    setData(event.target.value);
  };

  // Function to handle adding a new habit to the list.
  const itemList = (e) => {
    e.preventDefault();
    props.passVal(data);
    setData("");
  };

  // Function to toggle the visibility of the modal.
  const toggleModal = () => {
    setModal(!modal);
  };

  // Adding/removing a class to the body based on the modal state for styling purposes.
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  // Rendering the component.
  return (
    <>
      {/* Main container with app title and buttons to toggle the modal. */}
      <div className="container">
        <div></div>
        <h1 className="heading-name">Habit Tracker App</h1>
        <div>
          <button className="btn-modal">View page</button>
          <button onClick={toggleModal} className="btn-modal">Add Habit </button>
        </div>
      </div>

      {/* Modal for adding a new habit, rendered conditionally based on the modal state. */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add New Habit</h2>
            <p>
              <input type="text" name="works" value={data} placeholder="Write Your New Habit...." onChange={dataHandler} autoComplete="off" />
            </p>
            <div>
              <button className="close-modal" onClick={toggleModal}>X</button>
              <button className="save-modal" onClick={itemList}>SAVE</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputBox;
