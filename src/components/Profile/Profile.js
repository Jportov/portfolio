import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import profileImage from '../assets/images/perfil2.jpg';
import '../Buttons/ButtonStyles.scss';
import './ProfileStyles.scss';

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profileImage} alt="João Victor" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Olá, eu sou o</p>
        <h1 className="title">João Victor</h1>
        <p className="section__text__p2">Desenvolvedor Full Stack</p>
        <div className="btn-container">
        <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = './#contact')}
          >
          Contato
          </button>
        <button
          className="btn btn-color-2"
          onClick={() => window.open(require('../assets/images/CVPORTO.pdf'), '_blank')}>
          Currículo
        </button>
        </div>
        <div id="socials-container">
          <div className="icon-content">
            <a href="https://www.linkedin.com/in/vportodev/" aria-label="LinkedIn"  target="_blank"
      rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <div className="tooltip">LinkedIn</div>
            </a>
          </div>

          <div className="icon-content">
            <a href="https://github.com/Jportov" aria-label="GitHub"  target="_blank"
      rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <div className="tooltip">GitHub</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
