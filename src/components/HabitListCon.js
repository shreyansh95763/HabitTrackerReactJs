import React, { useState } from "react";
import "./HabitList.css";
import { useHabitContext } from './HabitContext';
import HabitList from "./HabitList";
import InputBox from "./InputBox"



const HabitListContainer = () => {
    // const [habits, addHabit] = useState([]);
    const { habits, addHabit, removeHabit } = useHabitContext();
    const backVal = (val) => {
        // addHabit((prevData) => {
        //     return [...prevData,val]
        // })
        addHabit(val)
        console.log(val);
    }
    // const onDelete = (id) => {
    //       removeHabit((oldData) =>
    //       oldData.filter((current, indx) => {
    //         return (indx !== id);
    //       })
    //     )}
    const onDelete = (id) => {
      removeHabit(id);
    };
    
    return (
        <>
            <InputBox passVal={backVal} />
            <div className="container_lists">
                {habits.map((value, index) => {
                    if(value!== ""){
                      console.log(value);
                    return <HabitList
                        key={index}
                        id={index}
                        data={value}
                      deleteItems={onDelete}
                      
                    />
                    }
                })}
            </div>

        </>
    )
}

export default HabitListContainer;