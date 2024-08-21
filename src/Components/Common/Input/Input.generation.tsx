import React from 'react';
import style from "./Input.module.css"

interface InputProps {
    size: "m" | "l",
    type: string,
    value: string,
    setValue: (value: string) => void,
    placeholder: string
}

const InputGeneration: React.FC<InputProps> = React.memo(({
    size,
    type, 
    value,
    setValue,
    placeholder
}: InputProps) => {
    return (
    <input 
        type={type} 
        className={size === "m" ? style.size__m_generation : style.size__l_generation}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}}
    />
    )
})

export default InputGeneration;

