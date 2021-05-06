
import React from "react";
import styled from "styled-components";

/* PageBody
 *
 * TODO: add component description
 */

const PageBody = ({ props, children }) => <StyledPageBody>{children}</StyledPageBody>;
;

export const StyledPageBody = styled.div`
  padding: 64px 40px;
`;

export default PageBody;
