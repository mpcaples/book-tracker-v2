import React from "react";
import { useSelector } from "react-redux";
import FavoritesListItem from "./FavoritesListItem";


const FavoritesPage = () => {
    const bookList = useSelector((state) => {
        
        return state.books.bookList
    }) 
    const bookFavorites = bookList.filter((book) => {
        return book.isFavorite === true
    })
    
    return (
        <div>
            <h1>Favorites Page</h1>
            {bookList.length === 0 && <p>You have no favorites yet</p>}
            {bookFavorites.map((book) => {
                return <FavoritesListItem
                            key={book.id} 
                            title={book.title} 
                            author={book.author} 
                        />
            })}

        </div>
    )
}; 

export default FavoritesPage; 