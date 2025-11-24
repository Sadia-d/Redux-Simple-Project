import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsynPosts } from "../Store/actions/postsAction";
import PostCard from "./PostCard";

const Posts = () => {

    const {posts} = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getAsynPosts())
    },[dispatch])
    

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                posts.map((post) => <PostCard 
             key={post.id}
             post={post}
                ></PostCard>)
            }
        </div>
    );
};

export default Posts;