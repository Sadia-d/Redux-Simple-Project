

const PostCard = ({post}) => {
    console.log(post);
    const {title,body} = post;
    
    return (
        <div className="border">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostCard;