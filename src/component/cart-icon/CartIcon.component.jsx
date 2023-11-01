import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import ShoppingCart from '../../assets/svg-icon/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return (
        <div className='cart-icon-container me-4' onClick={toggleIsCartOpen}>
            <img src={ShoppingCart} alt='sp' className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;
