import React from "react";
import { Link } from "react-router-dom";

import { StyledLink } from "./Styled";

const RedirectLink = ({ title, redirect }) => {
  return (
    <StyledLink>
      <Link className="redirectLink" to={redirect}>
        {title}
      </Link>
    </StyledLink>
  );
};

export default RedirectLink;
