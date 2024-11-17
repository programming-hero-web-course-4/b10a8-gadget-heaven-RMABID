import React, { useEffect, useState } from "react";
import { getAllData, removeProduct } from "./utils";
import { NavLink } from "react-router-dom";
import DashboardBanner from "../components/DashboardBanner";
import Wishlist from "../components/Wishlist";
import CartsPurchs from "../components/CartsPurchs";
// import toast from "react-hot-toast/headless";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [cardItem, setCardItem] = useState([]);
  useEffect(() => {
    const products = getAllData();
    setCardItem(products);
    document.title = "Assignment-8 | Dashboard";
  }, []);
  const [price, setPrice] = useState(6930);

  const handleSort = () => {
    const sorted = [...cardItem].sort((a, b) => a.price - b.price);
    setCardItem(sorted);
    toast.success("Sorted");
    setPrice(price + price);
  };

  const handleRemove = (product_id) => {
    removeProduct(product_id);
    const products = getAllData();
    setCardItem(products);
  };

  const [isActive, setIsActive] = useState({
    cart: true,
  });

  const handleCartActive = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "wishlist",
      });
    }
  };
  return (
    <div>
      <DashboardBanner
        isActive={isActive}
        handleCartActive={handleCartActive}
      ></DashboardBanner>

      {isActive.cart ? (
        <CartsPurchs
          handleRemove={handleRemove}
          price={price}
          handleSort={handleSort}
          cardItem={cardItem}
        ></CartsPurchs>
      ) : (
        <Wishlist cardItem={cardItem}></Wishlist>
      )}
    </div>
  );
};

export default Dashboard;
