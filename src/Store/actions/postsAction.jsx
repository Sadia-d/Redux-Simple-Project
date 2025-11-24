import { getAllPosts } from "../Reducers/postsSlice"

 export const getAsynPosts = () => async (dispatch) =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    dispatch(getAllPosts(posts))
 }