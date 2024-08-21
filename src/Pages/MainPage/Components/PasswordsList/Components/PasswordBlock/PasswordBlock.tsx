import React, { useEffect, useState } from 'react';
import style from "./PasswordBlock.module.css"
import fonts from "../../../../../../Styles/fonts.module.css"
import DeleteButton from './Components/DeleteButton/DeleteButton';
import CopyButton from './Components/CopyButton/CopyButton';

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

    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(false);
            }, 2000);
    
            return () => clearTimeout(timer);
        }
    }, [error]);
    

    return (
        <div className={style.password__block}>
            {error ?
                <p className={fonts.error__show}>Не удалось удалить пароль!</p>
            :
                <>
                    <h2 className={fonts.title__secondary}>Сервис: {service}</h2>
                    <p className={fonts.common__text}>Пароль: {password}</p>
                    <DeleteButton
                        setDelete={setError}
                        id={id}
                    />
                    <CopyButton
                        text={password}
                    />
                </>
            }
        </div>
    );
}

export default PasswordBlock;
