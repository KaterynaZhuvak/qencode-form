import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 15px;

  .emailInput,
  .passwordInput {
    width: 400px;
    padding: 12px 12px;

    border: 1.2px solid rgb(211, 216, 220);
    border-radius: 6px;
    background: rgb(255, 255, 255);
    outline: none;
  }

  .passwordInputContainer {
    position: relative;
  }

  .eyeBtn {
    position: absolute;
    top: 15px;
    right: 17px;
  }
`;
