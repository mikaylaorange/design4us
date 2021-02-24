import React from 'react';
import styled from "@emotion/styled";
import {pageText} from '../../constants';
import TeamCard from  '../atoms/team-card'

const BioContent = styled.div`
align-items: center;
display: flex;
flex-direction: column;
grid-area: 1 / 1 / -1 / 7;
padding-left: 10em;
`;

const BioContainer = styled.div`
background: rgba(0, 126, 167, 0.31);
// width: 34em;
// height: 10.75em;
padding: 10em;
positon: relative;
box-shadow: rgba(2,12,27,0.7);
display: flex;
flex-direction:column;
`;

const Name = styled.p`
font-size: 0.875em;
color: #003459;
font-family: LatoLight;

`;
const Bio = styled.p`
font-size: 0.875em;
color: #003459;
font-family: LatoLight;

`;

const Image = styled.img`
width: 10em;
height: 10.5em;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
grid-area: 1 / 6 / -1 / -1;
filter: grayscale(100%);
:hover {
  filter: grayscale(0%);
  transition: all 0.3s linear;

}
`

const TeamCardUI = ({name, bio, imageUrl}) => {
  const assetsObject = {
    'leslie': require('../../images/leslie.jpg'),
    ' mikayla': require('../../images/mikayla.jpeg')
  }
  return (
    <BioContent>
      <Name>{name}</Name>
      {/* <BioContainer>
        <Bio>{bio}</Bio>
      </BioContainer> */}
      <Image src={require(assetsObject[imageUrl])}/>

    </BioContent>
  )
}


function Team() {
  return (
    <div style={{display: 'flex',flexDirection: "row", paddingTop: '20em'}}>
      <BioContent>
      <a href="https://www.linkedin.com/in/leslie-coney"target="_blank"
          rel="noopener noreferrer">
      <Image src={require("../../images/leslie.jpg")}/>
      </a>
      <Name>Leslie Coney</Name>
      </BioContent>
      <BioContent>
      
      <a href="https://www.linkedin.com/in/mikaylaorange"target="_blank"
          rel="noopener noreferrer">
      <Image src={require("../../images/mikayla.jpeg")}/>
      </a>
      <Name>Mikayla Orange</Name>
      </BioContent>
      <BioContent>
      
      <a href="https://www.linkedin.com/in/xprsn"target="_blank"
          rel="noopener noreferrer">
      <Image src={require("../../images/travis.jpg")}/>
      </a>
      <Name>Travis Brown</Name>
      </BioContent>
      <BioContent>
      
      <a href="https://www.linkedin.com/in/peniel-abebe" target="_blank"
          rel="noopener noreferrer">
      <Image src={require("../../images/peniel.jpeg")}/>
      </a>
      <Name>Peniel Abebe</Name>
      </BioContent>
    </div>
  )
} export default Team;
