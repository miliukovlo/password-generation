import React from 'react';
import style from "./Header.module.css"
import fonts from "../../Styles/fonts.module.css"

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={fonts.title__primary}>Aerokod</h1>
        </header>
    );
}

export default Header;
