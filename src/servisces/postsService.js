import {axiosService} from "./axiosServise";
import {urls} from "../config";

const postsService = {
    getAll: ()=>axiosService.get(urls.posts) ,
    getById: ()=> axiosService.get(`${urls.posts}/${id}`)
}

export {
    postsService
}
