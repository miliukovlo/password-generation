import React, { useCallback, useState } from 'react';
import style from "./ModalBlock.module.css";
import fonts from "../../../../Styles/fonts.module.css"
import ButtonModal from '../../../../Components/Common/Button/Button.modal';
import InputModal from '../../../../Components/Common/Input/Input.modal';
import { GetId } from '../../../../Hooks/GetId';
import { addPassword } from '../../../../Contexts/reducers/passwordsReducer';
import { useDispatch } from 'react-redux';

interface ModalBlockProps {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}

const ModalBlock: React.FC<ModalBlockProps> = ({
    showModal,
    setShowModal
}: ModalBlockProps) => {

    const [service, setService] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false)
    const dispatch = useDispatch()
    const passwordId = GetId()

    const handleCloseModal = (): void => {
        setShowModal(false);
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation(); 
    };

    const handleAddPassword = useCallback(() => {
        if (password !== "" && service !== "") {
            dispatch(addPassword({
                password: password,
                service: service,
                id: passwordId
            }))
            setService("")
            setPassword("")
            setError(false)
            setShowModal(false)
        } else {
            setError(true)
        }
    }, [dispatch, password, service, passwordId, setShowModal])

    return (
        <div onClick={handleCloseModal} className={showModal ? style.wrapper__show : style.wrapper__hidden}>
            <div className={style.modal__block} onClick={handleModalClick}>
                <InputModal
                    size='l'
                    placeholder='Введите название сервиса'
                    value={service}
                    setValue={setService}
                    type="text"
                />
                <InputModal
                    size='l'
                    placeholder='Введите пароль'
                    value={password}
                    setValue={setPassword}
                    type="text"
                />
                <ButtonModal
                    text='Добавить пароль'
                    size='l'
                    onClick={handleAddPassword}
                />
                <p className={error ? fonts.error__show : fonts.error__hidden}>Вы не ввели данные!</p>
            </div>
        </div>
    );
}

export default ModalBlock;
