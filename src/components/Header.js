import React from 'react';
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
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5%;
  align-items: center;
`;


const NavLinks = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem; // or use margin-right for spacing between links if you want support in older browsers
`;


const PersonalLinks = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  justify-content: flex-end;
`;

const LogoContainer = styled.div`
  width: 50px; 
  height: 50px;
  border-radius: 50%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3498db; 
`;

const LogoText = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;


const MotionStyledLink = motion(StyledLink);

const Header = () => {
  return (
    <HeaderContainer>
      <NavLinks>
        <MotionStyledLink to="/" whileHover={linkVariants}>Home</MotionStyledLink>
        <MotionStyledLink to="/aboutme" whileHover={linkVariants}>About</MotionStyledLink>
        <MotionStyledLink to="/projects" whileHover={linkVariants}>Projects</MotionStyledLink>
        <MotionStyledLink to="/ai" whileHover={linkVariants}>AI Innovations</MotionStyledLink>
        {/*<MotionStyledLink to="/contact" whileHover={linkVariants}>Contact</MotionStyledLink>*/}
      </NavLinks>

      <LogoContainer>
        <LogoText>JDB</LogoText>
      </LogoContainer>

      <PersonalLinks>
      <a href="https://www.linkedin.com/in/joseph-blackduke/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon color="secondary" fontSize="large" sx={{ color: blue[500] }}/>
      </a>
      <a href="https://github.com/dukemarvel/" target="_blank" rel="noopener noreferrer">
        <GitHubIcon color="secondary" sx={{ }} fontSize='large' /> 
      </a>
      </PersonalLinks>
    </HeaderContainer>
  );
};

export default Header;
