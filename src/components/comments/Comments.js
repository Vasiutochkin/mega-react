import React, {useEffect, useState} from "react";
import {CommentsService} from "../../servisces";
import {Post} from "../post/Post";
import {Comment} from "./comment/Comment";
import css from './coments.module.css'

const Comments = () => {
    const [comments, setComments] = useState([]);

    console.log(comments);

    const [post, setPost] = useState(null);
    console.log(post);

    useEffect(() => {
        CommentsService.getAll().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div className={css.container}>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment} setPost={setPost}/>)}
            </div>

            <div>
                {post && <Post key={post.id} post={post}/>}
            </div>
        </div>
    );
};

export {Comments};