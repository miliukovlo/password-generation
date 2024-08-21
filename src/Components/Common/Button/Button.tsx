import React from 'react';
import style from "./Button.module.css"

interface ButtonProps {
    size: "m" | "l",
    text: string,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
    size,
    text,
    onClick
}) => {
    return (
        <button
            className={size === "m" ? `${style.size__m}  ${style.button}` : `${style.size__l} ${style.button}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
