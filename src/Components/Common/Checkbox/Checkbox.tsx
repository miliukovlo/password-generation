import React from 'react';
import style from "./Checkbox.module.css"
import fonts from "../../../Styles/fonts.module.css"

interface CheckboxProps {
    labelText: string,
    config: string,
    check: boolean,
    onCheckChange: React.ChangeEventHandler<HTMLInputElement>
}

const Checkbox: React.FC<CheckboxProps> = ({labelText, config, check, onCheckChange}) => {

    return (
        <div className={style.checkbox__block}>
            <input type="checkbox" name={config} id={config} checked={check} onChange={onCheckChange}/>
            <label className={fonts.common__text} htmlFor={config}>{labelText}</label>
        </div>
    );
}

export default React.memo(Checkbox);