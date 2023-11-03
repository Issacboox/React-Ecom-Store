import "./CartDrop.style.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem.component";
import Button from "../button/Button.component";

const CartDrop = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item" style={{ overflow: "auto" }}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItems={item} />
        ))}
      </div>
      <Button buttonType="cart" onClick={goToCheckOutHandler}>
        Check out 🧺
      </Button>
    </div>
  );
};

export default CartDrop;
