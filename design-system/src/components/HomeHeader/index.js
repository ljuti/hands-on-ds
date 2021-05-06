
import React from "react";
import styled from "styled-components";

/* HomeHeader
 *
 * TODO: add component description
 */
const HomeHeader = ({ props, children }) => <StyledHomeHeader>{children}</StyledHomeHeader>


export const StyledHomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

`;

export default HomeHeader;
