import React from 'react';
import style from "./PasswordsList.module.css"
import { passwordInterface } from '../../../../Interfaces/passwordsInterface';
import fonts from "../../../../Styles/fonts.module.css"

interface PasswordsListProps {
    passwords: passwordInterface[]
}

const PasswordsList: React.FC<PasswordsListProps> = React.memo(({
    passwords
}: PasswordsListProps) => {
    return (
        <div className={style.passwords__list}>
            {
            passwords.length === 0 ?
                <h1 className={fonts.title__primary}>Вы не сохранили пароли!</h1>
                :
                passwords.map(password => {
                    return (
                        password.password
                    )
                })    
        }
        </div>
    );
})

export default PasswordsList;
