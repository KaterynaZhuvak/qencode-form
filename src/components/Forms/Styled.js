import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .emailInput,
  .passwordInput {
    width: 320px;
    padding: 12px 12px;

    border: 1.2px solid rgb(211, 216, 220);
    border-radius: 6px;
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

    transition: all 300ms cubic-bezier(0.5, -0.75, 0.7, 2);
  }

  .eyeBtn:hover,
  .eyeBtn:focus {
    transform: scale(1.2);
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
    color: var(--main-black-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.24%;
    text-align: center;
    border-radius: 8px;
    background: transparent;
    border: 1.2px solid var(--grey-color);
    margin-bottom: 20px;

    transition: all 300ms cubic-bezier(0.5, -0.75, 0.7, 2);
  }

  .cancelBtn:hover,
  .cancelBtn:focus {
    transform: scale(1.1);
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
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.24%;
  }

  @media screen and (min-width: 400px) {
    .emailInput,
    .passwordInput {
      width: 400px;
    }

    .cancelBtn {
      width: 400px;
    }
  }
`;
