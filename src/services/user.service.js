import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`),
    getPosts: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`),
    getComments: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`)
}

export {userService}