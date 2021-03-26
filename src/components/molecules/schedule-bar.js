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
     <ScheduleCard cardText={pageText.dayOneTitle} overlayText={pageText.dayOneText} time="7:00 p.m. - 8:30 p.m. EST"/>
     <ScheduleCard cardText={pageText.dayTwoTitle} overlayText={pageText.dayTwoText} time="7:00 p.m. - 8:30 p.m. EST"/>
     <ScheduleCard cardText={pageText.dayThreeTitle} overlayText={pageText.dayThreeText} time="7:00 p.m. - 8:30 p.m. EST"/>
     <ScheduleCard cardText={pageText.dayFourTitle} overlayText={pageText.dayFourText} time="6:00 p.m. - 7:15 p.m. EST"/>
     <ScheduleCard cardText={pageText.dayFiveTitle} overlayText={pageText.dayFiveText} time="all day"/>
     <ScheduleCard cardText={pageText.daySixTitle} overlayText={pageText.daySixText} time="11:30 a.m. - 7:30 p.m. EST"/>
   </Container>
 )
} export default ScheduleBar