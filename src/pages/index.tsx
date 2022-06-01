import React from "react";

import Search from "./components/SeachBar";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { mainPageStyles } from "./index.styles";

function Main() {
  const classes = mainPageStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <Search />
        <div className={classes.productsContainer}>
          <div className={classes.products}>
            <Product />
          </div>
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}

export default Main;
