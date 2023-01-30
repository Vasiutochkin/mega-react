import {axiosService} from "./axiosService";
import {urls} from "../config";

const CommentsService = {
    getAll: () => axiosService.get(urls.comments)
}

export {
    CommentsService
}
