import React from 'react';
import './CoursesSection.css';
import './animations.css';
import bgSection from '../assets/img/imagecontainer/container2.png'; // Placeholder background image
import courseImg1 from '../assets/img/imagesIdosos/card1.png'; // Placeholder image 1
import courseImg2 from '../assets/img/imagesIdosos/grupoidosos.png'; // Placeholder image 2
import courseImg3 from '../assets/img/imagesIdosos/fotoidosos.png'; // Placeholder image 3
import courseImg4 from '../assets/img/imagesIdosos/card1.png'; // Placeholder image 4
import courseImg5 from '../assets/img/imagesIdosos/grupoidosos.png'; // Placeholder image 5

function CoursesSection() {
  return (
    <section id="courses-section" className="courses-section" style={{ backgroundImage: `url(${bgSection})` }}>
      <div className="courses-content">
        <h2 className="courses-title animate-fade-in">Conheça nossos cursos</h2>
        <p className="courses-desc animate-fade-in delay-100">
          Quanto mais vasto for o repertório de danças do(a) Dirigente, maior será sua qualificação e diversificação do trabalho com grupos.<br/>
          Conheça nossos cursos de formação exclusivos, que abordam diferentes tipos de movimento e estilos de música.
        </p>
        <div className="courses-cards-row">
          {/* Card 1 */}
          <div className="course-card hover-lift animate-fade-in delay-200">
            <img src={courseImg1} alt="Curso 1" className="course-card-img" />
            <div className="course-card-info">
              <p className="course-card-title">Danças em Bloco: Curso Danças em Bloco </p>
              <a href="https://associacoes.softaliza.com.br/evento/cnds-1-dan%C3%A7as-em-bloco " target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <button className="course-card-btn hover-scale">Se inscrever</button>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="course-card hover-lift animate-fade-in delay-300">
            <img src={courseImg2} alt="Curso 2" className="course-card-img" />
            <div className="course-card-info">
              <p className="course-card-title">Danças Coreografadas no Brasil: Curso Danças Coreografadas</p>
              <a href="https://associacoes.softaliza.com.br/evento/cnds-2-dan%C3%A7as-coreografadas-no-brasil " target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <button className="course-card-btn hover-scale">Se inscrever</button>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="course-card hover-lift animate-fade-in delay-400">
            <img src={courseImg3} alt="Curso 3" className="course-card-img" />
            <div className="course-card-info">
              <p className="course-card-title">Melodias para Nós</p>
              <a href="https://associacoes.softaliza.com.br/evento/cnds-3-dan%C3%A7as-coreografadas-no-brasil " target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <button className="course-card-btn hover-scale">Se inscrever</button>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="course-card hover-lift animate-fade-in delay-400">
            <img src={courseImg4} alt="Curso 4" className="course-card-img" />
            <div className="course-card-info">
              <p className="course-card-title">Danças com Apoio na Cadeira: Curso Danças com Apoio</p>
              <a href="https://associacoes.softaliza.com.br/evento/cnds-4-dan%C3%A7as-com-apoio-na-cadeira  " target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <button className="course-card-btn hover-scale">Se inscrever</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesSection; 