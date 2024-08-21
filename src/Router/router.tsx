import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;