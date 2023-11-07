import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  /* border-bottom: 1px solid darkgrey; */
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  background-color: white;
  /* outline-style: dashed;
  outline-color: aliceblue; */
  padding: 20px;
  border-radius: 20px;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  font-weight: 600;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
  /* background-color: yellow; */
  /* padding: 10px;
  height: 30px;
  border-radius: 50%; */
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;