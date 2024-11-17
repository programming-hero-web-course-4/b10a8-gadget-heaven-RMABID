const DashboardBanner = ({ isActive, handleCartActive }) => {
  console.log(isActive);
  return (
    <div className="bg-bannerColor py-12 rounded-xl space-y-6 text-center text-white">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>
        Explore the latest gadgets that will take your experience to the next
        level. <br /> From smart devices to the coolest accessories, we have it
        all!
      </p>
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => handleCartActive("cart")}
          className={`${
            isActive?.cart
              ? "btn border-2 px-12 bg-white text-custom rounded-full"
              : "btn bg-transparent rounded-full"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => handleCartActive("wishlist")}
          className={`${
            isActive.cart
              ? "btn bg-transparent rounded-full"
              : "btn border-2 px-12 bg-white text-custom rounded-full"
          }`}
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default DashboardBanner;
