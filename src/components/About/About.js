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
          <div className="details">
            <img src={educationIcon} alt="Educação" className="detail-icon" />
            <h3>Profissionalização</h3>
            <p>Desenvolvedor Full Stack Java</p>
          </div>
        </div>
        <div className="about-description">
          <p>
            Oi, eu sou o João Victor Porto, um desenvolvedor Full Stack que adora transformar ideias em realidade através do código.
            Tenho uma boa base em tecnologias como HTML, CSS, JavaScript e React para o front-end, além de trabalhar com Java e Spring Boot no back-end.
            Meu foco é criar aplicações que não só sejam atraentes, mas que também funcionem de maneira fluida e intuitiva.
            <br /><br />
            Sempre busco soluções práticas e prezo pelos detalhes, tentando superar as expectativas em cada projeto.
            Para mim, o sucesso no desenvolvimento Full Stack vem da combinação de criatividade, inovação e uma comunicação clara, tanto com a equipe quanto com os clientes. Vamos construir algo incrível juntos!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
