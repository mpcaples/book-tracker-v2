import React, { useState } from "react";
import { useSelector } from "react-redux";


const MainPage = () => {
    const bookList = useSelector((state) => {
        
        return state.books.bookList
    }) 
    console.log(bookList)
    return (
        <div>
            <h1>Home Page</h1>
            {bookList.map((book) => {
                <p>{book.title}</p>
                console.log
            })}
        </div>
    )
}; 

export default MainPage; 