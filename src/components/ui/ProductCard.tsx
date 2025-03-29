import { IProducts } from "../../interfaces/index";

const ProductCard = ({
  name,
  details,
  id,
  numOfsheets,
  size,
  thickness,
  img,
}: IProducts) => {
  return (
    <div
      className="text-right gap-5 items-center text-xl bg-[#F0EEED] dark:bg-black p-3 pt-7 rounded-xl"
      id={id}
    >
      <div className="flex items-center justify-center  ">
        <img className="w-[94%] mb-5  rounded-xl" src={img} />
      </div>
      <div>
        <p className="text-2xl font-bold"> {name} :</p>
        <p>{details}</p>
        {(size && size.length > 1 && <p> المقاس: {size.join(", ")}</p>) ||
          (size && size.length < 1 && size.map((s) => <p className="">{s}</p>))}

        {thickness && <p> السمك: {thickness} </p>}
        {numOfsheets && <p> عدد الاوراق لكل كيلو :{numOfsheets} </p>}
      </div>
    </div>
  );
};

export default ProductCard;
// loading="lazy"
