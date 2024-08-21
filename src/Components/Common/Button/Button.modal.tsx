import React from 'react';
import style from "./Button.module.css"

interface ButtonProps {
    size: "m" | "l",
    text: string,
    onClick: () => void
}

const ButtonModal: React.FC<ButtonProps> = React.memo(({
    size,
    text,
    onClick
}) => {
    return (
        <button
            className={size === "m" ? `${style.size__m_modal}  ${style.button}` : `${style.size__l_modal} ${style.button}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
})

export default ButtonModal;
