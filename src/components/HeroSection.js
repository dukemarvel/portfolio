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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

{/* const StyledButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: linear-gradient(141deg, cyan 0%, rebeccapurple 40%, deeppink 90%);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
  border-radius: 15px;
`; */}

const StyledButton = styled.button`
  color: #fff;
  position: relative;
  padding: 1rem 2rem;
  border: none;
  background: linear-gradient(141deg, cyan 0%, rebeccapurple 40%, deeppink 90%);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 15px;

  :before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: linear-gradient(141deg, cyan 0%, rebeccapurple 40%, deeppink 90%);
    transform: translateY(-3.0%);
  }

  :hover:before {
    transform: translateY(0%);
  }
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
        href={process.env.PUBLIC_URL + "/resume.pdf"}
        download
      >
        RESUME
      </HeroButton>

    </HeroContainer>
  );
};

export default HeroSection;
