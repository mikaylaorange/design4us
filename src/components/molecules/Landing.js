import React from "react";
import CountdownBar from "./countdown-bar";
import styled from "@emotion/styled";
import { Link } from "react-scroll";

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  display: flex;
  color: #003459;
  font-family: LatoLight;
  font-weight: normal;
  line-height: 2px;
  @media only screen and (max-width: 768px) {
    font-size: 3em;

  }
`;

const Subtitle = styled.h2`
  font-size: 2em;
  text-align: center;
  display: flex;
  color: #003459;
  font-family: LatoThin;
  font-weight: 400;
  line-height: 1em

`;
const RegisterButton = styled.a`
text-align: center;
text-decoration: none;
display: flex;
border-style: solid;
background: #00A7E1;
color: white;
font-family: LatoLight;
font-weight: normal;
font-size: 1.5em;
border-radius: 25px;
border-color: #00A7E1;
border-width: 0.1em;
box-shadow: 0px 4px 4px rgba(0, 167, 225, 0.32);
margin-top: 1em;
padding: 0.2em 3em;
align-items: center;
margin-right: 10px;
height: 2em;
a:visted {
  color: #00A7E1;
}
a:link {
  color: #00A7E1;
}
`;

const ScheduleButton = styled.p`
text-align: center;
text-decoration: none;
cursor: pointer;
display: flex;
border-style: solid;
background: white;
color: #00A7E1;
font-family: LatoLight;
font-weight: normal;
font-size: 1.5em;
border-radius: 25px;
float: right;
border-color: #00A7E1;
border-width: 0.1em;
padding: 0.2em 2em;
margin-right: 10px;
height: 2em;
align-items: center;

`
const Container = styled.div`

  padding-top: 7em;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding-top: 5em;

    flex-direction: column;

  }

`;
const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
@media only screen and (max-width: 768px) {
  flex-direction: column;

}
`;

const TitleContainer = styled.div`
wdith: 50vw;
display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10em;
  padding-right: 5em;
  line-height: .05em;
  @media only screen and (max-width: 768px) {
    padding-left: 5em;
    padding-right:5 em;
  }

`
const LandingImage = styled.img`
width: 27.375em;
 height: 27em;
  padding-top: 2em;
  @media only screen and (max-width: 768px) {
    width: 20.375em;
    height: 20em;
  
  }

`

function Landing() {
  return(
    <Container id="landing">
      <TitleContainer>
      <Title>DESIGN4US</Title>
      <Subtitle>March 29 - April 3, 2021</Subtitle>
      <CountdownBar />
      <ButtonContainer>
      <Link to="schedule" spy={true} smooth={true} offset={50} duration={500}>

      <ScheduleButton>View Schedule</ScheduleButton>
      </Link>

      <RegisterButton
          href="https://tlzr74t36d8.typeform.com/to/CxuePv4Z"
          target="_blank"
          rel="noopener noreferrer"
          >
            Register
        </RegisterButton>
        </ButtonContainer>
        </TitleContainer>
        <LandingImage src={require('../../images/landing-image.png')}/>
      
    </Container>
  )

}
export default Landing;
