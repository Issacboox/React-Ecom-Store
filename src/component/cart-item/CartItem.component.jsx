/* eslint-disable react/prop-types */
import { CartItemContainer, ItemDetails } from './CartItem.style';

const CartItem = ({ cartItem }) => {
  const { name, imgURL, price, quantity } = cartItem;
  const totalPrice = (price * quantity);
  return (
    <CartItemContainer>
      <img src={imgURL} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}  
        </span>
        <span>total : {totalPrice} 🪴</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;