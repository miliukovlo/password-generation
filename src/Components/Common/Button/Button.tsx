import React from 'react';
import style from "./Button.module.css"

interface ButtonProps {
    size: "m" | "l",
    text: string,
    onClick: () => void,
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = React.memo(({
    size,
    text,
    onClick,
    disabled
}) => {
    return (
        <button
            className={size === "m" ? `${style.size__m}  ${style.button}` : `${style.size__l} ${style.button}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
})

export default Button;
