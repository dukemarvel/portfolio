import React from 'react';
import styled from 'styled-components';
import ProfilePicBox from './ProfilePicBox';
import Skills from './Skills';
import Experience from './Experience';
import Certification from './Certification';





const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 5%;
  color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  gap: 10px;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  @media (max-width: 780px) {
    order: 2; /* Move this content to the middle for small screens */
  }
`;

const MiddleContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 80px;

  @media (max-width: 780px) {
    order: 1; /* Move this content to the top for small screens */
    margin-bottom: 20px; /* Add some space between the profile box and other content */
    padding-left: 0px;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  

  @media (max-width: 780px) {
    order: 3; /* Move this content to the bottom for small screens */
  }
`;


const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
  color: white;
  

  @media (max-width: 780px) {
    font-size: 8px;
  }
`;

const ProjectCounts = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-around;
    gap: 45px;
  }

  
`;

const CountDiv = styled.div`
  margin-bottom: 50px;
  line-height: 1;
  text-align: right;

  @media(max-width: 780px){
    text-align: center;
    align-items: center;
  }
  
`;

const Count = styled.div`
  font-size: 80px;
  font-weight: bold;

  @media(max-width: 780px){
    font-size: 45px;
  }

  
`;

const Text = styled.div`
  font-size: 24px;
  color: hsla(0,0%,96%,.75);

  @media(max-width: 780px){
    text-align: justify;
    font-size: 12px;
    
  }

`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000; /* Black background color */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); /* White box shadow for white edges */
  margin-bottom: 20px; /* Adjust as needed */
  width: 300px;
  height: 300px;
`;

const AboutMe = () => {
  return (
    <AboutSection>
      <ContentContainer>
        <LeftContent>
          <Description>
          Hello, I'm Joseph, I'm a seasoned Fullstack Developer with a knack for transforming intricate ideas into real-world solutions. With expertise in React, Python, Django, and Web3, my 5+ year journey in the tech industry has been a testament to my commitment towards integrating state-of-the-art technologies with efficient engineering.
          </Description>

          <Description>
          The past couple of years have seen me deeply involved in designing AI-driven products, reflecting my penchant for innovation. While my portfolio is diverse, a common thread across all my projects is a blend of both my technical acumen and soft skills. Whether it's agile problem-solving, fostering team collaboration, or efficient time management, I've been there, done that.
          </Description>

          <Description>
          One of my standout qualities is the ability to rapidly adapt to new technologies and demystify complex concepts for stakeholders. My mission? Crafting responsive, user-centric applications that make a difference. At the heart of it all is my passion for continuous learning and driving innovation in the tech landscape.
          </Description>
        </LeftContent>

        <MiddleContent>
          <ProfilePicBox />
        </MiddleContent>

        <RightContent>
          <ProjectCounts>
            <CountDiv>
              <Count>50+</Count>
              <Text>Satisfied Clients</Text>
            </CountDiv>
            <CountDiv>
              <Count>40+</Count>
              <Text>Projects Completed</Text>
            </CountDiv>
            <CountDiv>
              <Count>4+</Count>
              <Text>Years Of Experience</Text>
            </CountDiv>
          </ProjectCounts>
        </RightContent>
      </ContentContainer>
      <Skills/>
      <Experience/>
      <Certification/>
    </AboutSection>
  );
};

export default AboutMe;
