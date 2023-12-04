import styled from 'styled-components';

const SkillsContainer = styled.div`
  text-align: center;
  color: white;
  font-family: Roboto;
`;

const SkillsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 1rem;

  @media (max-width: 720px) {
    width: 20px;
    height: 20px;
  }
`;

function Skill({ source, alt, title }) {
  return <SkillIcon src={source} alt={alt} title={title} />
}

function Skills() {
  return (
    <SkillsContainer>
      <h2 style={{ fontWeight: 'bold', fontSize: '40px'}}>My Tech Stack</h2>
      <h1 style={{ marginTop: '20px' }}>Languages</h1>
      <SkillsGrid>
        {/*Gpt separate Languages from Frameworks and dev tools */}
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="The logo icon for Python" title="Python" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for JavaScript" title="JavaScript" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="The logo icon for Java" title="Java" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="The logo icon for Go" title="Go" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="The logo icon for TypeScript" title="TypeScript" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="The logo icon for C++" title="C++" />
        {/* Languages stop here */}
       </SkillsGrid>
        <h1 style={{ marginTop: '20px' }}>Frameworks|| Dev Tools</h1>
       <SkillsGrid>
        {/* Frameworks starts here so gpt help me demacate them */}
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for React" title="React" />
        <Skill source="https://static.djangoproject.com/img/logos/django-logo-negative.svg" alt="The logo icon for Django" title="Django" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" alt="The logo icon for Flask" title="Flask" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" alt="The logo icon for Vue.js" title="Vue.js" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="The logo icon for Angular.js" title="Angular.js" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="The logo icon for Next.js" title="Next.js" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for Node.js" title="Node.js" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="The logo icon for Redux" title="Redux" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" alt="The logo icon for Nest.js" title="Nest.js" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="The logo icon for AWS" title="AWS" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="The logo icon for Tailwind CSS" title="Tailwind CSS" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="The logo icon for Material-UI" title="Material-UI" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" alt="The logo icon for GraphQL" title="GraphQL" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="The logo icon for Express.js" title="Express.js" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="The logo icon for MySQL" title="MySQL" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="The logo icon for MongoDB" title="MongoDB" />
        
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="The logo icon for Jest" title="Jest" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="The logo icon for Sass" title="Sass" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="The logo icon for Firebase" title="Firebase" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="The logo icon for Git" title="Git" />

      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills;
