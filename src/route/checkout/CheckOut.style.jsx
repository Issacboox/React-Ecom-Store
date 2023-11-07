import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  /* min-height: 90vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  background-color: #cbe7d0;
  padding: 40px;
  border-radius: 30px;
  outline-style: dashed;
  outline-color: gainsboro;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid darkgrey; */
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 20px;
  font-size: 2rem;
  font-weight: 600;
  margin-left: auto;
  font-size: 1.5rem;
`;

export const Topic = styled.span`
  font-size: 2.6rem;
  font-family: Mitr;
  letter-spacing: 10px;
`;

export const FormPayment = styled.form`
  margin-top: 10px;
  width: 100%;
  display: grid;
  row-gap: 7px;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
`;
