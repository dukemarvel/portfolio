import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const HeroContainer = styled.div`
  height: 100vh; // This ensures it takes up the full viewport height.
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
  border-radius: 30px;
`;

const HeroButton = motion(StyledButton);


const buttonVariants = {
    whileHover: {
      scale: 1.05,
    }
};


const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Beyond Code: Pioneering Full-Stack Excellence. A Journey Through Layers of Digital Craftsmanship.</HeroTitle>
      <HeroSubtitle>I am BlackDuke Joseph David, a passionate Full Stack Developer.</HeroSubtitle>
      <HeroButton 
        whileHover="whileHover" 
        variants={buttonVariants} 
        as="a" 
        href="/resume.pdf" 
        download
      >
        RESUME
      </HeroButton>

    </HeroContainer>
  );
};

export default HeroSection;
