import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Reducers/ProductSlice'
import postsReducer from './Reducers/postsSlice'



export const store = configureStore({
  reducer: {
      products : productReducer,
      posts : postsReducer
  },
})