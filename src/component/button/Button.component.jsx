/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  GoogleSignInButtons,
  ConfirmButton,
  CartButton
} from './Button.style.jsx';

export const BUTTON_TYPE_CLASSES = {
  google: "google",
  confirm: "confirm",
  cart :"cart",
  base: 'base',
  googles: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({ 
    [BUTTON_TYPE_CLASSES.google]:GoogleSignInButtons,
    [BUTTON_TYPE_CLASSES.confirm]:ConfirmButton,
    [BUTTON_TYPE_CLASSES.cart]:CartButton,
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.googles]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
   

  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;