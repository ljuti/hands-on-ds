import { string } from "prop-types"
import React from "react";
import styled from "styled-components";

/* Avatar
 *
 * TODO: add component description
 */
const Avatar = ({src, props}) => <StyledAvatar src={src} />

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`;

Avatar.propTypes = {
  src: string
}

export default Avatar;
