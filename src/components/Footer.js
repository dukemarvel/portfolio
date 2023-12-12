import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 45px;
  color: white; /* Accent color for text */
  border-top: 1px solid white; /* White line at the top */
  

  @media (max-width: 720px){
    flex-direction: column-reverse;
    text-align: center;
    border-top: 1px solid white; /* White line at the top */
  }
`;




const FooterText = styled.p`
  font-size: 16px;
  margin: 10px 0;
  @media screen (max-width: 480px) {
  @media screen (max-width: 480px) {
    margin: 5px 0;
    font-size: 8px;
  }
`;


const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 Joseph. All rights reserved.</FooterText>
      <div>
        <ContactLink href="mailto:your.josephdavidblackduke@gmail.com">Get in Touch</ContactLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;
