import {useEffect, useState} from "react";

import {commentsService as CommentsService} from "../../servisces";
import {Comment} from "./comment/Comment";
import css from '../header/Header.module.css';
const Comments = () => {

    const [comments, setComments] = useState([]);

        useEffect(() =>{
            CommentsService.getAll().then(({data}) => setComments([...data]))
            },[])

    return (
        <div className={css.container}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};