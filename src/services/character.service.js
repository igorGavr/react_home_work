import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {logDOM} from "@testing-library/react";

const characterService = {
    getByCharacterList: (characters) => {
        const ids = characters.map(item => item.split('/').slice(-1)[0]).join(',')
        console.log(ids)
        return axiosService.get(`${urls.character}/${ids}`)
    },
    getAllCharacters: (page = 1) => axiosService.get(urls.character, {params: {page}})
}

export {
    characterService
}