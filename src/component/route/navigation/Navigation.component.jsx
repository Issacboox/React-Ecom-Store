import { Fragment } from "react";
import './navigation.styles.scss'
import { Outlet, Link } from "react-router-dom";
import Logo from '../../../assets/logo/basket.png'
export default function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
        <img src={Logo} alt="logo" className="logo"/>
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
