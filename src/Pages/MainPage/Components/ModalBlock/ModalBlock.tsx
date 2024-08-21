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

    const [service, setService] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [serverError, setServerError] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const dispatch = useDispatch()
    const passwordId = GetId()

    const handleCloseModal = (): void => {
        setShowModal(false)
    }

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
    }

    const handleAddPassword = useCallback(() => {
        if (password !== "" && service !== "") {
            setIsLoading(true)
            setServerError(false)
            setError(false)
            setTimeout(() => {
                let isSuccessfully = Math.floor(Math.random() * 2) + 1
                console.log(isSuccessfully)
                setIsLoading(false)
                if (isSuccessfully % 2 === 0) {
                    setServerError(false)
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
                    setServerError(true)
                }
        }, 2000)
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
                <p className={isLoading ? fonts.loading__show : fonts.loading__hidden}>Загрузка...</p>
                <p className={serverError ? fonts.error__show : fonts.error__hidden}>Не удалось создать пароль, попробуйте позже.</p>
                <p className={error ? fonts.error__show : fonts.error__hidden}>Вы не ввели данные!</p>
            </div>
        </div>
    )
}

export default ModalBlock;
