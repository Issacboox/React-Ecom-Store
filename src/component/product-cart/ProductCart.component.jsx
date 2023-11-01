/* eslint-disable react/prop-types */
import './ProductCart.style.scss'
import  Button  from '../button/Button.component';

const ProductCart = ({product}) => {
    const {name, price, imgURL} = product;
    return (
        <div className='product-card-container'>
            <img src={imgURL} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='prie'>{price}฿</span>
            </div>
            <Button buttonType='cart'>Add to Cart 🛒</Button>
        </div>
    );
}

export default ProductCart;