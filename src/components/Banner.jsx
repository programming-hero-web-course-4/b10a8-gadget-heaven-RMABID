import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="-mt-32">
      <div className="bg-bannerColor rounded-xl bottom-2 h-[684px]">
        <div className="flex space-y-5 px-8 flex-col pt-48 text-white justify-center  items-center">
          <h1 className="md:text-4xl text-3xl lg:text-6xl text-center font-bold">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-center">
            Explore the latest gadgets that will take your experience to the
            next level. <br /> From smart devices to the coolest accessories, we
            have it all!
          </p>
          <button className="btn rounded-full bg-white text-[#9538E2]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="border-2 p-4 w-80 md:w-[550px] lg:w-[1002px] backdrop-blur mx-auto rounded-xl md:-mt-48 -mt-32">
        <img className=" w-full rounded-xl" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
