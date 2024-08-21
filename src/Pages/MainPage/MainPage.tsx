import React, { useState } from 'react';
import style from "./MainPage.module.css"
import FilterBlock from './Components/FilterBlock/FilterBlock';

const MainPage: React.FC = () => {
    const [filterValue, setFilterValue] = useState<string>("")

    return (
        <div className={style.content}>
            <FilterBlock
            value={filterValue}
            setValue={setFilterValue}
            />
        </div>
    );
}

export default MainPage;
