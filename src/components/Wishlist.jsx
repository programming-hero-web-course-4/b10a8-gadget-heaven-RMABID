import React from "react";

const Wishlist = ({ cardItem }) => {
  return (
    <div>
      <div>
        <div className="flex mt-8 justify-between items-center">
          <div>
            <h1 className="text-2xl font-medium">Wishlist</h1>
          </div>
        </div>
        {cardItem.map((card) => (
          <div className="md:flex border-2 rounded-xl mt-8 m-2 items-center gap-6">
            <figure>
              <img
                className="rounded-xl"
                src={card.product_image}
                alt={card.product_title}
              />
            </figure>
            <div className="space-y-4 p-3">
              <h1 className="text-2xl font-bold text-black">
                {card.product_title}
              </h1>
              <p className="text-sm font-bold">
                Description :
                <span className="text-xs font-normal">{card.description}</span>
              </p>
              <h2 className="text-lg">Price : {card.price}</h2>
              <button className="btn rounded-full bg-bannerColor text-white">
                Add to Card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
