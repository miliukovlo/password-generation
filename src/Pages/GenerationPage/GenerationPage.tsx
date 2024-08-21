import React, { useState } from 'react';
import fonts from "../../Styles/fonts.module.css"
import style from "./GenerationPage.module.css"
import Button from '../../Components/Common/Button/Button';
import Checkbox from '../../Components/Common/Checkbox/Checkbox';
import InputGeneration from '../../Components/Common/Input/Input.generation';

const GenerationPage = () => {

    const [generatedPassword, setGeneratedPassword] = useState<string>("")
    const [length, setLength] = useState<number>(12);
    const [useLetters, setUseLetters] = useState<boolean>(true);
    const [useNumbers, setUseNumbers] = useState<boolean>(true);
    const [useSymbols, setUseSymbols] = useState<boolean>(true);
    const [useUpperCase, setUseUpperCase] = useState<boolean>(false);
    const [useLowerCase, setUseLowerCase] = useState<boolean>(true);
    const [customChars, setCustomChars] = useState<boolean>(false);
    const [customCharsKit, setCustomCharsKit] = useState<string>('')
    const [minLengthError, setMinLengthError] = useState<boolean>(false)
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedPassword)
    }

    const generatePassword = () => {
        if (length > 0 && length < 25) {
            let charset = '';
            setMinLengthError(false)
            setMaxLengthError(false)
            if (customChars) {
                charset = customCharsKit;
            } else {
                if (useLetters) {
                    charset += useUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
                    charset += useLowerCase ? 'abcdefghijklmnopqrstuvwxyz' : '';
                }
                if (useNumbers) {
                    charset += '0123456789';
                }
                if (useSymbols) {
                    charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
                }
            }
    
            let password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }
    
            setGeneratedPassword(password);
        } else if (length < 0) {
            setMinLengthError(true)
            setMaxLengthError(false)
        } else if (length > 25) {
            setMinLengthError(false)
            setMaxLengthError(true)
        }
    }

    return (
        <div className={style.content}>
            {generatedPassword === "" ?
                <p className={fonts.common__text}>Сгенерируйте пароль</p>
                :
                <p className={fonts.common__text}>Пароль: {generatedPassword}</p>
            }
            <div className={style.button__block}>
                <Button
                    size='l'
                    text="Сгенерировать пароль"
                    onClick={generatePassword}
                />
                <Button
                    disabled={generatedPassword === ""}
                    size='l'
                    text='Скопировать пароль'
                    onClick={handleCopy}
                />
            </div>
            <p className={minLengthError ? fonts.error__show : fonts.error__hidden}>Слишком мало символов!</p>
            <p className={maxLengthError ? fonts.error__show : fonts.error__hidden}>Слишком много символов!</p>
            <div className={style.checkbox__block}>
                <InputGeneration
                    size="l"
                    type="number"
                    placeholder='Введите длину пароля'
                    value={length.toString()} 
                    setValue={(value: string) => setLength(Number(value))}
                />
                <Checkbox
                    labelText='Использовать буквы'
                    check={useLetters}
                    onCheckChange={() => setUseLetters(prev => !prev)}
                    config='letters'
                />
                <Checkbox
                    labelText='Использовать цифры'
                    check={useNumbers}
                    onCheckChange={() => setUseNumbers(prev => !prev)}
                    config='numbers'
                />
                <Checkbox
                    labelText='Использовать символы'
                    check={useSymbols}
                    onCheckChange={() => setUseSymbols(prev => !prev)}
                    config='symbol'
                />
                <Checkbox
                    labelText='Использовать заглавные буквы'
                    check={useUpperCase}
                    onCheckChange={() => setUseUpperCase(prev => !prev)}
                    config='UpperCase'
                />
                <Checkbox
                    labelText='Использовать строчные буквы'
                    check={useLowerCase}
                    onCheckChange={() => setUseLowerCase(prev => !prev)}
                    config='LowerCase'
                />
                <Checkbox
                    labelText='Использовать свой набор символов'
                    check={customChars}
                    onCheckChange={() => setCustomChars(prev => !prev)}
                    config='custom'
                />
                {customChars && 
                    <InputGeneration
                        size='l'
                        placeholder='Введите символы'
                        value={customCharsKit}
                        setValue={setCustomCharsKit}
                        type='text'
                    />
                }
            </div>
        </div>
    );
}

export default GenerationPage;
