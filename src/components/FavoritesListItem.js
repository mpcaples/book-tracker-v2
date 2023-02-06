import { ListItem, Typography } from '@mui/material';
import React from 'react'; 

const FavoritesListItem = ({title, author}) => {  
    return (
            <ListItem>
                <Typography variant="h5">{title}, by {author}</Typography>
            </ListItem>
    )
}; 

export default FavoritesListItem; 