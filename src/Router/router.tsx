import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import MainPage from '../Pages/MainPage/MainPage';
import GenerationPage from '../Pages/GenerationPage/GenerationPage';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='/generation' element={<GenerationPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
