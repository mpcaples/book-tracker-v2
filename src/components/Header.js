import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Book Tracker 2.0</h1>
            <NavLink 
                to="/" 
                style={({ isActive }) => ({ 'fontWeight': isActive ? 'bold' : 'normal' })} 
                exact='true'
            >
                Main Page
            </NavLink>
            <NavLink 
                to="/add-book" 
                style={({ isActive }) => ({ 'fontWeight': isActive ? 'bold' : 'normal' })}
            >
                Add Book
            </NavLink>
            <NavLink 
                to="/favorites" 
                style={({ isActive }) => ({ 'fontWeight': isActive ? 'bold' : 'normal' })}
            >
                Favorites
            </NavLink>
        </div> 
    )
}; 

export default Header; 