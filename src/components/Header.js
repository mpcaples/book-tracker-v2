import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box"; 
import { Typography, Container, Toolbar } from "@mui/material";


const Header = () => {
    const pages = [
        {name: "Main Page", link: "/"}, 
        {name: "Add Book", link: "/add-book"}, 
        {name: "Favorites", link: "/favorites"}
    ]
    return (
        <AppBar position="static" style={{margin: '0px'}}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography variant="h3">Book Tracker 2.0</Typography>
      
           
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'} }}>
             
            <NavLink
                    to="/"
                    style={({ isActive }) => ({ 'fontWeight': isActive ? 'bold' : 'normal' })} 
                    exact='true'
                >
                    <Typography textAlign="center">Main Page</Typography>
                </NavLink> 
                <NavLink 
                    to={"/add-book"} 
                    style={({ isActive }) => ({ 'fontWeight': isActive ? 'bold' : 'normal' })} 
                    exact='true'
                >
                    <Typography textAlign="center">Add Book</Typography>
                </NavLink> 
                <NavLink 
                    to={'/favorites'} 
                    style={({ isActive }) => ({ 'fontWeight': isActive ? 'bold' : 'normal' })} 
                    exact='true'
                >
                    <Typography textAlign="center">Favorites</Typography>
                </NavLink> 
            </Box>
          </Toolbar>
          </Container>
        </AppBar> 
    )
}; 

export default Header; 