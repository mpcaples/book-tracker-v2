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
        <div>
            <h1>Home Page</h1>
            {bookList.length === 0 && <p>Please add a book to get started</p>}
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
            <button onClick={() => {navigate("/add-book")}}>Add Book</button>
            <div>
                <TotalBooks totalBooks={bookList.length} />
            </div>
        </div>
    )
}; 

export default MainPage; 