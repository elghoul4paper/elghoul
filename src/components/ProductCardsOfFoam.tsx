import { productsOfFoam } from "../data/products";
import ProductCard from "./ui/ProductCard";

const ProductCardsOfFoam = () => {
  return (
    <div className="grid gap-7  sm:grid-cols-2 sm:gap-4 lg:grid-cols-3  xl:grid-cols-3  2xl:grid-cols-4 ">
      {productsOfFoam.map(({ name, id, size, thickness,img }) => (
        <ProductCard name={name} size={size} id={id} thickness={thickness} img={img} />
      ))}
    </div>
  );
};

export default ProductCardsOfFoam;
