import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css';
import logo from '../assets/img/logo.png';

function NavigationBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/home" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Dança Sênior Brasil"
            height="40"
            className="d-inline-block align-top me-2"
            style={{ background: 'transparent' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-center" style={{width:'80%'}}>
            <Nav.Link onClick={() => scrollToSection('herosection')} >O que é Dança Senior</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('associado-section')} >Seja um(a) Assosiado(a)</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('dirigente-section')}>Seja um Dirigente</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('courses-section')}>Conheça nossos Cursos</Nav.Link>
            <a
              href="https://wa.me/5561987654321?text=Ol%C3%A1!%20Eu%20vim%20pelo%20site%20Dan%C3%A7a%20S%C3%AAnior%20e%20gostaria%20de%20saber%20como%20funcionam%20os%20cursos%20de%20voc%C3%AAs."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Whatsapp
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar; 