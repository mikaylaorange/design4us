import React from "react";
import styled from "@emotion/styled";


const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  font-family: LatoLight;
  display: block;
  color: #00A7E1;
  overflow-wrap: break-word;
  ${({ overlay }) =>
    overlay
      ? `margin-top: 35%`
      : `margin-top 0`};
 

`;
const CardFront = styled.div`
  width: 16.8125em;
  height: 31em;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
  white-space: normal;
  display: grid;


`;
const Description = styled.p`
  font-size: 1em;
  text-align: center;
  font-family: LatoLight;
  display: block
  overflow-wrap: break-word;
  align-items: center;

`;
const Container = styled.div`
  display: inline-block;
  margin-left: 4vw;
  margin-right: 2vw;

  font-family: Lato;
`;




const ScheduleCardUI = ({ cardText, overlayText, time }) => {


  return (
    <Container>
      <CardFront>
        <Title>{cardText}</Title>
        <Description>{time}</Description>
        <Description>{overlayText}</Description>
      </CardFront>
    </Container>
  );
};
function ScheduleCard({ cardText, overlayText, time }) {
  return <ScheduleCardUI cardText={cardText} overlayText={overlayText} time={time} />;
}
export default ScheduleCard;
