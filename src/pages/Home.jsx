import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import { Outlet, useLoaderData } from "react-router-dom";
import Hading from "../components/Hading";

const Home = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = "Assignment-8 | Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Hading></Hading>
      <div className="flex gap-6 mt-12 ">
        <div className="w-1/3">
          <Cards data={data}></Cards>
        </div>

        <div className="w-3/4 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
