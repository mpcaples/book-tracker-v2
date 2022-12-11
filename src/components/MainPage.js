import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBooks } from "../redux/features/addBookSlice";
import BookListItem from "./BookListItem";
import TotalBooks from "./TotalBooks";


const MainPage = () => {
    const bookList = useSelector((state) => {
        return state.books.bookList
    });
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const onDeleteBooks = () => {
        dispatch(deleteBooks());      
    }; 
    return (
        <Box>
            <Typography variant="h1">Main Page</Typography>
            {bookList.length === 0 && <Typography variant="p">Please add a book to get started</Typography>}
            <ul>
                {bookList.map((book) => {
                    return <BookListItem 
                                key={book.id} 
                                id={book.id}
                                title={book.title} 
                                author={book.author} 
                                isFavorite={book.isFavorite} 
                                
                            />
                })}
            </ul>
            {bookList.length > 0 && <button onClick={onDeleteBooks}>Delete All books</button>}
            <Button variant="contained" onClick={() => {navigate("/add-book")}}>Add Book</Button>
            <div>
                <TotalBooks totalBooks={bookList.length} />
            </div>
        </Box>
    )
}; 

export default MainPage; 