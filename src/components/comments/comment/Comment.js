import {PostsService} from "../../../servisces";

const Comment = ({comment, setPost}) => {
    console.log(comment);

    const {postId, id, name, email, body} = comment;

    const getPostById = () => {
        PostsService.getById(postId).then(({data}) => {
            setPost(data)
        })
    }
    return (
        <div>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={getPostById}>POST FOR THIS COMMENT</button>
            <hr/>
        </div>
    );
};

export {Comment};
