const Post = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export {Post};