import React, {useState,  useEffect} from 'react'; 
import {useNavigate} from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/features/addBookSlice';
import str2bool from "../helperFunctions/str2bool";
import { Button, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';




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
    const onIsFavoriteChange = () => {
        
        setState({
            ...state, 
            isFavorite: !isFavorite,  
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
      
            <FormGroup onSubmit={onAddBook}>
                <TextField
                    variant="outlined"
                    type="text" 
                    label="Title"
                    value={bookTitle}
                    onChange={onBookTitleChange}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    type="text" 
                    placeholder="Author"
                    value={bookAuthor}
                    onChange={onAuthorChange}  
                />
                <FormControlLabel 
                    control={
                        <Switch 
                            checked={state.isFavorite}
                            onChange={onIsFavoriteChange} 
                        />
                    }
                    label="Favorite"
                />
                <Button 
                    variant="contained"
                    onClick={onAddBook}
                >Add Book</Button>
                {contentError ? <div className='error'>{contentError}</div> : null}
            </FormGroup>
    
    )
}

export default AddBookForm; 