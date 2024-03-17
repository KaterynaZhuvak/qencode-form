import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth.operations";

import { logInSchema } from "../../helpers/schemas";
import { StyledForm } from "./Styled";
import EyeOff from "../../images/EyeOff";
import Eye from "../../images/Eye";
import RedirectLink from "../RedirectLink/RedirectLink";
import UniversalBtn from "../UniversalBtn/UniversalBtn";

const LogInForm = () => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const toggleInputType = () => {
    setIsBtnActive(!isBtnActive);
  };

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => {
        dispatch(loginThunk(data));
      })}
    >
      <div className="emailInputContainer">
        <input
          {...register("email")}
          className="emailInput"
          type="email"
          placeholder="Enter your email"
        />
        <p className="errorMessage">{errors.email?.message}</p>
      </div>

      <div className="passwordInputContainer">
        <input
          {...register("password")}
          className="passwordInput"
          type={isBtnActive ? "text" : "password"}
          placeholder="Password"
        />
        <p className="errorMessage">{errors.password?.message}</p>
        <div onClick={toggleInputType} className="eyeBtn">
          {isBtnActive ? <Eye /> : <EyeOff />}
        </div>
      </div>
      <RedirectLink
        title={"Forgot your password?"}
        redirect={"/resetPassword"}
      />
      <UniversalBtn title={"Log in to Qencode"} type={"submit"} />
    </StyledForm>
  );
};

export default LogInForm;
