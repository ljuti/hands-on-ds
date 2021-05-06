
import React from "react";
import styled from "styled-components";
import ProductImage from "../ProductImage";

import tokens from "../../tokens/design-tokens.json";

/* Product
 *
 * TODO: add component description
 */
const Product = ({name, price, props}) => {
  return <StyledProduct>
    <ProductImage />
    <ProductTitle>{name}</ProductTitle>
    <ProductPrice>{price}</ProductPrice>
  </StyledProduct>;
};

export const StyledProduct = styled.div`
display: flex;
flex-direction: column;
`;

export const ProductTitle = styled.h2`
  font-weight: 800;
`;

export const ProductPrice = styled.span`
  font-weight: 800;
  color: ${tokens.primary[500].value}
`

export default Product;
