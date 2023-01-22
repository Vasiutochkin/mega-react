import {AxiosServiseUsers} from "./AsxionServiseUsers";

const PostServise = {
    getByUserId: (userId) => AxiosServiseUsers.get(`/posts`, {params: {userId: userId}})
}

export {
    PostServise
}