import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../component/cart-icon/CartIcon.component";
import CartDrop from "../../component/cart-dropdown/CartDrop.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selctor";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="glow mt-2 ms-3" to="/">
          {/* <img src={Logo} alt="logo" className="logo mt-2"/> */}
          🥗 BeanSprouts
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDrop />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
