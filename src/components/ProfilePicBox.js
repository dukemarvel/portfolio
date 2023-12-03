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
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); /* White box shadow for white edges */
  margin-bottom: 20px; /* Adjust as needed */
  width: 200px;
  height: 300px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 50%;
  margin-top: 20px;
  object-fit: cover;
`;



const ProfilePicBox = () => {
  return (
    <ProfilePicBoxContainer>
      <ProfileImage src={profile} alt="fullstack" />
    </ProfilePicBoxContainer>
  );
};

export default ProfilePicBox;
