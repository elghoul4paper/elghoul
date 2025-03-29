import { productsOfStretch } from "../data/products";
import ProductCard from "./ui/ProductCard";

const ProductCardsOfStretch = () => {
  return (
    <div className="grid gap-7  sm:grid-cols-2 sm:gap-4 lg:grid-cols-3  xl:grid-cols-3  2xl:grid-cols-4 ">
      {productsOfStretch.map(({ name, id, size, img }) => (
        <ProductCard name={name} size={size} id={id} img={img} />
      ))}
    </div>
  );
};

export default ProductCardsOfStretch;
