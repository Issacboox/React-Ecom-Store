import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  border-radius: 20px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const GoogleSignInButtons = styled(BaseButton)`
  background-color: red;
  color: white;

  &:hover {
    background-color: pink;
    border: none;
  }
`;

export const ConfirmButton = styled(BaseButton)`
    margin-top: 10px;
    background-color: #235e14;;
     color: white;

  &:hover {
    background-color: #f8ff29;
    border: none;
  }
`;

export const CartButton = styled(BaseButton)`
  /* Styles for CartButton */
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
