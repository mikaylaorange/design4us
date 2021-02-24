import React from 'react'
import ScheduleCard from '../atoms/schedule-card';
import styled from "@emotion/styled";

import {pageText} from '../../constants';

const Container = styled.div`
overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;
padding-bottom: 5px;
`
function ScheduleBar() {
 

 return (
   <Container>
     <ScheduleCard cardText={pageText.dayOneTitle} overlayText={pageText.dayOneText}/>
     <ScheduleCard cardText={pageText.dayTwoTitle} overlayText={pageText.dayTwoText}/>
     <ScheduleCard cardText={pageText.dayThreeTitle} overlayText={pageText.dayThreeText}/>
     <ScheduleCard cardText={pageText.dayFourTitle} overlayText={pageText.dayFourText}/>
     <ScheduleCard cardText={pageText.dayFiveTitle} overlayText={pageText.dayFiveText}/>
     <ScheduleCard cardText={pageText.daySixTitle} overlayText={pageText.daySixText}/>
   </Container>
 )
} export default ScheduleBar