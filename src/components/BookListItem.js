import React from 'react'; 
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/features/addBookSlice';

const BookListItem = ({id, title, author, isFavorite}) => {
    const dispatch = useDispatch(); 
    const onDeleteBook = () => {
        dispatch(deleteBook({id}))
    }   
    return (
        <div>
            <li>
                {title}, by {author} {isFavorite ? 'is a favorite' : 'is not a favorite'}
                <button onClick={onDeleteBook}>Delete Book</button>
            </li>
        </div>
    )
}; 

export default BookListItem; 