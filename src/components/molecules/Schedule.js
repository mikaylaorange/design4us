import React from 'react'
import ScheduleBar from './schedule-bar';
import styled from "@emotion/styled";
 

  const Title = styled.h1`
  text-align: center;
  display: flex;
  color: white;
  font-family: LatoLight;
  font-weight: normal;
  font-size: calc(10px + 7vmin);
`;

  const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
  padding-top: 80px;
  background: rgba(0, 126, 167, 0.31);
`;

const ScheduleUI = () => {
  return (
    <MyContainer id="schedule">
      <TitleContainer>
    <Title>Schedule</Title>
    </TitleContainer>
    
    <ScheduleBar/>
    </MyContainer>
  );
};
const Schedule = () => {
  return <ScheduleUI />;
};
export default Schedule