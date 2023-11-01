import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import ShoppingCart from '../../assets/svg-icon/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <img src={ShoppingCart} alt='sp' className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;
