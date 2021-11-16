import "./Home.css";
import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "./ProductCard";
import Metadata from "../layout/Metadata";
import { getProduct, clearErrors } from "../../actions/productAction";

import { useAlert } from "react-alert";

import Loader from "../layout/Loader/Loader";

const Home = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
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
            {products &&
              products.map((product) => {
                return <ProductCard product={product} />;
              })}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
