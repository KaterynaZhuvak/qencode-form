import React, { useState } from "react";
import { StyledForm } from "./Styled";
import EyeOff from "../../images/EyeOff";
import Eye from "../../images/Eye";

const Form = () => {
  const [isBtnActive, setIsBtnActive] = useState(false);

  const toggleInputType = () => {
    if (isBtnActive) {
      setIsBtnActive(false);
    } else {
      setIsBtnActive(true);
    }
  };

  return (
    <StyledForm>
      <input
        className="emailInput"
        type="email"
        placeholder="Enter your email"
      />
      <div className="passwordInputContainer">
        <input
          className="passwordInput"
          type={isBtnActive ? "text" : "password"}
          placeholder="Password"
        />
        <div onClick={toggleInputType} className="eyeBtn">
          {isBtnActive ? <Eye /> : <EyeOff />}
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
