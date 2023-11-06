/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useState } from "react";
import validator from "validator";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./formPayment.style.scss";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./CheckOut.style";
import FormInput from "../../component/form-input/FormInput.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../component/button/Button.component";

const defaultFormDeliveryDetails = {
  name: "",
  address: "",
  phone: "",
};

const Checkout = () => {
  // const [phone, setPhone] = useState("");
  // const [phoneError, setPhoneError] = useState("");

  const [formPayment, setFormPayment] = useState(defaultFormDeliveryDetails);
  const { name, address, phone } = formPayment;

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // const validatePhone = (e) => {
  //   const telephone = e.target.value;
  //   setPhone(telephone);

  //   if (telephone.length < 10) {
  //     // Changed 'lenght' to 'length'
  //     console.log(telephone);
  //     return;
  //   } else if (validator.isMobilePhone(telephone)) {
  //     // setPhoneError("");
  //     return;
  //   } else {
  //     setPhoneError("Enter a valid Phone Number! :(");
  //   }
  // };

  const handleSubmitPayment = async (event) => {
    event.preventDefault();

    
    // Add code to handle the payment submission
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormPayment({ ...formPayment, [name]: value });
  };

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>💰 Total: {cartTotal.toLocaleString()} Bath</Total>
      <form onSubmit={handleSubmitPayment}>
        <FormInput
          label="🪴 Name"
          type="text"
          required={true} // Change 'require' to 'required'
          onChange={handleChange}
          name="name"
          value={name}
        />
        <FormInput
          label="📌 Address"
          type="text"
          required={true} // Change 'require' to 'required'
          onChange={handleChange}
          name="address"
          value={address}
        />
        <FormInput
          label="☎️ Telephone"
          type="text"
          required={true}
          onChange={handleChange}
          name="phone"
          value={phone}
        />
        {/* <span style={{ fontWeight: "bold", color: "red" }}>{phoneError}</span> */}
        <Button buttonType={BUTTON_TYPE_CLASSES.confirm} type="submit">
          Order now
        </Button>
      </form>
    </CheckoutContainer>
  );
};

export default Checkout;
