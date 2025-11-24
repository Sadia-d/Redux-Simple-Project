import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : [],
}

export const productSlice = createSlice({
        name:'products',
        initialState,
        reducers:{
            getAllProductsData : (state , action) =>{
                state.products = action.payload
            }
        } 
})


export const {getAllProductsData} = productSlice.actions;
export default productSlice.reducer