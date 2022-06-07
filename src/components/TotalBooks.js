import React from 'react'; 

const TotalBooks = ({totalBooks}) => {
    return (
        <div>
            <p>You have read {totalBooks} {totalBooks !== 1 ? "books" : "book"}.</p>
        </div>
    )
}

export default TotalBooks; 