import axios from "axios";

const AxiosServiseUsers = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});

export {
    AxiosServiseUsers
}



