import React from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

const Cards = ({ data }) => {

  return (
    <div className=" p-4 bg-white rounded-xl shadow-xl ">
      <button className="btn w-full m-2">All Product</button>
      {data.map((card) => (
        <NavLink
          to={`/cards/${card.category}`}
          className={({ isActive }) =>
            `btn w-full m-2 ${isActive ? "bg-bannerColor" : "btn"}`
          }
        >
          {card.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
