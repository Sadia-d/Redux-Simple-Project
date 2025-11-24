import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProducts } from "../Store/actions/productsAction";
import ProductCard from "./ProductCard";

const Products = () => {

    const {products} = useSelector((state) => state.products)
        const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAsyncProducts())
    },[dispatch])

       
        
    return (
        <div className=" justify-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-auto">
            {
                products.map((product) => <ProductCard 
                key={product.id}
                product={product}
                ></ProductCard> )
            }
        </div>
    );
};

export default Products;