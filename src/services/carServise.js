import {axiosServise} from "./axiosServise";
import {urls} from "../configs";

const carServise = {
    getAll: () => axiosServise.get(urls.cars),
    create: (newCar) => axiosServise.post(urls.cars, newCar),
    updateById: (id, data) => axiosServise.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosServise.delete(`${urls.cars}/${id}`)
}

export {
    carServise
}