import React from "react";
import "./HabitList.css";
import { useHabitContext } from './HabitContext';
import HabitList from "./HabitList";
import InputBox from "./InputBox"



const HabitListContainer = () => {
    // Using the useHabitContext hook to access habits state and related functions from the context provider.
    const { habits, addHabit, removeHabit } = useHabitContext();
    // Callback function to add a new habit and log its value.
    const backVal = (val) => {
        addHabit(val)
        console.log(val);
    }
   // Delete function to remove a habit by its index.
    const onDelete = (id) => {
      removeHabit(id);
    };
    // Rendering the component.
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
