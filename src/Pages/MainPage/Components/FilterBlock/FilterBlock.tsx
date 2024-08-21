import React, { useCallback } from 'react';
import style from "./FilterBlock.module.css"
import Input from '../../../../Components/Common/Input/Input';
import Button from '../../../../Components/Common/Button/Button';

interface filterBlockProps {
    value: string,
    setValue: (value: string) => void,
    setShowModal: (value: boolean) => void,
    showModal: boolean
}

const FilterBlock: React.FC<filterBlockProps> = ({
    value,
    setValue,
    setShowModal,
}) => {

    const activeModal = useCallback(() => {
        setShowModal(true)
    },[setShowModal])

    return (
        <div className={style.filter__block}>
            <div className={style.filter__border}>
                <Input
                    setValue={setValue}
                    value={value}
                    placeholder='Введите название сервиса'
                    size='l'
                    type='text'
                />
                <Button
                    text='Добавить новый пароль'
                    size='l'
                    onClick={activeModal}
                />
            </div>
        </div>
    );
}

export default FilterBlock;
