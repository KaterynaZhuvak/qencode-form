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
    width: 150px;
    height: 48px;
    padding: 0 20px;
    border: 1.2px solid var(--grey-color);
    border-radius: 6px;
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.5, -0.75, 0.7, 2);
  }

  .googleBtn:hover,
  .googleBtn:focus,
  .githubBtn:hover,
  .githubBtn:focus {
    transform: scale(1.1);
  }

  @media screen and (min-width: 400px) {
    .googleBtn,
    .githubBtn {
      width: 192px;
    }
  }
`;
