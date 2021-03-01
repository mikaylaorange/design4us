import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-scroll";
const Ul = styled.ul`
  list-style: none;
  display: none;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    display: flex;

    flex-flow: column nowrap;
    background-color: rgba(255, 255, 255, .9);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    font-family: LatoLight;
    font-weight: 600;
    height: 100vh;
    width: 200px;
    backdrop-filter: blur(10px);
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #003459;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
        <li>About</li>
      </Link>
      <Link to="schedule" spy={true} smooth={true} offset={50} duration={500}>
        <li>Schedule</li>
      </Link>
      <Link to="team" spy={true} smooth={true} offset={50} duration={500}>
        <li>Meet The Team</li>
      </Link>
    </Ul>
  );
};
export default RightNav;
