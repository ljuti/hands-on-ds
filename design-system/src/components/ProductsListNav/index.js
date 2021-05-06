
import React from "react";
import styled from "styled-components";

/* ProductsListNav
 *
 * TODO: add component description
 */
const ProductsListNav = ({ props, children }) => <StyledProductsListNav>{children}</StyledProductsListNav>

export const StyledProductsListNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default ProductsListNav;
