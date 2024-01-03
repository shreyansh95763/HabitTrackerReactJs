import React from "react";
import "./HabitList.css";
import { NavLink } from "react-router-dom";

const HabitList = (props) => {
    // Function to handle deleting a habit
    const deleteNote = () => {
        props.deleteItems(props.id);
    }
    return (
        <>
            <div className="container-list">
                <div className="left-content">
                    <h2>{props.data}</h2>
                    <h4>{props.counter}/7</h4>
                </div>
                <div className="right-content">
                    <button className="btn-list"><NavLink to="/Weekly" className="week-btn">Weekly Views</NavLink></button>
                    <button className="btn-list rmove" onClick={deleteNote}>Remove</button>
                </div>
            </div>
        </>
    )

}

export default HabitList;
