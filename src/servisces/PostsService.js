import {axiosService} from "./axiosService";
import {urls} from "../config";

const PostsService = {
    getById: (postId) => axiosService.get(`${urls.posts}/${postId}`)
}

export {PostsService}