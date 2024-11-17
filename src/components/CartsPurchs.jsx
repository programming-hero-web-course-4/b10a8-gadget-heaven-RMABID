import React from "react";
import modalImg from "../assets/Group.png";
import { Link } from "react-router-dom";

const CartsPurchs = ({ handleRemove, price, cardItem, handleSort }) => {
  return (
    <div>
      <div>
        <div className="mt-8 m-1  md:px-36  ">
          <div className="flex justify-between p-3 items-center">
            <div>
              <h1 className="text-2xl font-medium">Cart</h1>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">Total cost : {price}</h1>
              <button
                onClick={() => handleSort(cardItem)}
                className="btn text-custom rounded-full bg-transparent border-2 border-custom"
              >
                Sort by Price
              </button>
              <button
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="btn rounded-full bg-bannerColor text-white"
              >
                Purchase
              </button>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box space-y-2 text-center">
                <img className="w-22 mx-auto" src={modalImg} alt="" />
                <h3 className="font-bold text-2xl">Payment Successfully</h3>
                <p className="py-4">Thanks for purchasing.</p>
                <p>Total : 244.6</p>
                <div className="">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn w-full rounded-full mt-3">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {cardItem.map((card) => (
            <div className="md:flex border-2 rounded-xl m-2 p-6 items-center gap-6">
              <figure>
                <img className="w-96" src={card.product_image} alt="Shoes" />
              </figure>
              <div className="flex justify-between w-full items-center">
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold text-black">
                    {card.product_title}
                  </h1>
                  <p className="text-sm font-bold">
                    Description :{" "}
                    <span className="text-xs font-normal">
                      {card.description}
                    </span>
                  </p>
                  <h2 className="text-lg">Price : {card.price}</h2>
                </div>
                <div className="border-2 p-2 rounded-full cursor-pointer text-red-500 btn border-red-600 border-dashed" onClick={() => handleRemove(product_id)}>
                <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartsPurchs;
