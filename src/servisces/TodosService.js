import {axiosService} from "./axiosService";
import {urls} from "../config";

const TodosService = {
    getAll: () => axiosService.get(urls.todos)

}

export {
    TodosService
}
