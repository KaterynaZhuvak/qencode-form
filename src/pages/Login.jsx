import React from "react";
import Logo from "../components/Logo/Logo";
import Container from "../components/Container/Container";
import Title from "../components/Title/Title";
import Links from "../components/Links/Links";
import Separator from "../components/Separator/Separator";
import Form from "../components/Form/Form";
import RedirectLink from "../components/RedirectLink/RedirectLink";
import UniversalBtn from "../components/UniversalBtn/UniversalBtn";
import IsNewCompany from "../components/IsNewCompany/IsNewCompany";

const Login = () => {
  return (
    <Container>
      <Logo />
      <Title text={"Log in to your account"} />
      <Links />
      <Separator />
      <Form />
      <RedirectLink
        title={"Forgot your password?"}
        redirect={"/resetPassword"}
      />
      <UniversalBtn title={"Log in to Qencode"} type={"submit"} />
      <IsNewCompany />
    </Container>
  );
};

export default Login;
