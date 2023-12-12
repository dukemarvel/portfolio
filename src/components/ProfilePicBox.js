import React from 'react';
import styled from 'styled-components';
import profile from "../images/profile.jpeg";

const ProfilePicBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000; /* Black background color */
  border-radius: 15px 50px 30px;
  padding: 20px;
  margin-bottom: 20px; /* Adjust as needed */
  width: 390px;
  height: 400px;
  border-top: 2px solid white;
	border-left: 2px solid white;
	border-bottom: 15px solid white;
	border-right: 15px solid white;

  @media (max-width: 720px){
    width: 280px;
    height: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 720px){
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
