import { productsOfTaps } from "../data/products";
import ProductCard from "./ui/ProductCard";

const ProductCardsOfTaps = () => {
  return (
    <div className="grid gap-7  sm:grid-cols-2 sm:gap-4 lg:grid-cols-3  xl:grid-cols-4 ">
      {productsOfTaps.map(({ name, id, size, img }) => (
        <ProductCard name={name} size={size} id={id} img={img} />
      ))}
    </div>
  );
};

export default ProductCardsOfTaps;
