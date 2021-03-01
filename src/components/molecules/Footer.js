import React from "react";
import styled from "@emotion/styled";
const Links = styled.h1`
  text-align: center;
  display: flex;
  color: #003459;
  font-family: LatoLight;
  font-weight: normal;
  font-size: calc(10px + 7vmin);
`;

const Button = styled.a`
  text-align: center;
  text-decoration: none;
  display: flex;
  color: white;
  font-family: LatoLight;
  font-weight: normal;
  font-size: calc(5px + 3vmin);
  border-radius: 25px;
  background: #00A7E1;
  padding: 0.5em 2.5em;
  box-shadow: 0px 4px 4px rgba(0, 167, 225, 0.32);
  a:visted {
    color: white;
  }
  a:link {
    color: white;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  padding-top: 50px;
  background: white;
`;

const FooterUI = () => {
  return (
    <Container>
      <Links>Ready To Design?</Links>
      <Button
        href="https://tlzr74t36d8.typeform.com/to/hse2SCMO"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register
      </Button>
    </Container>
  );
};
const Footer = () => {
  return <FooterUI />;
};

export default Footer;
