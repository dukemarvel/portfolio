import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import issuetracker from "../images/projectissuetracker1.png";
import CafeKitchen from "../images/CAFEKITCHEN.png";
import FastServe from "../images/fastserve.png";
import Arts from "../images/ARTS.png";
import {motion} from 'framer-motion';


const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 5rem;
  

  @media (max-width: 720px){
    padding: 50px, 40px;
    
  }
  
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.5); /* Black background color */
  border-radius: 15px 50px 30px;
  padding: 30px;
  width: 400px;
  height: 400px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-bottom: 15px solid white;
  border-right: 15px solid white;
  gap: 1rem;

  @media (max-width: 720px){
    border-top: 0.6px solid white;
    border-left: 0.6px solid white;
    border-bottom: 7px solid white;
    border-right: 7px solid white;
    width: 250px;
    height: 300px;
  }
`;

const Up = styled.div`
  height: 65%;
  
`;

const Down = styled.div`
  height: 35%;
`;

const BoxContainerHorizontal = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5); 
  border-radius: 15px 50px 30px;
  padding: 70px;
  height: 250px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  gap: 20px;
  border-bottom: 15px solid white;
  border-right: 15px solid white;

  @media (max-width: 720px){
    flex-direction: column;
    padding: 30px;
    width: 400px;
    height: 500px;
    width: 250px;
    border-top: 0.6px solid white;
    border-left: 0.6px solid white;
    border-bottom: 7px solid white;
    border-right: 7px solid white;
  }
`;

const ImgCont = styled.div`
    flex: 1;
    height: 100%;
    
    background: white;
    border-radius: 3%;
    overflow: hidden;

    @media (max-width: 720px){
      
    }

`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 3%;
  scale: 0.9;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 720px){
    height: 300px;
  }
`;


const Category = styled.p`
  display: flex-start;
  font-size: 35px;
  font-bold: 700;
  color: cyan;

  @media (max-width: 720px){
    font-size: 15px;
    font-bold: 500;
  }
`;

const ProjectName = styled.h2`
  font-size: 35px;
  font-bold: 700;
  color: white;

  @media (max-width: 720px){
    font-size: 25px;
    font-bold: 600;
  }
`;

const ProjectDescription = styled.p`
   font-size:15px; 
   color:white;
   font-weight: bold;

   @media (max-width: 720px){
    font-size: 13px;
    
  }
   
`;

const VisitTextH = styled.a` 
    color: black;  
    text-decoration: none;
    font-weight: bold;
`;

const VisitText = styled.a` 
    color:white;
    font-wight: bold;
`; 

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;


const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width:100%;
  gap: 20px;
  

  @media(max-width: 720px){
    flex-direction: column;
    justify-content: center;
    gap: 30px;    
  }

`;

const GridHorizontal = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  
`




const ProjectVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};


const VisitButton = styled.button`
  color: #fff;
  position: relative;
  padding: 1rem 2rem;
  border: none;
  background: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 15px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: linear-gradient(141deg, cyan 0%, rebeccapurple 40%, deeppink 90%);
    transform: translateY(-3.0%);
  }

  &:hover:before {
    transform: translateY(0%);
  }
`;


const ProjectAninmator = motion(ProjectContainer);


const Projects = () => {

  const projects = [
    {
      image: CafeKitchen,
      category: 'Web2',
      name: 'Kitchen Cafe',
      description: '',
      link: '#', 
    },
    {
      image: issuetracker, 
      category: 'Web2',
      name: 'Issue Tracker',
      description: '',
      link: '#', 
    },
    
  ];

  

  return (
    <ProjectAninmator
      initial="hidden"
      animate="visible"
      variants={ProjectVariants}
    >
      <BoxContainerHorizontal>
        <ImgCont><ProjectImage src={FastServe} alt="fastserve" /></ImgCont>
        <GridHorizontal>
        <Category>Web2</Category>
        <ProjectName>Fast Serve</ProjectName> 
        <ProjectDescription>A restuarant inventory and bookings management web based software made with React for the frontend and Express js for backend</ProjectDescription>
        <ActionContainer>
          <VisitButton><VisitTextH href="#">Visit Project</VisitTextH></VisitButton> 
          <GitHubIcon size={50} />
        </ActionContainer>
        </GridHorizontal>
      </BoxContainerHorizontal>
      <Grid>
      {projects.map((project, index) => (
          <BoxContainer key={index}>
            <Up><ImgCont><ProjectImage src={project.image} alt={project.name} /></ImgCont></Up>
          
            <Down>
            <Category>{project.category}</Category>
            <ProjectName>{project.name}</ProjectName>
  
            <ActionContainer>
            <VisitText href={project.link}>Visit</VisitText> 
            <GitHubIcon size={30}/>
            </ActionContainer>
            </Down>
        </BoxContainer>
      ))}
      </Grid>
      <BoxContainerHorizontal>
        <ImgCont><ProjectImage src={Arts} alt="fullstack" /></ImgCont>
        <GridHorizontal>
        <Category>Web2</Category>
        <ProjectName>A.R.T.S</ProjectName>
        <ProjectDescription>A professional services platform that empowers users by offering a variety of services showcased in a “Mini-market”. It features a comprehensive user authentication system, an interactive UI with animations, and a newsletter subscription for updates.</ProjectDescription>
        <ActionContainer>
          <VisitButton><VisitTextH href="#">Visit Project</VisitTextH></VisitButton>
          <GitHubIcon size={30}/>
        </ActionContainer>
        </GridHorizontal>
      </BoxContainerHorizontal>
    </ProjectAninmator>
  );
};

export default Projects;
