import React from "react";

import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";
import Title from "../components/Title/Title";
import NewPasswordForm from "../components/Forms/NewPasswordForm";

const NewPassword = () => {
  return (
    <Container>
      <Logo />
      <Title text={"Create new Password ?"} />
      <NewPasswordForm />
    </Container>
  );
};

export default NewPassword;
