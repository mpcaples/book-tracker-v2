import { Box, Button, Container, Divider, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBooks } from "../redux/features/addBookSlice";
import BookListItem from "./BookListItem";
import TotalBooks from "./TotalBooks";



const MainPage = () => {
    const bookList = useSelector((state) => {
        return state.book.bookList
    });
    const goal = useSelector((state) => {
        return state.goal.goal.goal; 
    }); 
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const onDeleteBooks = () => {
        dispatch(deleteBooks());      
    }; 
 
    return (
        <Container maxWidth='sm'>
            <Typography variant="h1" sx={{
                textAlign: 'center'
            }}>Your book list</Typography>
            {bookList.length === 0 && <Typography variant="h4">Please add a book to get started</Typography>}
            <List>
                {bookList.map((book) => {
                    return <BookListItem 
                                key={book.id} 
                                id={book.id}
                                title={book.title} 
                                author={book.author} 
                                isFavorite={book.isFavorite} 
                                
                            />
                })}
            </List>
            <Stack direction='row' spacing={2} justifyContent='center' 
                sx={{
                    paddingBottom: '2rem'
                }}
            >
                {bookList.length > 0 && <Button variant="contained" onClick={onDeleteBooks}>Delete All books</Button>}
                <Button variant="contained" onClick={() => {navigate("/add-book")}}>Add Book</Button>
                <Button variant="contained" onClick={() => {navigate("/add-goal")}}>Add Goal</Button>
            </Stack>
        
            <TotalBooks totalBooks={bookList.length} goal={goal} />
  
        </Container>
    )
}; 

export default MainPage; 