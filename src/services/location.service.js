import {axiosService} from "./axios.service";
import {urls} from "../constants";

const locationService = {
    getAll: (page=1) => axiosService.get(urls.location, {params: {page}})
}

export {
    locationService
}