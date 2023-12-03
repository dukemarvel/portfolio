import React from 'react';
import styled from 'styled-components';

const SkillsGraphContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CentralNode = styled.div`
  width: 120px;
  height: 120px;
  background-color: #61dafb; /* Central node color */
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const SkillNode = styled.div`
  width: 80px;
  height: 80px;
  background-color: #61dafb; /* Node color */
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  position: relative;
  z-index: 1;
`;

const ConnectionLine = styled.div`
  position: absolute;
  width: 2px;
  background-color: #61dafb; /* Connection color */
  z-index: 0;
`;

const SkillName = styled.p`
  color: white;
  font-size: 12px;
  margin-top: 5px;
`;

const SkillsGraph = () => {
  return (
    <SkillsGraphContainer>
      <CentralNode>
        <SkillName>Root</SkillName>
      </CentralNode>
      <SkillNode>
        <ConnectionLine style={{ height: '100px', top: '50px', left: '50%' }} />
        <SkillName>React</SkillName>
      </SkillNode>
      <SkillNode>
        <ConnectionLine style={{ height: '120px', top: '60px', left: '50%' }} />
        <SkillName>JavaScript</SkillName>
      </SkillNode>
      <SkillNode>
        <ConnectionLine style={{ height: '120px', top: '60px', left: '50%' }} />
        <SkillName>Python</SkillName>
      </SkillNode>
      <SkillNode>
        <ConnectionLine style={{ height: '120px', top: '60px', left: '50%' }} />
        <SkillName>Django</SkillName>
      </SkillNode>
      <SkillNode>
        <ConnectionLine style={{ height: '120px', top: '60px', left: '50%' }} />
        <SkillName>Flask</SkillName>
      </SkillNode>
    </SkillsGraphContainer>
  );
};

export default SkillsGraph;
