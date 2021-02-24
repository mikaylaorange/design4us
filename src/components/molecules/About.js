import React from "react";
import styled from "@emotion/styled";
import {pageText} from '../../constants';

const Title = styled.h1`
  text-align: center;
  display: flex;
  color: #003459;
  font-family: LatoLight;
  font-weight: normal;
  font-size: calc(10px + 7vmin);
`;

const Subtitle = styled.h2`
  text-align: left;
  display: flex;
  color: #003459;
  font-family: LatoThin;
  font-weight: thin;
  font-size: 1.5em;
  @media only screen and (max-width: 768px) {
    font-size: calc(5px + 3.5vmin);

  }
`;
const HelperText = styled.p`
text-align: left;
  color: #003459;
  font-family: LatoThin;
  font-size: 1.5em;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: calc(5px + 3.5vmin);

  }
`
const TextConatiner = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;

`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 10em;
  padding-top: 10em;
  padding-left: 10em;
  padding-right: 10em;
  background: white;
  @media only screen and (max-width: 768px) {
    padding-left: 2em;
    flex-direction: column;
    padding-right: 2em;
  }
`;
const AboutImage = styled.img`
width: 27.375em;
 height: 27em;
  padding-top: 2em;
  animation: slide 0.5s forwards;
    animation-delay: 2s;

  @media only screen and (max-width: 768px) {
    width: 20.375em;
    height: 20em;
  
  }

`;
const HyperLink = styled.a`
a:visted {
  color: #00A7E1;
}
a:link {
  color: #00A7E1;
}
color: #00A7E1;
text-decoration: none;

`


const AboutUI = () => {
  return (
    <Container id="about">
    <AboutImage src={require('../../images/about-image.png')}/>
    <TextConatiner>
    <Title>About</Title>
    <Subtitle>{pageText.aboutDescription}</Subtitle>
    <HelperText>This event was inspired by a Human-Computer Interaction class taken by the organizes during the <HyperLink href='https://buildyourfuture.withgoogle.com/programs/tech-exchange/'> Google Tech Exchange </HyperLink>program!</HelperText>
    </TextConatiner>
    </Container>
  );
};
const About = () => {
  return <AboutUI />;
};

export default About;