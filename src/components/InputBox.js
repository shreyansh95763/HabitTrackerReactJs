import React, { useState } from "react";
import "./inputBox.css";

const InputBox = (props) => {
  const [data, setData] = useState("");
  const [modal, setModal] = useState(false);
  // const [val , setVal] = useState([])

  const dataHandler = (event) => {
    setData(event.target.value);
  };
 

  const itemList = (e) => {
    e.preventDefault();
    props.passVal(data);
    setData("")
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>


      <div className="container">
        <div></div>
        <h1 className="heading-name">Habit Tracker App</h1>
        <div>
          <button className="btn-modal">View page</button>
          <button onClick={toggleModal} className="btn-modal">Add Habit </button>
        </div>
      </div>

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
}
export default InputBox;