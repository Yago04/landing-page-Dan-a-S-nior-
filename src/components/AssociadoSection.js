import React from 'react';
import logo from '../assets/img/logoAzul.png';
import bgSection from '../assets/img/imagecontainer/container2.png';
import imgIdosos from '../assets/img/imagesIdosos/grupoidosos.png';
import './AssociadoSection.css';
import './animations.css';

function AssociadoSection() {
  return (
    <section id="associado-section" className="associado-section" style={{ backgroundImage: `url(${bgSection})` }}>
      <div className="associado-logo animate-fade-in">
        <img src={logo} alt="Dança Sênior Brasil" />
      </div>
      <div className="associado-content">
        <div className="associado-img-block animate-slide-left">
          <img src={imgIdosos} alt="Grupo de idosos sorrindo" className="associado-img hover-lift" />
        </div>
        <div className="associado-text-block animate-slide-right">
          <h2 className="associado-title">A Dança Sênior Precisa de Você:<br /><span>Seja um(a) Associado(a)</span></h2>
          <p className="associado-desc">
            Para que a nossa organização continue crescendo, precisamos de mais associados que participem ativamente na assembleia geral e/ou assumam cargos e funções. <br />
            Além disso, ser associado traz vantagens como desconto em cursos, participação em eventos exclusivos e acesso a conteúdo educativo.
          </p>
          <a href="https://associacoes.softaliza.com.br/login/dsb" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <button className="associado-btn hover-scale">Clique aqui para se associar!</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AssociadoSection; 