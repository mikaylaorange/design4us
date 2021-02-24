import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-scroll";
import Burger from '../atoms/burger';

const Links = styled.li`
  font-size: 1.5em;
  text-align: center;
  color: #003459;
  font-family: LatoLight;
  padding: 20px 30px;
  cursor: pointer;
  display: flex;
  float: right;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Button = styled.li`
  font-size: 1.5em;
  text-align: center;
  color: #00A7E1;
  font-family: LatoLight;
  font-weight: 600;
  padding: 20px 30px;
  cursor: pointer;
  display: flex;
  float: left;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    font-size: 1em;
    padding-top: 1em;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  float: right;
  top: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top: 10px;
  position: fixed;
  background: rgba(255, 255, 255, .7);
  box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
`;


const HeaderUI = () => {
  return (
    <HeaderContainer>
      <Link to="landing" spy={true} smooth={true} offset={50} duration={500}>
      <Button>
            Design4US
        </Button>
        </Link>
        {/* <Links>Meet The Team</Links> */}
        <Link to="schedule" spy={true} smooth={true} offset={50} duration={500}>
        <Links>Schedule</Links>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
      <Links>About</Links>
      </Link>

      <Burger/>
        
        
        
    </HeaderContainer>
  );
};
const Header = () => {
  return <HeaderUI />;
};

export default Header;
