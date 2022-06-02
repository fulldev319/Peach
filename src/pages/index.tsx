import React, { useState, useEffect } from "react";

import Search from "./components/SeachBar";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { mainPageStyles } from "./index.styles";

import Static_Data from "../assets/data.json";

function Main() {
  const classes = mainPageStyles();

  const [filteredProducts, setFilteredProducts] = useState<any>(Static_Data);
  const [selectedProduct, setSelectedProduct] = useState<any>(Static_Data[0]);
  const [searchKey, setSearchKey] = useState<string>("");

  useEffect(() => {
    setFilteredProducts(
      Static_Data.filter((product) =>
        product.name.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  }, [searchKey]);

  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <Search onSearch={(e) => setSearchKey(e.target.value)} />
        <div className={classes.productsContainer}>
          <div className={classes.products}>
            {filteredProducts.map((product, index) => (
              <Product
                product={product}
                onProductClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
          <ProductDetails product={selectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default Main;
