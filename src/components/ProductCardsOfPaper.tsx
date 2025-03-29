import { productsOfPaper } from "../data/products";
import ProductCard from "./ui/ProductCard";

const ProductCardsOfPaper = () => {
  return (
    <div className="grid gap-7  sm:grid-cols-2 sm:gap-4 lg:grid-cols-3  xl:grid-cols-3  2xl:grid-cols-4 ">
      {productsOfPaper.map(
        ({ name, details, id, numOfsheets, size, thickness, img }) => (
          <ProductCard
            name={name}
            details={details}
            size={size}
            id={id}
            thickness={thickness}
            numOfsheets={numOfsheets}
            img={img}
          />
        )
      )}
    </div>
  );
};

export default ProductCardsOfPaper;
