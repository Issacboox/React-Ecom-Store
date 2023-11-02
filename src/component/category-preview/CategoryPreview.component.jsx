/* eslint-disable react/prop-types */
import ProductCart from '../product-cart/ProductCart.component';
import { Link } from 'react-router-dom';
import './CategoryPreview.style.scss';

const CategoryPreview = ({ title, products }) => (
  <div className='category-preview-container'>
    <h2>
      <Link className='titles-cat' to={title}>{title.toUpperCase()}</Link>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;