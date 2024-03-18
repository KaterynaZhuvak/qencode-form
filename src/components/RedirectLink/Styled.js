import styled from "styled-components";

export const StyledLink = styled.div`
  margin-left: auto;
  margin-bottom: 30px;

  .redirectLink {
    color: var(--main-blue-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: right;

    transition: all 300ms cubic-bezier(0.5, -0.75, 0.7, 2);
  }

  .redirectLink:hover,
  .redirectLink:focus {
    color: var(--blue-hover-color);
  }
`;
