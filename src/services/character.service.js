import {axiosService} from "./axios.service";
import {urls} from "../constants";

const characterService = {
    getByCharacterList: (characters) => {
        const ids = characters.map(item => item.split('/').slice(-1)[0]).join(',')
        return axiosService.get(`${urls.character}/${ids}`)
    }
}

export {
    characterService
}