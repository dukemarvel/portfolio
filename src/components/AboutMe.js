import React from 'react';
import styled from 'styled-components';
import profile from "../images/profile.jpeg";

const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: white;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
    color: white;
`;

const AboutMe = () => {
    return (
        <AboutSection>
            <ProfileImage src={profile} alt="Your Name" />
            
            <Title>Hello, I'm JOSEPH BLACKDUKE</Title>
            
            <Description>
                I'm a seasoned Fullstack Developer with a knack for transforming intricate ideas into real-world solutions. With expertise in React, Python, Django, and Web3, my 5+ year journey in the tech industry has been a testament to my commitment towards integrating state-of-the-art technologies with efficient engineering.
            </Description>
            
            <Description>
                The past couple of years have seen me deeply involved in designing AI-driven products, reflecting my penchant for innovation. While my portfolio is diverse, a common thread across all my projects is a blend of both my technical acumen and soft skills. Whether it's agile problem-solving, fostering team collaboration, or efficient time management, I've been there, done that.
            </Description>
            
            <Description>
                One of my standout qualities is the ability to rapidly adapt to new technologies and demystify complex concepts for stakeholders. My mission? Crafting responsive, user-centric applications that make a difference. At the heart of it all is my passion for continuous learning and driving innovation in the tech landscape.
            </Description>
        </AboutSection>
    );
}

export default AboutMe;
