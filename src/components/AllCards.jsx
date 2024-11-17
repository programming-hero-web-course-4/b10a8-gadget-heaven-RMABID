import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import img from "../assets/icon-circle-loading-png.webp";

const AllCards = () => {
  const { category } = useParams();

  const allData = useLoaderData();
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (category) {
      const filterItem = [...allData].filter(
        (product) => product.category === category
      );
      setItem(filterItem);
    } else {
      setItem(allData.slice(0, 3));
    }
  }, [allData, category]);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden ">
      {item.map((data) => (
        <div className="">
          <div className="card lg:w-[322px] h-[380px] py-6 p-4 bg-base-100 shadow-xl">
            <figure className=" rounded-xl mx-auto h-[181px]">
              <img
                className=" rounded-xl object-cover"
                src={data.product_image}
                alt="Shoes"
              />
            </figure>
            <div className="space-y-5">
              <h2 className="text-2xl font-bold">{data.product_title}</h2>
              <p className="text-lg text-gray-300">Price : {data.price}</p>
              <div className="">
                <Link
                  to={`/product/${data.product_id}`}
                  className="btn rounded-full bg-transparent border-custom border-2 text-custom font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCards;
