
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
`;

export default ProductImage;
