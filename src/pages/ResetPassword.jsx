import React from "react";

import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";
import Title from "../components/Title/Title";
import ForgotPasswordForm from "../components/Forms/ForgotPasswordForm";

const ResetPassword = () => {
  return (
    <Container>
      <Logo />
      <Title text={"Forgot Password?"} />
      <ForgotPasswordForm />
    </Container>
  );
};

export default ResetPassword;
