 import { createSlice } from '@reduxjs/toolkit'

 const initialState = {
    posts : []
 }
  
 export const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        getAllPosts : (state , action)  =>{
            state.posts = action.payload
        }
    }
  })

  export const {getAllPosts} = postsSlice.actions;
  export default postsSlice.reducer