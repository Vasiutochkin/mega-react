import {useEffect, useState} from "react";
import {PostServise} from "../../../servise";
import {Post} from "../post/Post";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostServise.getByUserId(userId).then(({data}) => setPosts([...data]))
    }, [userId])

    return (
        <div>
            {posts.map(post => <Post kye={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};