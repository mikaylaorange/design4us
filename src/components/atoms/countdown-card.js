import React from "react";
import styled from "@emotion/styled";

const Number = styled.span`
  font-size: 1.5em;
  font-weight: normal;
  margin-right: .5em;


  text-align: center;
  font-family: LatoLight;
  display: block;
  color: #00A7E1;
  @media only screen and (max-width: 768px) {
    font-size: 1em;
  }
`;
const Title = styled.span`
  font-size: 1.5em;
  font-weight: normal;

  text-align: center;
  font-family: LatoLight;
  display: block;
  color: #003459;
  @media only screen and (max-width: 768px) {
    font-size: 1em;
  }
`;
const Card = styled.div`

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    width: 8em;
    height: 1em;

  }
`;
const Container = styled.div`
  display: inline-block;
  margin-left: 1vw;
  margin-right: 1vw;
  
  font-family: Lato;
  @media only screen and (max-width: 768px) {
    display: flex;

  }

`;

const CountdownCardUI = ({ timeMeasure, timeLeft }) => {
  return (
    <Container>
      <Card>
        <Number>{timeLeft}</Number>
       <Title>{timeMeasure}</Title>
        </Card>
    </Container>
  );
};
function CountdownCard({ timeLeft, timeMeasure }) {
  return <CountdownCardUI timeLeft={timeLeft} timeMeasure={timeMeasure} />;
}
export default CountdownCard;
