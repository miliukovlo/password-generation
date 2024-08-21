import React, { useState } from 'react';
import style from "./MainPage.module.css"
import FilterBlock from './Components/FilterBlock/FilterBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../Contexts/reducers/store';
import PasswordsList from './Components/PasswordsList/PasswordsList';
import { passwordInterface } from '../../Interfaces/passwordsInterface';

const MainPage: React.FC = () => {
    const [filterValue, setFilterValue] = useState<string>("")
    const passwords: passwordInterface[] = useSelector((state: RootState) => state.passwords.passwords as passwordInterface[])

    return (
        <div className={style.content}>
            <FilterBlock
                value={filterValue}
                setValue={setFilterValue}
            />
            <PasswordsList
                filterValue={filterValue}
                passwords={passwords}
            />
        </div>
    );
}

export default MainPage;