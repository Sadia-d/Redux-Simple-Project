

const PostCard = ({post}) => {
    console.log(post);
    const {title,body} = post;
    
    return (
        <div className="border border-green-500 p-5 rounded-xl">
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <p className="text-gray-500" >{body}</p>
        </div>
    );
};

export default PostCard;