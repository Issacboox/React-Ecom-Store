/* eslint-disable react/prop-types */
import { CartItemContainer, ItemDetails } from './CartItem.style';

const CartItem = ({ cartItem }) => {
  const { name, imgURL, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imgURL} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;