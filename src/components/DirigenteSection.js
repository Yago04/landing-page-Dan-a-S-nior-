import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import bgSection from '../assets/img/imagecontainer/Container3.png';
import imgDirigente from '../assets/img/imagesIdosos/fotoidoso.jpg';
import imgCard1 from '../assets/img/imagesIdosos/card1.png';
import imgCard2 from '../assets/img/imagesIdosos/DancaPE.jpg';
import imgCard3 from '../assets/img/imagesIdosos/card2.png';
import './DirigenteSection.css';
import './animations.css';

function FlipCard({ image, title, desc, btnText, btnLink }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`flip-card${flipped ? ' flipped' : ''} hover-lift`} onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={title} className="flip-card-img" />
        </div>
        <div className="flip-card-back">
          <h4>{title}</h4>
          <p>{desc}</p>
          <a  className="flip-card-btn hover-scale">{btnText}</a>
        </div>
      </div>
    </div>
  );
}

function DirigenteSection() {
  return (
    <section id="dirigente-section" className="dirigente-section" style={{ backgroundImage: `url(${bgSection})` }}>
      <div className="dirigente-logo animate-fade-in">
        <img src={logo} alt="Dança Sênior Brasil" />
      </div>
      <div className="dirigente-content">
        <div className="dirigente-text-block animate-slide-left">
          <h2 className="dirigente-title">Seja um(a) Dirigente</h2>
          <p className="dirigente-desc">
            Para se tornar um Dirigente do Dança Sênior Brasil, basta concluir um de nossos cursos de formação e aplicar as danças em grupos de idosos. Nossa metodologia exclusiva e capacitação contínua garantem que você se torne um líder no movimento da dança sênior.
          </p>
          <a href="https://associacoes.softaliza.com.br/evento/curso-1-primeiros-passos" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <button className="dirigente-btn hover-scale">Conheça nosso curso gratuito!</button>
          </a>
        </div>
        <div className="dirigente-img-block animate-slide-right">
          <img src={imgDirigente} alt="Instrutor e idoso dançando" className="dirigente-img" />
        </div>
      </div>
      <div className="dirigente-cards-area">
        <h3 className="dirigente-cards-title animate-fade-in delay-100">Em breve, teremos mais 3 cursos gratuitos para capacitar nossos dirigentes:</h3>
        <div className="dirigente-cards-row">
          <FlipCard
            image={imgCard1}
            title="Curso Dançando Sentado"
            desc="Curso Dançando Sentado"
            btnText="Em breve"
            btnLink="#"
          />
          <FlipCard
            image={imgCard2}
            title="Curso Dançando em Pé"
            desc=""
            btnText="Em breve"
            btnLink="#"
          />
          <FlipCard
            image={imgCard3}
            title="Curso ISDC França 2023 - Parte 1"
            desc=""
            btnText="Em breve"
            btnLink="#"
          />
        </div>
      </div>
    </section>
  );
}

export default DirigenteSection; 