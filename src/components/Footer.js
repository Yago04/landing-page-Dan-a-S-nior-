import React from 'react';
import './Footer.css';
import logo from '../assets/img/logo.png';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Dança Sênior Brasil" className="footer-logo" />
        </div>
        <div className="footer-center">
          <p className="footer-phrase">"Onde a idade dança junto com a alegria de viver"</p>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://www.facebook.com/dancaseniorbrasil" className="social-icon-link" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/dancaseniorbrasil?igsh=MXE5ZWwwNmo1NmM0cA==" className="social-icon-link" aria-label="Instagram" target='blank'><FaInstagram /></a>
            <a href="https://wa.me/5561987654321?text=Ol%C3%A1!%20Eu%20vim%20pelo%20site%20Dan%C3%A7a%20S%C3%AAnior%20e%20gostaria%20de%20saber%20como%20funcionam%20os%20cursos%20de%20voc%C3%AAs." className="social-icon-link" aria-label="WhatsApp" target='blank'><FaWhatsapp /></a>
            <a href="mailto:contato@dancaseniorbrasil.com.br?subject=Dan%C3%A7a+S%C3%AAnior+Site" className="social-icon-link" aria-label="Email" target='blank' ><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 