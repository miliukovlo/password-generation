import React from 'react';
import style from "./Header.module.css"
import fonts from "../../Styles/fonts.module.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <Link className={fonts.link} to='/'>Главная</Link>
            <Link className={fonts.link} to='/generation'>Генерация пароля</Link>
        </header>
    );
}

export default Header;
