import React from "react";
import { useParams } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";

const EditBookPage = () => {
    let { id } = useParams(); 
    const bookList = useSelector((state) => {
        return state.books.bookList
    });
    const book = bookList.find((item) => item.id === id)
    
    return (
        <div>
            This is the Edit book page for book: 
            <p>{book.title}, by {book.author}</p>
        </div>
    )
}; 

export default EditBookPage; 