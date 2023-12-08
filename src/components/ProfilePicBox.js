import React from 'react';
import styled from 'styled-components';
import profile from "../images/profile.jpeg";

const ProfilePicBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000; /* Black background color */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.9); /* White box shadow for white edges */
  margin-bottom: 20px; /* Adjust as needed */
  width: 390px;
  height: 400px;

  @media (max-width: 780px){
    width: 280px;
    height: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 780px){
    width: 200px;
    height: 250px;
  }
`;



const ProfilePicBox = () => {
  return (
    <ProfilePicBoxContainer>
      <ProfileImage src={profile} alt="fullstack" />
    </ProfilePicBoxContainer>
  );
};

export default ProfilePicBox;
