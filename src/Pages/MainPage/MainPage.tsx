import React, { useState } from 'react';
import style from "./MainPage.module.css"
import FilterBlock from './Components/FilterBlock/FilterBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../Contexts/reducers/store';
import PasswordsList from './Components/PasswordsList/PasswordsList';
import { passwordInterface } from '../../Interfaces/passwordsInterface';
import ModalBlock from './Components/ModalBlock/ModalBlock';

const MainPage: React.FC = () => {
    const [filterValue, setFilterValue] = useState<string>("")
    const [showModal, setShowModal] = useState<boolean>(false)
    const passwords: passwordInterface[] = useSelector((state: RootState) => state.passwords.passwords as passwordInterface[])

    return (
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
    );
}

export default MainPage;