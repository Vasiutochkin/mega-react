import {axiosService} from "./axiosService";
import {urls} from "../config";

const AlbumsService = {
    getAll: () => axiosService.get(urls.albums)

}

export {
    AlbumsService
}










