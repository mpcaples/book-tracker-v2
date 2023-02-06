import { Container, Link, List, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom"; 
import { useSelector } from "react-redux";
import FavoritesListItem from "./FavoritesListItem";


const FavoritesPage = () => {
    const bookList = useSelector((state) => {
        
        return state.book.bookList
    }) 
    const bookFavorites = bookList.filter((book) => {
        return book.isFavorite === true
    })
    
    return (
        <Container maxWidth="sm">
            <Typography variant="h2">Favorites Page</Typography>
            {bookList.length === 0 && 
                <React.Fragment>
                    <Typography variant="h4">You have no favorites yet</Typography>
                    <NavLink to="/">Return to Main Page</NavLink>
                </React.Fragment>  
            }
            <List>
                {bookFavorites.map((book) => {
                    return <FavoritesListItem
                                key={book.id} 
                                title={book.title} 
                                author={book.author} 
                            />
                })}
            </List>
        </Container>
    )
}; 

export default FavoritesPage; 