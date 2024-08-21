import React from 'react';
import style from "./PasswordBlock.module.css"
import fonts from "../../../../../../Styles/fonts.module.css"

interface PasswordBlockProps {
    service: string,
    password: string
    id: number
}

const PasswordBlock: React.FC<PasswordBlockProps> = ({
    service,
    password,
    id
}: PasswordBlockProps) => {
    return (
        <div className={style.password__block}>
            <h2 className={fonts.title__secondary}>Сервис: {service}</h2>
            <p className={fonts.common__text}>Пароль: {password}</p>
        </div>
    );
}

export default PasswordBlock;
