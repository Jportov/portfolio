import React from 'react';
import projectCoringa from '../assets/images/coringa.png';
import projectDisney from '../assets/images/dsneyclone.png';
import projectEfood from '../assets/images/Efood2.jpg';
import projectEli from '../assets/images/Elidecor.jpg';
import projectIMC from '../assets/images/IMC.jpeg';
import projectListaV from '../assets/images/ListVue.jpeg';
import projectPortoDay from '../assets/images/portoday.png';
import projectGrill from '../assets/images/portogrill.jpeg';
import projectTech from '../assets/images/portotech.png';
import projectSorteador from '../assets/images/sorteador.png';
import projectWeather from '../assets/images/weatherapp.png';
import '../Buttons/ButtonStyles.scss';
import './ProjectsStyles.scss';

function Projects() {
  return (
    <section id="projects">
      <div className="section__text">
        <p className="section__text__p1">Conheça alguns dos meus</p>
        <h1 className="title">Projetos</h1>
      </div>
      <div className="projects-list">
        <div className="project">
          <img src={projectTech} alt="Porto Tech" />
          <h2>Porto Tech</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/portotech2.0', '_blank')}>Github</button>
            <button onClick={() => window.open('https://portotech2-0.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectDisney} alt="Clone Disney+" />
          <h2>Clone Disney+</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/clonedisneyhp', '_blank')}>Github</button>
            <button onClick={() => window.open('https://clone-disneyplus-ten-lemon.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectWeather} alt="Weather App" />
          <h2>Weather App</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/victordevporto/wetherapp1.2', '_blank')}>Github</button>
            <button onClick={() => window.open('https://wetherapp1-2.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectCoringa} alt="Landing Page Estreia" />
          <h2>Filme Estreia</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/landingpage-joker', '_blank')}>Github</button>
            <button onClick={() => window.open('https://landingpage-joker.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectSorteador} alt="Sorteador" />
          <h2>Sorteador Grunt</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/sorteador_grunt', '_blank')}>Github</button>
            <button onClick={() => window.open('https://sorteador-grunt-jv.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectPortoDay} alt="Porto's Day" />
          <h2>Evento</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/joaoaniversario', '_blank')}>Github</button>
            <button onClick={() => window.open('https://joaoaniversario.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectGrill} alt="PortoGrill" />
          <h2>PortoGrill</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/portogrill', '_blank')}>Github</button>
            <button onClick={() => window.open('https://portogrill.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectIMC} alt="Calculadora IMC" />
          <h2>Calculadora IMC</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/calculadora_imc', '_blank')}>Github</button>
            <button onClick={() => window.open('https://calculadora-imc-jvp.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectListaV} alt="To Do list" />
          <h2>To Do List</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/todo-list', '_blank')}>Github</button>
            <button onClick={() => window.open('https://todo-list-steel-beta.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectEfood} alt="Efood" />
          <h2>E-food</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/efood', '_blank')}>Github</button>
            <button onClick={() => window.open('https://efood-fet2.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectEli} alt="EliDecor" />
          <h2>EliDecor</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/elidecor1', '_blank')}>Github</button>
            <button onClick={() => window.open('https://elidecor.vercel.app', '_blank')}>Site Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
