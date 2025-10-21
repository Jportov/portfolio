import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scrollToNextSection } from '../../Utils/Scroll';
import profileImage from '../assets/images/joao2.png';
import paraBaixo from '../assets/images/seta-para-baixo.png';
import '../Buttons/ButtonStyles.scss';
import './ProfileStyles.scss';

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profileImage} alt="João Victor" />
      </div>
      <br />
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
          onClick={() => window.open(require('../assets/images/cvjoao.pdf'), '_blank')}>
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
      <button className="seta-navegacao" onClick={scrollToNextSection}>
    <img src={paraBaixo} alt="Ir para próxima seção" />
  </button>      
    </section>
  );
}

export default Profile;
