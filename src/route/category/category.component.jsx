import { useParams } from "react-router-dom";
import "./category.style.scss";
import { useSelector } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import ProductCart from "../../component/product-cart/ProductCart.component";
import Spinner from "../../component/spinner/spinner.component";
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log("render/re-rendering component");

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
       <h2 className="titles">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
