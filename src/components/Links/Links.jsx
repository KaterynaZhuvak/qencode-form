import React from "react";

import { StyledLinks } from "./Styled";
import Google from "../../images/Google";
import Github from "../../images/Github";

const Links = () => {
  return (
    <StyledLinks>
      <div className="googleBtn">
        <Google />
        <p>Google</p>
      </div>
      <div className="githubBtn">
        <Github />
        <p>Github</p>
      </div>
    </StyledLinks>
  );
};

export default Links;
