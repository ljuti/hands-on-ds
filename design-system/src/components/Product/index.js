
import React from "react";
import styled from "styled-components";
import ProductImage from "../ProductImage";

import tokens from "../../tokens/design-tokens.json";

/* Product
 *
 * TODO: add component description
 */
const Product = ({image, name, price, props}) => {
  return <StyledProduct>
    <ProductImage src={image} />
    <ProductTitle>{name}</ProductTitle>
    <ProductPrice price={price}></ProductPrice>
  </StyledProduct>;
};

let formatPrice = function(input) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR"
  })
  return formatter.format(input);
}

const ProductPrice = ({ price }) => {
  const formatted = formatPrice(price);
  return <StyledProductPrice>{formatted}</StyledProductPrice>
};

export const StyledProduct = styled.div`
display: flex;
flex-direction: column;
`;

export const ProductTitle = styled.h2`
  font-weight: 800;
`;

export const StyledProductPrice = styled.span`
  font-weight: 800;
  color: ${tokens.primary[500].value}
`

export default Product;
