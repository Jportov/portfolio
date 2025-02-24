import React from 'react';
import checkmarkIcon from '../assets/images/checkmark.png';
import './ExperienceStyles.scss';

function Experience() {
  return (
    <section id="experience">
      <div className="section__text">
        <p className="section__text__p1">Explore minha</p>
        <h1 className="title">Minha Experiência</h1>
      </div>

      <div className="skills-container">
        <div className="skills-category">
          <h2>Front-End</h2>
          <div className="skills-list">
            <div className="skill">
              <img src={checkmarkIcon} alt="HTML Icon" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="CSS Icon" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="JavaScript Icon" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="TypeScript Icon" />
              <p>TypeScript</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="React Icon" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Vue.js Icon" />
              <p>Vue.js</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Next.js Icon" />
              <p>Next.js</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Styled Icon" />
              <p>Styled-Components</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Tailwind CSS Icon" />
              <p>Tailwind CSS</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Sass Icon" />
              <p>Sass</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Less Icon" />
              <p>Less</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Bootstrap Icon" />
              <p>Bootstrap</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="jQuery Icon" />
              <p>jQuery</p>
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h2>Back-End</h2>
          <div className="skills-list">
            <div className="skill">
              <img src={checkmarkIcon} alt="Java Icon" />
              <p>Java</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Python Icon" />
              <p>Python</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Spring Boot Icon" />
              <p>Spring Boot</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Node.js Icon" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="API REST Icon" />
              <p>API REST</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Microsserviços Icon" />
              <p>Microsserviços</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="SQL Icon" />
              <p>SQL</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="PostGreSQL Icon" />
              <p>PostGreSQL</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="MongoDB Icon" />
              <p>MongoDB</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Maven Icon" />
              <p>Maven</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Gradle Icon" />
              <p>Gradle</p>
            </div>
            <div className="skill">
              <img src={checkmarkIcon} alt="Docker Icon" />
              <p>Docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
