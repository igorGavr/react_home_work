import axios, {AxiosResponse} from "axios";
import {IUser} from "../interfaces";

type AxiosType<T> = Promise<AxiosResponse<T>>

export const userService = {
    getAll:():AxiosType<IUser[]> => axios.get('https://jsonplaceholder.typicode.com/users')
}