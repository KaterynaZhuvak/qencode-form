import React from "react";

import Logo from "../components/Logo/Logo";
import Container from "../components/Container/Container";
import Title from "../components/Title/Title";
import Links from "../components/Links/Links";
import Separator from "../components/Separator/Separator";
import IsNewCompany from "../components/IsNewCompany/IsNewCompany";
import LogInForm from "../components/Forms/LogInForm";

const Login = () => {
  return (
    <Container>
      <Logo />
      <Title text={"Log in to your account"} />
      <Links />
      <Separator />
      <LogInForm />
      <IsNewCompany />
    </Container>
  );
};

export default Login;
