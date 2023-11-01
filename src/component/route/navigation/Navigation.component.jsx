import { Fragment } from "react";
import './navigation.styles.scss'
import { Outlet, Link } from "react-router-dom";
// import Logo from '../../../assets/logo/basket.png'
export default function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="glow mt-2 ms-3" to='/'>
        {/* <img src={Logo} alt="logo" className="logo mt-2"/> */}
        🫛BeanSprouts
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/signin">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
