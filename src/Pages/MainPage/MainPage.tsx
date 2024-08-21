import React, { useState } from 'react';
import style from "./MainPage.module.css"
import FilterBlock from './Components/FilterBlock/FilterBlock';
import { useSelector } from 'react-redux';
import fonts from "../../Styles/fonts.module.css"
import { RootState } from '../../Contexts/reducers/store';
import PasswordsList from './Components/PasswordsList/PasswordsList';
import { passwordInterface } from '../../Interfaces/passwordsInterface';
import ModalBlock from './Components/ModalBlock/ModalBlock';

const isSuccessfullyPage = Math.floor(Math.random() * 2) + 1

const MainPage: React.FC = () => {
    const [filterValue, setFilterValue] = useState<string>("")
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const passwords: passwordInterface[] = useSelector((state: RootState) => state.passwords.passwords as passwordInterface[])

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if (isLoading) {
        return (
            <p className={isLoading ? fonts.loading__show : fonts.loading__hidden}>Загрузка...</p>
        )
    } else {
        return (
            isSuccessfullyPage % 2 === 0 ?
            <div className={style.content}>
            <FilterBlock
                value={filterValue}
                setValue={setFilterValue}
                setShowModal={setShowModal}
                showModal={showModal}
            />
            <PasswordsList
                filterValue={filterValue}
                passwords={passwords}
            />
            <ModalBlock
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </div>
        :
        <h1 className={fonts.title__primary}>Не удалось получить данные!</h1>
        );
    }
}

export default MainPage;