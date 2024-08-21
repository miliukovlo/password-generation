import { passwordInterface } from "./passwordsInterface";

export interface passwordActionInterface {
    type: string,
    payload: passwordInterface,
    id: number  
}