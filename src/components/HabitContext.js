import React, { createContext, useContext, useReducer } from 'react';

// Create a context
const HabitContext = createContext();

// Define a reducer function
const habitReducer = (state, action) => {
  switch (action.type) {
    // Case for adding a new habit to the state
    case 'ADD_HABIT':
      return [...state, action.payload];
    // Case for removing a habit from the state
    case 'REMOVE_HABIT':
      // Using filter to create a new array without the habit at the specified index
      return state.filter((_, index) => index !== action.payload);
    // Default case returns the current state
    default:
      return state;
  }
};

// Create a context provider component
export const HabitProvider = ({ children }) => {
  // Using useReducer to manage state and actions
  const [habits, dispatch] = useReducer(habitReducer, []);

  // Action to add a new habit
  const addHabit = (habit) => {
    dispatch({ type: 'ADD_HABIT', payload: habit });
  };

  // Action to remove a habit
  const removeHabit = (index) => {
    dispatch({ type: 'REMOVE_HABIT', payload: index });
  };

  return (
    // Providing the habits state and actions through the context
    <HabitContext.Provider value={{ habits, addHabit, removeHabit }}>
      {children}
    </HabitContext.Provider>
  );
};

// Create a custom hook to access the context
export const useHabitContext = () => {
  return useContext(HabitContext);
};
