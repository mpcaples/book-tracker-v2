import { configureStore } from '@reduxjs/toolkit'; 
import bookReducer from '../features/addBookSlice'; 

export default configureStore({
  reducer: { 
    books: bookReducer
  },
})

