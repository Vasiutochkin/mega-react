
const Post = ({post}) => {

    return (
        <div>
            <h1>POST PAGE</h1>
                    <div>id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
        </div>
    );
};

export {Post};