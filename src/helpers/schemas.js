import * as yup from "yup";

export const logInSchema = yup
  .object({
    email: yup
      .string()
      .required()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please check your email"),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain 8 or more characters, at least one uppercase letter, one lowercase letter, one number, and one special character!"
      ),
  })
  .required();

export const forgotPasswordSchema = yup
  .object({
    email: yup
      .string()
      .required()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please check your email"),
  })
  .required();

export const resetPasswordSchema = yup
  .object({
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain 8 or more characters, at least one uppercase letter, one lowercase letter, one number, and one special character!"
      ),
    password_confirm: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain 8 or more characters, at least one uppercase letter, one lowercase letter, one number, and one special character!"
      ),
  })
  .required();
