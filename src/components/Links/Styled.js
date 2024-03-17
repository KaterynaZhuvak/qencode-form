import styled from "styled-components";

export const StyledLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;

  .googleBtn,
  .githubBtn {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    width: 192px;
    height: 48px;
    padding: 0 20px;
    border: 1.2px solid rgb(211, 216, 220);
    border-radius: 6px;
    background: rgb(255, 255, 255);
    cursor: pointer;
  }
`;
