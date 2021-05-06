
import React from "react";
import styled from "styled-components";

/* ProductImage
 *
 * TODO: add component description
 */
const ProductImage = ({ src, width, props }) => {
  return <StyledProductImage src={src} width={width} />;
};

export const StyledProductImage = styled.img`
  // -webkit-box-shadow: 5px 10px 15px 5px rgba(0,0,0,0.32); 
  // box-shadow: 5px 10px 15px 5px rgba(0,0,0,0.32);
  // border-radius: 128px;
`;

export default ProductImage;
