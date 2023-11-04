/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import "./ProductCart.style.scss";
import Button from "../button/Button.component";

const ProductCart = ({ product }) => {
  const { name, price, imgURL } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
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
