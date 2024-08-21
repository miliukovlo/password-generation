import React, { useState } from 'react';
import style from "./PasswordsList.module.css"
import { passwordInterface } from '../../../../Interfaces/passwordsInterface';
import fonts from "../../../../Styles/fonts.module.css"
import PasswordBlock from './Components/PasswordBlock/PasswordBlock';

interface PasswordsListProps {
    passwords: passwordInterface[],
    filterValue: string
}

const PasswordsList: React.FC<PasswordsListProps> = React.memo(({
    passwords,
    filterValue
}: PasswordsListProps) => {

    const currentPasswords: passwordInterface[] = passwords.filter(password => password.service.includes(filterValue))
    return (
        <div className={style.passwords__list}>
            {
            passwords.length === 0 ?
                <h1 className={fonts.title__primary}>Вы не сохранили пароли!</h1>
                :
                currentPasswords.map(password => {
                    return (
                        <PasswordBlock
                            service={password.service}
                            password={password.password}
                            id={password.id}
                            key={password.id}
                        />
                    )
                })    
        }
        </div>
    );
})

export default PasswordsList;
