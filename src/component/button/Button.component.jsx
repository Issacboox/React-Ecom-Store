/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import "./Button.style.scss";

const BUTTON_TYPE = {
  google: "google",
  confirm: "confirm",
  cart :"cart"
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${BUTTON_TYPE[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
