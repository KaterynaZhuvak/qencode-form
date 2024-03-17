import React from "react";
import RedirectLink from "../RedirectLink/RedirectLink";
import { StyledIsNewCompany } from "./Styled";

const IsNewCompany = () => {
  return (
    <StyledIsNewCompany>
      <p className="questionText"> Is your company new to Qencode?</p>
      <span>
        <RedirectLink title={"Sign up"} />
      </span>
    </StyledIsNewCompany>
  );
};

export default IsNewCompany;
