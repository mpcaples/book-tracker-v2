import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid'; 

const initialState = {
    bookList: []
}; 

const addBookSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        addBook: (state, action) => {
            let newBookList = {
                id: uuid(), 
                title: action.payload.bookTitleContent,
                author: action.payload.bookAuthorContent, 
                isFavorite: action.payload.bookIsFavorite
            }
            state.bookList.push(newBookList);
        },
        editBook: (state, action) => {
            let {bookList} = state; 
            state.bookList = bookList.map((item) => item.id === action.payload.id ? action.payload : item)
        },
        deleteBook: (state, action) => {
            let { bookList } = state; 
            state.bookList = bookList.filter((item) => item.id !== action.payload.id); 
        },
        deleteBooks: (state) => {
            state.bookList = [];
        },
}
})

export const {addBook, editBook, deleteBook, deleteBooks} = addBookSlice.actions


export default addBookSlice.reducer; 
