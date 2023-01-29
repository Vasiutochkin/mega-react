import {axiosService} from "./axiosService";
import {urls} from "../config";

const commentsService = {
    getAll: () => axiosService.get(urls.comments)

}

export {
    commentsService
}
