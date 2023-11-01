import './CartDrop.style.scss';
import Button  from '../button/Button.component';
const CartDrop = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-item'>

            </div>
        <Button buttonType='cart'>Check out 🧺</Button>
        </div>
    );
}

export default CartDrop;