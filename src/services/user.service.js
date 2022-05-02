import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: (page=1) => axiosService.get(urls.users, {params: {page}}),
    getById: (id) => axiosService.get(`${urls.users}/${id}`)
}

export {
    userService
}