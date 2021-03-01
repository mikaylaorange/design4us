import React from "react";
import styled from "@emotion/styled";
import { pageText } from "../../constants";

const BioContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 10em;
  padding-right: 10em;
  padding-top: 1em;
  border-radius: 1em;
  border-style: solid;
  border-width: 1px;
  border-color: lightgrey;
  filter: grayscale(100%);
  transition: all 0.3s linear;

  
  :hover {
    box-shadow: 4px 7px 20px 5px rgba(0, 0, 0, 0.25);
    filter: grayscale(0%);
    transition: all 0.3s linear;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 2em;
    flex-direction: column;
    padding-right: 2em;
  }
`;

const Name = styled.p`
  font-size: 1em;
  color: #003459;
  font-family: LatoLight;
`;

const Image = styled.img`
  width: 10em;
  height: 10.5em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  :hover {
    filter: grayscale(0%);
    transition: all 0.3s linear;
  }
`;
const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20em;
  padding-bottom: 20em;
  @media only screen and (max-width: 768px) {
    padding-left: 2em;
    flex-direction: column;
    padding-right: 2em;
  }
`;

const TeamRow = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 2em;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const TeamCard = styled.div`
  display: inline-block;
  margin-left: 1vw;
  margin-right: 1vw;
  @media only screen and (max-width: 768px) {
    margin-top: 2vw;
  margin-bottom: 2vw;
  }
`;

const Title = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  color: #003459;
  font-family: LatoLight;
  font-weight: normal;
  font-size: calc(10px + 7vmin);
`;

function Team() {
  return (
    <TeamContainer id="team">
      <Title>Meet The Team</Title>
      <TeamRow>
        <TeamCard>
          <a
            href="https://www.linkedin.com/in/leslie-coney/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <BioContent>
              <Image src={require("../../images/leslie.jpg")} />

              <Name>Leslie Coney</Name>
            </BioContent>
          </a>
        </TeamCard>
        <TeamCard>
          <a
            href="https://www.linkedin.com/in/mikaylaorange"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}

          >
            <BioContent>
              <Image src={require("../../images/mikayla.jpg")} />

              <Name>Mikayla Orange</Name>
            </BioContent>
          </a>
        </TeamCard>
        <TeamCard>
          <a
            href="https://www.linkedin.com/in/xprsn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}

          >
            <BioContent>
              <Image src={require("../../images/travis.jpg")} />

              <Name>Travis Brown</Name>
            </BioContent>
          </a>
        </TeamCard>
        <TeamCard>
          <a
            href="https://www.linkedin.com/in/peniel-abebe"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}

          >
            <BioContent>
              <Image src={require("../../images/peniel.jpeg")} />

              <Name>Peniel Abebe</Name>
            </BioContent>
          </a>
        </TeamCard>
      </TeamRow>
    </TeamContainer>
  );
}
export default Team;
