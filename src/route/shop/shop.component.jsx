/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCart from "../../component/product-cart/ProductCart.component";
import "./shop.style.scss";
const Shop = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="bg-page">
     
        <div className="product-container">
          {product.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
    </div>
  );
};

export default Shop;
