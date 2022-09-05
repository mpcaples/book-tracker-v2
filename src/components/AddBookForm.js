import React, {useState,  useEffect} from 'react'; 
import {useNavigate} from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/features/addBookSlice';
import str2bool from "../helperFunctions/str2bool";




const AddBookForm = () => {
    
    // const [bookAuthor, setBookAuthor] = useState(''); 
    // const [publicationYear, setPublicationYEar] = useState(0); 
    let navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const [state, setState] = useState({
            bookTitle: '',
            bookAuthor: '',
            isFavorite: true,
            contentError: null
        }); 
    const onBookTitleChange = (e) => {
        setState({
            ...state,
            bookTitle: e.target.value, 
            contentError: null
        }); 
    }
    const onAuthorChange = (e) => {
        setState({
            ...state, 
            bookAuthor: e.target.value, 
            contentError: null
        })
    }    
    const onIsFavoriteChange = (e) => {
        const booleanValue = str2bool(e.target.value)
        setState({
            ...state, 
            isFavorite: booleanValue,  
            contentError: null
        })
    }
    const onAddBook = (e) => {
        e.preventDefault(); 
        if (bookTitle && bookAuthor === '') {
            setState({...state, 
                contentError: 'You must write something!'});
            return;
        }

        dispatch(addBook({
            bookTitleContent: bookTitle, 
            bookAuthorContent: bookAuthor, 
            bookIsFavorite: isFavorite,
        }));
        
        // resets state after dispatching content
        setState({...state, bookTitle: '', bookAuthor: ''});
        // redirects to MainPage
        navigate("/"); 

    }
    const { bookTitle, bookAuthor, isFavorite, contentError } = state;
    return (
        <div> 
            <form onSubmit={onAddBook}>
                <input
                    type="text" 
                    placeholder="Title"
                    value={bookTitle}
                    onChange={onBookTitleChange}
                    autoFocus
                >
                </input>
                <input
                    type="text" 
                    placeholder="Author"
                    value={bookAuthor}
                    onChange={onAuthorChange}
                    
                >
                </input>
                <label htmlFor="is-favorite">Is this book a favorite?</label>
                <select 
                    id="is-favorite" 
                    name="is-favorite"
                    onChange={onIsFavoriteChange}
                >
                    <option value={isFavorite}>Favorite</option>
                    <option value={!isFavorite}>Not Favorite</option>
                </select>
                
                <button>Add Book</button>
                {contentError ? <div className='error'>{contentError}</div> : null}
            </form>
        </div>
    )
}

export default AddBookForm; 