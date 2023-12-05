import React from 'react';
import styled from 'styled-components';
import '../styles/Experience.css';

const CustomHeading1 = styled.h1`
  text-align: center;
  margin: 20px;
  font-weight: bold;
  font-size: 40px;
`;

const CertificationTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;

  &:hover {
    text-decoration: none; 
  }
  
  @media (max-width: 720px) {
    font-size: 14px;
  }
`;

const IssuingOrganization = styled.h3`
  font-size: 16px;
  color: cyan;

  @media (max-width: 720px) {
    font-size: 12px;
  }
`;

const Date = styled.span`
  font-weight: 500;
  color: hsla(0, 0%, 96%, 0.75);

  @media (max-width: 720px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  @media (max-width: 720px) {
    font-size: 12px;
  }
`;

const Certification = () => {
  return (
    <div className="container">
      <CustomHeading1>Certifications</CustomHeading1>
      <ul>
        <li>
            <a href="https://www.hackerrank.com/certificates/971a07e4405c" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <CertificationTitle>React</CertificationTitle>
            </a>
            <IssuingOrganization>HackerRank</IssuingOrganization>
            <Date>2022-2023</Date>
            <Description>It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.</Description>
        </li>
        <li>
            <a href="https://www.udemy.com/certificate/UC-ac1e7874-0cd7-4336-ae37-67feaf1222b3/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <CertificationTitle>Python,Flask Framework And Django Bootcamp</CertificationTitle>
            </a>
            <IssuingOrganization>Udemy</IssuingOrganization>
            <Date>2021-2022</Date>
            <Description>Python programming from beginner to advanced levels, covering Flask and Django frameworks through practical projects.</Description>
        </li>
        <li>
        <a href="https://www.hackerrank.com/certificates/1fddf54c5ebb" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <CertificationTitle>SQL Advanced</CertificationTitle>
        </a>
          <IssuingOrganization>HackerRank</IssuingOrganization>
          <Date>2021-2022</Date>
          <Description>Covers topics like query optimization, data modeling, Indexing, window functions, and pivots in SQL.</Description>
        </li>
        <li>
        <a href="https://www.hackerrank.com/certificates/65e0b4df7202" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <CertificationTitle>Rest API (Intermediate) Certificate</CertificationTitle>
        </a>
          <IssuingOrganization>HackerRank</IssuingOrganization>
          <Date>2021-2022</Date>
          <Description>Covers topics like getting data from an API and process using parameters or paging.</Description>
        </li>

        <li>
        <a href="https://www.hackerrank.com/certificates/c72329cb32e5" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <CertificationTitle>Problem Solving (Basic) Certificate</CertificationTitle>
        </a>
          <IssuingOrganization>HackerRank</IssuingOrganization>
          <Date>2021-2022</Date>
          <Description>It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).</Description>
        </li>

      </ul>
    </div>
  );
};

export default Certification;
