import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .emailInput,
  .passwordInput {
    width: 400px;
    max-width: 100%;
    padding: 12px 12px;

    border: 1.2px solid rgb(211, 216, 220);
    border-radius: 6px;
    background: rgb(255, 255, 255);
    outline: none;
  }

  .emailInputContainer {
    margin-bottom: 25px;
  }

  .passwordInputContainer {
    position: relative;
    margin-bottom: 15px;
  }

  .eyeBtn {
    position: absolute;
    top: 15px;
    right: 17px;
    cursor: pointer;
  }

  .errorMessage {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: red;
  }

  .cancelBtn {
    width: 100%;
    max-width: 400px;
    padding: 12px 0;
    color: rgb(6, 14, 30);
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.24%;
    text-align: center;
    border-radius: 8px;
    background: transparent;
    border: 1.2px solid rgb(211, 216, 220);
    margin-bottom: 20px;
  }

  .newPasswordInputContainer {
    position: relative;
    margin-top: 8px;
    margin-bottom: 25px;
  }

  .confirmPasswordInputContainer {
    position: relative;
    margin-top: 8px;
    margin-bottom: 30px;
  }

  .passwordLabel {
    color: rgb(6, 14, 30);
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.24%;
  }
`;
