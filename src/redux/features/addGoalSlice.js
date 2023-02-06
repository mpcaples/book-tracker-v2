import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid'; 

const initialState = {
    goal: 0
}; 

const addGoalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        addGoal: (state, action) => {
            let newGoal = {
                id: uuid(), 
                goal: action.payload.goal
            }
            state.goal = newGoal;
        },
        // editBook: (state, action) => {
        //     let {bookList} = state; 
        //     state.bookList = bookList.map((item) => item.id === action.payload.id ? action.payload : item)
        // },
        // deleteBook: (state, action) => {
        //     let { bookList } = state; 
        //     state.bookList = bookList.filter((item) => item.id !== action.payload.id); 
        // },
        // deleteBooks: (state) => {
        //     state.bookList = [];
        // },
}
})

export const {addGoal} = addGoalSlice.actions


export default addGoalSlice.reducer; 