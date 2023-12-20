import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DaysContainer from "./DaysContainer";
// import HabitList from "./HabitList";

import FirstPageIcon from '@mui/icons-material/FirstPage';
import './Weekly.css';


const Weekly = (props) => {
    //   const [date, setDate] = useState(new Date());
    //   const options = { weekday: 'long' };
    //   const days = (new Date().toLocaleDateString('en-US', options));
    //   const dates = date.toLocaleDateString();
    //   const dateNext = date.toLocaleDateString();

    const daysOfWeek = [...Array(5).keys()]; // Create an array [0, 1, 2, 3, 4, 5, 6]

    const getCurrentDate = (offset) => {
        const today = new Date();
        today.setDate(today.getDate() + offset-2);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', };
        return today.toLocaleDateString('en-US', options);
    };

    const getDayName = (offset) => {
        const today = new Date();
        today.setDate(today.getDate() + offset-2);

        const options = { weekday: 'long' };
        return today.toLocaleDateString('en-US', options);
    };
    const [counter, setCounter] = useState(0);

    const handleCheck = (count) => {
        setCounter((prevCounter) => prevCounter + count);
    };
    console.log(counter);    

    return <>
        <div className="container">
            <div></div>
            <h1>Habit Tracker Weekly View</h1>
            <div>
                <button className="btn-modal">View page</button>
                <button className="btn-modal">Go Back</button>
            </div>
        </div>

        <div className="weekly-container">
            <h1 className="heading-weekly">This is the Weekly detailed pages!!!</h1>
            <div className="days-list-container">
                {daysOfWeek.map((offset, index) => (
                    <DaysContainer key={index} day={getDayName(offset)} tareekh={getCurrentDate(offset)} onCheck={handleCheck} />)
                   
                )}

            </div>
            <button className="back-home-btn"><NavLink to="/">Go Back Home <span>&nbsp;&nbsp;<FirstPageIcon style={{ fontSize: "larger" }} /></span></NavLink></button>

        </div>

    </>
}





export default Weekly;