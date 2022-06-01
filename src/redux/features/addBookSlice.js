import { createSlice } from '@reduxjs/toolkit';



const addBookSlice = createSlice({
    name: 'bookList',
    initialState: {
        bookList: [
            {title: 'Crime and Punishment'}, 
            {title: 'Until the End of Time'}
        ]
    }, 
    reducers: {
        addBook: (state, action) => {
            let newBookList = {
              content: action.payload.newContent
            }
            state.bookList.push(newBookList);
    },
}
})

export const {addBook} = addBookSlice.actions


export default addBookSlice.reducer; 
