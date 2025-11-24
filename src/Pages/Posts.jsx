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
        <div>
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