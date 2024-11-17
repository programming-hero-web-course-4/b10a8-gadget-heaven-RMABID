import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCard, addWishlist, getAllData, getAllWishlistData } from "./utils";
import DetailsBanner from "../components/DetailsBanner";

const ProductDetails = () => {
  const { id } = useParams();
  const productDta = useLoaderData();
  const [product, setProduct] = useState({});
  const [clickCard, setClickCard] = useState(false);

  useEffect(() => {
    const singleProduct = productDta.find(
      (product) => product.product_id == parseInt(id)
    );
    setProduct(singleProduct);
    const addProducts = getAllData();
    const isExist = addProducts.find(
      (item) => item.product_id == product.product_id
    );
    if (isExist) {
      setClickCard(true);
    }
    document.title = "Assignment-8 | ProductDetails";
  }, []);

  const {
    product_title,
    product_image,
    availability,
    price,
    description,
    specifications,
  } = product;
  console.log(product_image);

  const handleAddCard = (addData) => {
    addCard(addData);
    // getAllData(addData);
    setClickCard(true);
  };

  const handleWishlist = (wishlist) => {
    addWishlist(wishlist);
  };
  return (
    <div>
      <DetailsBanner></DetailsBanner>
      <div className="flex lg:w-[1006px] md:w-[650px] -mt-36 mx-auto rounded-xl bg-white gap-6 border-2 p-4 ">
        <div className="w-[424px] border-2 rounded-xl h-[502px]">
          <img className="w-full" src={product_image} alt="Shoes" />
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-black">{product_title}</h1>
          <p className="text-lg font-medium">Price : {price}</p>
          <p className={`btn rounded-full border-2 border-green-500 ${availability?'text-green-500':'text-red-500 border-red-500'}`}>
            {availability ? "in stock" : "Stock out"}
          </p>
          <p>{description}</p>
          <h3 className="text-xl text-black font-bold">Specification:</h3>
          <ul className="list-disc pl-5">
            {specifications?.map((data, index) => (
              <div key={index} className="ml-3">
                <li>{data.product_info}</li>
                <li>{data.configuration_info}</li>
                <li>{data.display_info}</li>
              </div>
            ))}
          </ul>
          <h1 className="text-2xl font-medium">Rating ⭐ </h1>

          <div className="flex gap-2 text-yellow-400">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={clickCard}
              onClick={() => handleAddCard(product)}
              className="btn rounded-full border-2 border-green-500 text-green-500"
            >
              Add To Card
            </button>
            <button
              onClick={() => handleWishlist(product)}
              className="btn rounded-full border-2 border-green-500 text-green-500"
            >
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
