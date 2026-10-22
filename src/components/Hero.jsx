import React from 'react';
import { FiLinkedin, FiGithub, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="hero">
      <div className="container hero__inner">
        {/* Conteúdo principal */}
        <div className="hero__content">
          <p className="section-label hero__greeting">Olá, eu sou</p>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <p className="hero__role">{personalInfo.role}</p>
          <p className="hero__tagline">{personalInfo.tagline}</p>

          <div className="hero__actions">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--primary"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--ghost"
            >
              <FiGithub size={16} />
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hero__btn hero__btn--ghost"
            >
              <FiMail size={16} />
              E-mail
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="hero__photo-wrap">
          <div className="hero__photo glass">
            <img src={`${process.env.PUBLIC_URL}/img/gustavo.png`} alt={`Foto de ${personalInfo.name}`} />
          </div>
          <div className="hero__photo-ring" />
        </div>
      </div>

      {/* Atalho de rolagem */}
      <button className="hero__scroll" onClick={scrollDown} aria-label="Rolar para baixo">
        <FiArrowDown size={18} />
      </button>
    </section>
  );
}
