import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getAll: () => axiosService.get(urls.comments),
    getByPostId: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`)
}

export {
    commentService
}