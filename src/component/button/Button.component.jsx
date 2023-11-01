/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import './Button.style.scss'
const BUTTON_TYPE_CLASSES = {
    google: 'google-signIn',
    inverted : 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}` 
       }  {...otherProps} >
            {children}
            </button>
    );
}

export default Button;