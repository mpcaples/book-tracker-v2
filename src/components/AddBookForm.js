import React, {useState} from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/features/addBookSlice';



const AddBookForm = () => {
    
    // const [bookAuthor, setBookAuthor] = useState(''); 
    // const [publicationYear, setPublicationYEar] = useState(0); 
    const dispatch = useDispatch(); 
    const [state, setState] = useState({
            content: '',
            contentError: null
        }); 
    const onBookTitleChange = (e) => {
        setState({
            ...state,
            content: e.target.value, 
            [`${e.target.name}Error`]: null
        }); 
       console.log(e.target.value)
    }
    const onAddBook = (e) => {
        e.preventDefault(); 
        if (content === '') {
            setState({...state, 
                contentError: 'You must write something!'});
            return;
        }
        dispatch(addBook({newContent: content}));
        setState({...state, content: ''});
    }
    const { content, contentError } = state;
    return (
        <div> 
            <form onSubmit={onAddBook}>
                <input
                    type="text" 
                    placeholder="Title"
                    value={content}
                    onChange={onBookTitleChange}
                    autoFocus
                >
                </input>
                
                <button>Add Book</button>
                {contentError ? <div className='error'>{contentError}</div> : null}
            </form>
        </div>
    )
}

export default AddBookForm; 