import React from 'react'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../redux/features/addBookSlice';


const BookListItem = ({id, title, author, isFavorite}) => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const onDeleteBook = () => {
        dispatch(deleteBook({id}))
    } 
    const onEditBook = () => {
        navigate("edit/"+id)
    }  
    return (
        <div>
            <li>
                {title}, by {author} {isFavorite ? 'is a favorite' : 'is not a favorite'}
                <button onClick={onDeleteBook}>Delete Book</button>
                <button onClick={onEditBook}>Edit Book</button>
            </li>
        </div>
    )
}; 

export default BookListItem; 