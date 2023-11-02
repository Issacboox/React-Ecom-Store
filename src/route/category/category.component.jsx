import { useParams } from "react-router-dom";
import "./category.style.scss";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCart from "../../component/product-cart/ProductCart.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="titles">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
