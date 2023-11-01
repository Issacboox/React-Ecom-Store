/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./ProductCart.style.scss";
import Button from "../button/Button.component";

const ProductCart = ({ product }) => {
  const { name, price, imgURL } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imgURL} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price me-3">{price}฿</span>
      </div>
      <Button buttonType="cart" onClick={addProductToCart}>
        Add to Cart 🛒
      </Button>
    </div>
  );
};

export default ProductCart;
