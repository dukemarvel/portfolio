import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-ambiance';


const HeroContainer = styled.div`
  height: 100vh; 
  display: flex;
  
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;
const PartOne = styled.div`
  diplay: flex;
  width: 50%;
  padding: 20px;

  @media (max-width: 720px){
    width: 100%;
  }
  
`;
const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  
  @media  (max-width: 720px) {
    font-size: 2rem;
    margin-top: 0.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  .highlight {
    color: cyan; 
  }

  @media  (max-width: 720px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;



const StyledButton = styled.button`
  color: #fff;
  position: relative;
  padding: 1rem 2rem;
  border: none;
  background: linear-gradient(141deg, cyan 0%, rebeccapurple 40%, deeppink 90%);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 15px;
  margin-top: 1rem;

  :before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: linear-gradient(141deg, cyan 0%, rebeccapurple 40%, deeppink 90%);
    transform: translateY(-3.0%);
  }

  :hover:before {
    transform: translateY(0%);
  }
`;

const CodeSnippet = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  
  
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 720px){
    display: none;
  }
`;

const AceEditorWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 1rem;
`;

const codeSnippetVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const MotionDiv = motion.div;

const HeroButton = motion(StyledButton);


const buttonVariants = {
    whileHover: {
      scale: 1.5,
    }
};


const HeroSection = () => {

  

  const bubbleSortFunction = `
  def bubble_sort(arr):
    """
    Sorts an array using the Bubble Sort algorithm.

    Args:
        arr (list): The input list to be sorted.

    Returns:
        list: The sorted list.
    """
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

  # Example usage
  my_list = [64, 34, 25, 12, 22, 11, 90]
  sorted_list = bubble_sort(my_list)
  print("Sorted list:", sorted_list)
`;


const [code, setCode] = useState(bubbleSortFunction);

  
  return (
    <HeroContainer>
      <PartOne>
        <HeroTitle>Beyond Code: Mastering FullStack Artistry</HeroTitle>
        <HeroSubtitle>I am <span className="highlight">BlackDuke Joseph David</span>, a passionate {'Full\u00A0Stack Developer'}.</HeroSubtitle>
        <HeroButton 
          whileHover="whileHover" 
          variants={buttonVariants} 
          as="a" 
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          download
        >
          RESUME
        </HeroButton>
      </PartOne>

      <CodeSnippet>
        <AceEditorWrapper>
            <MotionDiv
              initial="hidden"
              animate="visible"
              variants={codeSnippetVariants}
            >
               <AceEditor
                mode="python"
                theme="ambiance"
                name="code-editor"
                value={code}
                readOnly
                fontSize={13}
                showPrintMargin={false}
                showGutter={false}
                highlightActiveLine={true}
                setOptions={{
                  useWorker: false,
                  showLineNumbers: true,
                  tabSize: 1,
                }}
                style={{ width: '100%', height: '400px' }}
              />
            </MotionDiv>
        </AceEditorWrapper>
      
      </CodeSnippet>

    </HeroContainer>
  );
};

export default HeroSection;
