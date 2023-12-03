import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  width: 70%;
`;

const CenteredHeading = styled.h2`
  text-align: center;
  margin: 20px;
`;

const ExperienceContainer = styled.div`
  color: white;
  background-color: #201E1F; /* warm black */
  padding: 20px; /* Add padding as needed */
`;

const JobContainer = styled.div`
  margin-bottom: 2rem;
`;

const DateText = styled.p`
  font-weight:  400;
`;

const BulletList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 1rem;
  text-align: justify;
`;

const Experience = () => {
  return (
    <CenteredContainer>
      <ExperienceContainer>
        <CenteredHeading>Experience</CenteredHeading>
        <JobContainer>
        Fullstack Developer||AI & Web3 Developer
          <h3>@DotLaunch</h3>
          <DateText>Nov 2022 - Present | Dubai, UAE</DateText>
          <BulletList>
            <li>
              Spearheaded the development of an AI-driven recommendation engine, enhancing e-commerce
              platforms with real-time insights and personalized product suggestions, resulting in a 35% sales
              boost
            </li>
          </BulletList>
        </JobContainer>
        <JobContainer>
            Fullstack Web Develope
          <h3>@UltraMin Inc.</h3>
          <DateText>Dec 2020 - Oct 2022 | Dubai, UAE</DateText>
          <BulletList>
            <li>
            Played an instrumental role in developing consumer-centric features and applications using
            Python and Django. Adopted test-driven development and pair-based programming methodologies to ensure the delivery of high-quality, bug-free features, leading to an enhanced
            user experience and increased customer satisfaction
            </li>
          </BulletList>
        </JobContainer>
      </ExperienceContainer>
    </CenteredContainer>
  );
};

export default Experience;
