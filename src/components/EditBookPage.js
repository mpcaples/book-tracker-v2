import React from "react";
import { useParams } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";

const EditBookPage = () => {
    let { id } = useParams(); 
    const bookList = useSelector((state) => {
        return state.books.bookList
    });
    let book = bookList.find((item) => item.id === id)
    
    return (
        <div>
            This is the Edit book page for book {id}
            <p>{book.title}</p>
        </div>
    )
}; 

export default EditBookPage; 