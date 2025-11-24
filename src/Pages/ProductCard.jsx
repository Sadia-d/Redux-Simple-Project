
const ProductCard = ({  product}) => {
    const {image,title} = product
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-lg">
                <figure>
                    <img
                    className="h-[300px] w-full object-cover"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;