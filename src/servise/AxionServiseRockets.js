import axios from "axios";

const AxiosServiseRockets = axios.create({baseURL: 'https://api.spacexdata.com'});

export {
    AxiosServiseRockets
}