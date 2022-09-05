import React from "react";
import { useParams } from "react-router-dom"; 

const EditBookPage = () => {
    let { bookSlug } = useParams(); 
    return (
        <div>
            This is the Edit book page for book {bookSlug}
        </div>
    )
}; 

export default EditBookPage; 