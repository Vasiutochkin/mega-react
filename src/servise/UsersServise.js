import {AxiosServiseUsers} from "./AsxionServiseUsers";

const userServise = {
    getAll: () => AxiosServiseUsers.get('/users')
}

export {userServise}