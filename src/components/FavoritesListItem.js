import React from 'react'; 

const FavoritesListItem = ({title, author}) => {  
    return (
        <div>
            <li>
                {title}, by {author}
            </li>
        </div>
    )
}; 

export default FavoritesListItem; 