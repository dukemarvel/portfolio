import React from 'react';
import styled from 'styled-components';
import profile from "../images/profile.jpeg";

const ProfilePicBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* Black background color */
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
    border-top: 0.6px solid white;
    border-left: 0.6px solid white;
    border-bottom: 7px solid white;
    border-right: 7px solid white;
    width: 260px;
    height: 280px;
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
