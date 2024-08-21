import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import style from "./main.layout.module.css"

const MainLayout: React.FC = () => {
    return (
        <>
            <Header/>
            <main className={style.main__wrapper}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default MainLayout;
