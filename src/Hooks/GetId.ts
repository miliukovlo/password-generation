import { useSelector } from "react-redux"
import { RootState } from "../Contexts/reducers/store"
import { passwordInterface } from "../Interfaces/passwordsInterface"

export const GetId = (): number => {
    const allPasswords = useSelector((state: RootState) => state.passwords.passwords as passwordInterface[])

    const tryPasswordId: number = Math.floor(Math.random() * 10000000)
    let finalPasswordId: number = 0
    if (allPasswords.find(password => password.id === tryPasswordId)) {
        GetId()
    } else {
        finalPasswordId = tryPasswordId
    }

    return finalPasswordId
}