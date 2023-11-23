import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { blue } from '@mui/material/colors';

const linkVariants = {
  whileHover: {
    scale: 1.1,
  }
};

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #3498db;
  }

  @media (max-width: 768px) {
  color: black;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  position: relative;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    //gap: 1rem;
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
    width: 50%;
    border-radius: 10px;
    padding: 1rem;
    position: absolute;
    top: 60px; // Adjusted the margin-top to top
    left: 20%; // adjusted for better positioning
    right: 10%; // adjusted for better positioning
    z-index: 9;
    align-items: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    &.personal {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      //gap: 1.0rem;
      margin-top: 1rem;
      padding-left: 0;
    }
  }

  @media (min-width: 769px) {
    justify-content: flex-end;
  }
`;


const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3498db;

  @media (max-width: 768px) {
    top: 60%;
  }
`;

const LogoText = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 12;

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MotionStyledLink = motion(StyledLink);



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Hamburger onClick={() => setMenuOpen(prev => !prev)}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      <LinksContainer menuOpen={menuOpen}>
      <NavLinks menuOpen={menuOpen}>
            <MotionStyledLink to="/" whileHover={linkVariants} onClick={() => setMenuOpen(false)}>Home</MotionStyledLink>
            <MotionStyledLink to="/aboutme" whileHover={linkVariants} onClick={() => setMenuOpen(false)}>About</MotionStyledLink>
            <MotionStyledLink to="/projects" whileHover={linkVariants} onClick={() => setMenuOpen(false)}>Projects</MotionStyledLink>
            <MotionStyledLink to="/ai" whileHover={linkVariants} onClick={() => setMenuOpen(false)}>AI Innovations</MotionStyledLink>
          </NavLinks>

          <NavLinks className="personal" menuOpen={menuOpen}>
            <a href="https://www.linkedin.com/in/joseph-blackduke" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon color="secondary" fontSize="large" sx={{ color: blue[500] }}/>
            </a>
            <a href="https://github.com/dukemarvel/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon color="secondary" fontSize="large"/>
            </a>
          </NavLinks>
      </LinksContainer>

      <LogoContainer>
        <LogoText>JDB</LogoText>
      </LogoContainer>
    </HeaderContainer>
  );
}

export default Header;
