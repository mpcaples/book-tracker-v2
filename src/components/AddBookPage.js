import { Container, Typography } from "@mui/material";
import React from "react";
import AddBookForm from "./AddBookForm";
const AddBookPage = () => {
    return (
        <Container maxWidth='sm'>
            <Typography variant="h2">Add Book</Typography>
            <AddBookForm/>
        </Container>
    )
}; 

export default AddBookPage; 