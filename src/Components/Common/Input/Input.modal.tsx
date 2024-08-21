import React from 'react';
import style from "./Input.module.css"

interface InputProps {
    size: "m" | "l",
    type: string,
    value: string,
    setValue: (value: string) => void,
    placeholder: string
}

const InputModal: React.FC<InputProps> = React.memo(({
    size,
    type, 
    value,
    setValue,
    placeholder
}: InputProps) => {
    return (
    <input 
        type={type} 
        className={size === "m" ? style.size__m_modal : style.size__l_modal}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}}
    />
    )
})

export default InputModal;

