import "./Home.css";
import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";

import Product from "./Product.js";
import Metadata from "../layout/Metadata";
import { getProduct } from "../../actions/productAction";

const product = {
  name: "Blue Tshirt",
  images: [
    {
      url: "https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ],
  price: "₹1000",
  _id: "tshirt1000",
};

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <Metadata title={"Store 887"} />
      <div className="banner">
        <p>Welcome to store 887</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
