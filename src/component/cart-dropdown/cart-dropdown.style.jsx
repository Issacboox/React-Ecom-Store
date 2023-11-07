import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/Button.style.jsx";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 4px solid #c3c3c3;
  background-color: white;
  top: 75px;
  right: 15px;
  z-index: 5;
  border-radius: 30px;
  
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  /* overflow: scroll; */
`;
