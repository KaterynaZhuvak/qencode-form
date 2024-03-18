import React from "react";
import { Notify } from "notiflix";

import { StyledLinks } from "./Styled";
import Google from "../../images/Google";
import Github from "../../images/Github";

const Links = () => {
  const onClick = () => {
    Notify.info(
      "Sorry for the inconvenience, we are working on the functionality!"
    );
  };

  return (
    <StyledLinks>
      <div onClick={onClick} className="googleBtn">
        <Google />
        <p>Google</p>
      </div>
      <div onClick={onClick} className="githubBtn">
        <Github />
        <p>Github</p>
      </div>
    </StyledLinks>
  );
};

export default Links;
