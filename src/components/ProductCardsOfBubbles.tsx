import { productsOfBubbles } from "../data/products";
import ProductCard from "./ui/ProductCard";

const ProductCardsOfBubbles = () => {
  return (
    <div className="grid gap-7  sm:grid-cols-2 sm:gap-4 lg:grid-cols-3  xl:grid-cols-3  2xl:grid-cols-4">
      {productsOfBubbles.map(({ name, id, size, img, details }) => (
        <ProductCard
          name={name}
          size={size}
          id={id}
          img={img}
          details={details}
        />
      ))}
    </div>
  );
};

export default ProductCardsOfBubbles;
