import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getPostsById: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}

export {postService}