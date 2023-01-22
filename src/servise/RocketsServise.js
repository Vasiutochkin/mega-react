import {AxiosServiseRockets} from "./AxionServiseRockets";

const RocketsServise = {
    getAll: ()=> AxiosServiseRockets.get('/v3/launches/')

}

export {RocketsServise}