import React from 'react';
import style from "./footer.module.css"
import fonts from "../../Styles/fonts.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <h1 className={fonts.title__primary}>Aerokod</h1>
        </footer>
    );
}

export default Footer;
