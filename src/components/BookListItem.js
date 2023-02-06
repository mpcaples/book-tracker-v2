import { Box, Button, Card, ListItem, Stack, Typography } from '@mui/material';
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
        <Box>
            
                <ListItem>

                <Card sx={{
                    minHeight: '5rem', 
                    padding: '1rem', 
                }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center"
                spacing={2}>
                        <Typography variant='body1'>{title}, by {author} {isFavorite ? 'is a favorite' : 'is not a favorite'}</Typography> 
                        <Button variant="outlined" onClick={onDeleteBook}>Delete Book</Button>
                        <Button variant="outlined" onClick={onEditBook} disabled>Edit Book</Button>
                    </Stack>
                </Card>
                </ListItem>
            
        </Box>
    )
}; 

export default BookListItem; 