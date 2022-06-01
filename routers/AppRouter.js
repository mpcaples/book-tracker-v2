import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'; 
import MainPage from "../src/components/MainPage";
import Header from "../src/components/Header";
import FavoritesPage from "../src/components/FavoritesPage";
import AddBookPage from "../src/components/AddBookPage";
import NotFoundPage from "../src/components/NotFoundPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/add-book" element={<AddBookPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </BrowserRouter>
); 

export default AppRouter; 