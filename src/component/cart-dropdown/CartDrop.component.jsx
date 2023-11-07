import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selctor.js";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component.jsx";
import CartItem from "../cart-item/CartItem.component.jsx";
import { Link } from "react-router-dom";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {currentUser ? (
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      ) : (
        <Link to="/auth" >
          <Button buttonType={BUTTON_TYPE_CLASSES.confirm} style={{width:'100%'}}>
            {/* <a href="/auth">SIGN IN FIRST</a> */}
            SIGN IN FIRST
          </Button>
        </Link>
      )}
      {/* <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button> */}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
