/* eslint-disable react/prop-types */
import './CartItem.style.scss'

const CartItem = ({cartItems}) => {
    const { name, imgURL, quantity, price } = cartItems ;
    return (
        <div className='cart-item-container'>
            <img src={imgURL} alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
            <span className='price'>{quantity} x {price}฿</span>
            </div>
          
        </div>
    );
}

export default CartItem