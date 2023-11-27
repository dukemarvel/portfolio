import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ; /* Dark background color */
  padding: 20px 10px;
  color: white; /* Accent color for text */
  text-align: center;
  border-top: 1px solid white; /* White line at the top */
`;

const FooterTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 12px
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  margin: 10px 0;
  @media (max-width: 768px) {
    margin: 5px 0;
    font-size: 8px
  }
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Get in Touch</FooterTitle>
      <FooterText>
        If you have a project in mind or just want to chat, feel free to reach out:
      </FooterText>
      <ContactLink href="mailto:your.josephdavidblackduke@gmail.com">josephdavidblackduke@gmail.com</ContactLink>
      {/* Copyright and Privacy Links */}
      <FooterText>&copy; 2023 Joseph. All rights reserved.</FooterText>
      {/* <FooterText>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a>
      </FooterText> */}
    </FooterContainer>
  );
};

export default Footer;
