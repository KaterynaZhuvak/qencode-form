import React from "react";

import { StyledUniversalBtn } from "./Styled";

const UniversalBtn = ({ title, type }) => {
  return <StyledUniversalBtn type={type}>{title}</StyledUniversalBtn>;
};

export default UniversalBtn;
