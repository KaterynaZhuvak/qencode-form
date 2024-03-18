import styled from "styled-components";

export const StyledUniversalBtn = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 12px 0;
  color: var(--main-white-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  border-radius: 8px;
  background: var(--main-blue-color);
  border: 1px solid var(--main-blue-color);
  margin-bottom: 20px;

  transition: all 250ms cubic-bezier(0.5, -0.75, 0.7, 2);

  &:hover,
  &:focus {
    background: var(--blue-hover-color);
    transform: scale(1.1);
  }
`;
