import styled from "styled-components";

export const StyledSeparator = styled.p`
  position: relative;
  color: rgb(190, 197, 204);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 30px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    width: 182px;
    border: 1px solid rgb(227, 230, 233);
  }

  &::before {
    right: 100%;
    margin-right: 10px;
  }

  &::after {
    left: 100%;
    margin-left: 10px;
  }

  &::placeholder {
    color: rgb(161, 171, 181);
    font-family: Basis Grotesque Pro;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
  }
`;
