import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/auth.operations";
import { Link, useNavigate } from "react-router-dom";

import { StyledForm } from "./Styled";
import { forgotPasswordSchema } from "../../helpers/schemas";
import UniversalBtn from "../UniversalBtn/UniversalBtn";
import { Notify } from "notiflix";

const ForgotPasswordForm = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => {
        dispatch(forgotPassword(data));
        Notify.success("Now you can reset your password!");
        history("/newPassword");
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

      <UniversalBtn title={"Send"} type={"submit"} />
      <Link className="cancelBtn" to="/login">
        Cancel
      </Link>
    </StyledForm>
  );
};

export default ForgotPasswordForm;
