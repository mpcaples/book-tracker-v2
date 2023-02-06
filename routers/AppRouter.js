import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'; 
import MainPage from "../src/components/MainPage";
import Header from "../src/components/Header";
import FavoritesPage from "../src/components/FavoritesPage";
import AddBookPage from "../src/components/AddBookPage";
import AddGoalPage from "../src/components/AddGoalPage"; 
import NotFoundPage from "../src/components/NotFoundPage";
import EditBookPage from "../src/components/EditBookPage";

const AppRouter = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/add-book" element={<AddBookPage />} />
                <Route path="/add-goal" element={<AddGoalPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/edit/:id" element={<EditBookPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </BrowserRouter>
); 

export default AppRouter; 