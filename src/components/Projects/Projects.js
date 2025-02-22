import React from 'react';
import projectDisney from '../assets/images/dsneyclone.png';
import projectEfood from '../assets/images/efood.jpeg';
import projectGame from '../assets/images/gameturf.jpeg';
import todoList from '../assets/images/list.jpeg';
import '../Buttons/ButtonStyles.scss';
import './ProjectsStyles.scss';

function Projects() {
  return (
    <section id="projects">
      <div className="section__text">
        <p className="section__text__p1">Conheça alguns dos meus</p>
        <h1 className="title">Meus Projetos</h1>
      </div>
      <div className="projects-list">
        <div className="project">
          <img src={projectGame} alt="Game Turf" />
          <h2>Game Turf</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/Game-Turf', '_blank')}>Github</button>
            <button onClick={() => window.open('https://game-turf.vercel.app/', '_blank')}>Site Demo</button>
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
          <img src={todoList} alt="To-Do List" />
          <h2>To-Do List</h2>
          <div className="buttons">
            <button onClick={() => window.open('https://github.com/Jportov/To-do-List', '_blank')}>Github</button>
            <button onClick={() => window.open('https://to-do-list-jet-eight-97.vercel.app/', '_blank')}>Site Demo</button>
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
      </div>
    </section>
  );
}

export default Projects;
