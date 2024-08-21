import { combineReducers, createStore } from "redux"
import { passwordsReducer } from "./passwordsReducer"

const rootReducer = combineReducers({
    passwords: passwordsReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch