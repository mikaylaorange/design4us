import React, {useEffect, useState} from 'react'
import countDown from '../../backend/countdown'
import CountdownCard from '../atoms/countdown-card'
import styled from "@emotion/styled";

const Container = styled.div`
@media only screen and (max-width: 1200px) {
  display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
}
`
function CountdownBar() {
  const [object,setObject] = useState(countDown())
  const [days,setDays] = useState()
  const [hours,setHours] = useState()
  const [minutes,setMinutes] = useState()
  const [seconds,setSeconds] = useState()
 useEffect(() => {

   const timer = setTimeout(()=> {
   setObject(countDown())
   setDays(object.daysLeft)
   setHours(object.hoursLeft)
   setMinutes(object.minutesLeft)
   setSeconds(object.secondsLeft)
   },1000);
   return () => clearTimeout(timer)
 })
 

 return (
   <Container>
     <CountdownCard timeLeft={days} timeMeasure="days"/>
     <CountdownCard timeLeft={hours} timeMeasure="hours" changeColor={true}/>
     <CountdownCard timeLeft={minutes} timeMeasure="minutes"/>
     <CountdownCard timeLeft={seconds} timeMeasure="seconds"/>
   </Container>
 )
} export default CountdownBar 