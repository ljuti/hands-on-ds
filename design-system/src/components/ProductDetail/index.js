
import React from "react";
import styled from "styled-components";
import ProductImage from "../ProductImage";
import ProductPrice from "../Product";

import tokens from "../../tokens/design-tokens.json";

/* ProductDetail
 *
 * TODO: add component description
 */
const ProductDetail = (props, children) => {
  return (
    <StyledProductDetail>
      <ProductImage src={props.src}></ProductImage>
      <ProductCategory>Men's Shoe</ProductCategory>
      <ProductName>{props.item.name}</ProductName>
      <ProductPrice price={props.item.price} />
    </StyledProductDetail>
  );
};

export const StyledProductDetail = styled.div``;

export const ProductCategory = styled.h5`
  color: ${tokens.secondary[200].value}
`;

export const ProductName = styled.h2`
`;

export default ProductDetail;
