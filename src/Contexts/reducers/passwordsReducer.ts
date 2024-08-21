import { passwordInterface } from "../../Interfaces/passwordsInterface"
import { passwordActionInterface } from "../../Interfaces/passwordActionInterface"

const defaultPasswords = {
    passwords: [] as passwordInterface[]
}

const ADD_PASSWORD = "ADD_PASSWORD"
const REMOVE_PASSWORD = "REMOVE_PASSWORD"

export const passwordsReducer = (state = defaultPasswords, action: passwordActionInterface) => {
    switch (action.type) {
        case ADD_PASSWORD:
            return {...state, passwords: [...state.passwords, action.payload]}
        case REMOVE_PASSWORD:
            return {...state, passwords: state.passwords.filter(password => password.id !== action.payload)}
        default:
            return state
    }
}

export const addPassword = (payload: passwordInterface) => ({type: ADD_PASSWORD, payload})
export const removePassword = (payload: number) => ({type: REMOVE_PASSWORD, payload})