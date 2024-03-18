import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetPassword } from "../../redux/auth.operations";
import { resetPasswordSchema } from "../../helpers/schemas";
import { StyledForm } from "./Styled";
import Eye from "../../images/Eye";
import EyeOff from "../../images/EyeOff";
import UniversalBtn from "../UniversalBtn/UniversalBtn";
import { Notify } from "notiflix";

const NewPasswordForm = () => {
  const history = useNavigate();
  const [isBtnPassword, setIsBtnPassword] = useState(false);
  const [isBtnConfirmPassword, setIsBtnConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const toggleInputType = (fieldName) => {
    if (fieldName === "password") {
      setIsBtnPassword(!isBtnPassword);
    } else if (fieldName === "password_confirm") {
      setIsBtnConfirmPassword(!isBtnConfirmPassword);
    }
  };

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => {
        if (data.password === data.password_confirm) {
          dispatch(resetPassword(data));
          Notify.success(
            "You have successfully changed your password, now you can try to log in again!"
          );
          history("/login");
        } else {
          Notify.failure("Please check if the passwords match!");
        }
      })}
    >
      <label className="passwordLabel">
        Password
        <div className="newPasswordInputContainer">
          <input
            {...register("password")}
            className="passwordInput"
            type={isBtnPassword ? "text" : "password"}
            placeholder="Password"
          />
          <p className="errorMessage">{errors.password?.message}</p>
          <div onClick={() => toggleInputType("password")} className="eyeBtn">
            {isBtnPassword ? <Eye /> : <EyeOff />}
          </div>
        </div>
      </label>

      <label className="passwordLabel">
        Confirm Password
        <div className="confirmPasswordInputContainer">
          <input
            {...register("password_confirm")}
            className="passwordInput"
            type={isBtnConfirmPassword ? "text" : "password"}
            placeholder="Password"
          />
          <p className="errorMessage">{errors.password_confirm?.message}</p>
          <div
            onClick={() => toggleInputType("password_confirm")}
            className="eyeBtn"
          >
            {isBtnConfirmPassword ? <Eye /> : <EyeOff />}
          </div>
        </div>
      </label>
      <UniversalBtn title={"Reset Password"} type={"submit"} />
    </StyledForm>
  );
};

export default NewPasswordForm;
