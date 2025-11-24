import { getAllProductsData } from "../Reducers/ProductSlice"


 export const getAsyncProducts = () => async (dispatch) =>{
    const data = await fetch('https://fakestoreapi.com/products')
    const res = await data.json()
        dispatch(getAllProductsData(res))
}