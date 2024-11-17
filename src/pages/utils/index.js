import toast from "react-hot-toast";
import { json } from "react-router-dom";

const getAllData = () => {
  const all = localStorage.getItem("cardProducts");

  if (all) {
    const productData = JSON.parse(all);
    return productData;
  } else {
    return [];
  }
};

const getAllWishlistData = () => {
  const allWishlistProducts = localStorage.getItem("wishlistProducts");
  if (allWishlistProducts) {
    const products = json.parse(allWishlistProducts);
    return products;
  } else {
    return [];
  }
};

const addCard = (addData) => {
  const cardProducts = getAllData();
  const isExist = cardProducts.find(
    (item) => item.product_id == addData.product_id
  );
  if (isExist) {
    toast.error("This item already add!!");
    return;
  }
  cardProducts.push(addData);
  localStorage.setItem("cardProducts", JSON.stringify(cardProducts));
  toast.success("This item successfully add!!");
};

const removeProduct = (product_id) => {
  const products = getAllData();
  const remaining = products.filter(
    (product) => product.product_id != product_id
  );
  localStorage.setItem("cardProducts", json.stringify(remaining));
  toast.success("This item successfully Removed!!");
};

const addWishlist = (wishlist) => {
  const wishlistProducts = getAllWishlistData();
  wishlistProducts.push(wishlist);
  localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));
};

export { addCard, getAllData, addWishlist, getAllWishlistData, removeProduct };
