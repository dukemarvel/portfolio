import React from 'react';
import styled from 'styled-components';
import '../styles/Experience.css';

const CustomHeading1 = styled.h1`
  text-align: center;
  margin: 20px;
  font-weight: bold;
  font-size: 40px;
`;

const Role = styled.h2`
  
  font-size: 24px;
  font-weight: bold;
  color: white;

  @media (max-width: 720px){
    font-size: 10px;
  }
  
`;

const Company = styled.h3`

  font-size: 16px;
  color: cyan;

  @media (max-width: 720px){
    font-size: 8px;
  }
`;

const Date = styled.span`
  font-weight: 500;
  color: hsla(0,0%,96%,.75);

  @media (max-width: 720px){
    font-size: 8px;
  }
  
`;

const Doings = styled.p`

  @media (max-width: 720px){
    font-size: 8px;
  }
`;

const Experience = () => {
  return (
    <div className="container">
      <CustomHeading1>Experience</CustomHeading1>
      <ul>
      <li>
          <Role>Full Stack Development Lead || Python Engineer (Part Time)</Role>
          <Company>@Arts2Service (Startup)</Company>
          <Date>Sept 2023 - Present</Date>
          <Doings>
            As the Full Stack Lead, I orchestrate the entire development process, focusing mainly on Python
            backend development. I also guide frontend implementations and personally convert intern’s
            code to React.
          </Doings>
        </li>
        <li>
          <Role>Fullstack Developer || AI & Web3 Developer</Role>
          <Company>@DotLaunch</Company>
          <Date>Nov 2022 - Present | Dubai, UAE</Date>
          <Doings>
            Spearheaded the development of an AI-driven recommendation engine, enhancing e-commerce
            platforms with real-time insights and personalized product suggestions, resulting in a 35% sales
            boost
          </Doings>
        </li>
        <li>
          <Role>Fullstack Web Developer</Role>
          <Company>@UltraMind Inc.</Company>
          <Date>Dec 2020 - Oct 2022 | Dubai, UAE</Date>
          <Doings>
            Played an instrumental role in developing consumer-centric features and applications using
            Python and Django. Adopted test-driven development and pair-based programming methodologies to ensure
            the delivery of high-quality, bug-free features, leading to an enhanced user experience and increased
            customer satisfaction
          </Doings>
        </li>
        <li>
          <Role>Frontend Engineer</Role>
          <Company>@Artburst</Company>
          <Date>Dec 2018 - Nov 2020</Date>
          <Doings>
            Played a key role in the frontend development of a large-scale e-commerce website using
            React, integrated with Django for backend operations. This contributed to a 20% sales
            increase in the first month of launch.
          </Doings>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
