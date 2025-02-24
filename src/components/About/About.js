import React from 'react';
import educationIcon from '../assets/images/education.png';
import experienceIcon from '../assets/images/experience.png';
import './AboutStyles.scss';

function About() {
  return (
    <section id="about">
      <div className="section__text">
        <p className="section__text__p1">Conheça mais</p>
        <h1 className="title">Sobre mim</h1>
      </div>
      <div className="about-content">
        <div className="about-details">
          <div className="details">
            <img src={experienceIcon} alt="Experiência" className="detail-icon" />
            <h3>Experiência</h3>
            <p>Desenvolvimento Full Stack</p>
          </div>
          <div className="about-description">
          <p>
          Desenvolvedor Full Stack com experiência em JavaScript, React, Node.js e Python. Tenho um forte interesse em criar soluções intuitivas e escaláveis. Já trabalhei em projetos como GameTurf e E-food, onde utilizei Redux, Styled Components e integrações de APIs. Sempre busco desafios que impulsionem minha evolução profissional e me permitam inovar.
          </p>
        </div>
          <div className="details">
            <img src={educationIcon} alt="Educação" className="detail-icon" />
            <h3>Profissionalização</h3>
            <p>Engenharia de Software</p>
            <p>Desenvolvedor Full Stack Java</p>
          </div>
        <div className="about-description">
          <p>
            Com formação em Desenvolvimento Full Stack pela EBAC e graduação em Engenharia de Software, minha jornada na tecnologia é movida pela curiosidade e desejo de criar soluções eficientes. Minhas habilidades incluem React, Redux, TypeScript, APIs REST, Spring Boot e SQL. Além disso, busco aprimoramento contínuo com certificações em Django, IA, Docker e Integrações.
          </p>
        </div>
        </div>
      </div>
      
    </section>
  );
}

export default About;
