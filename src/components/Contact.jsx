import React from 'react';
import { FiLinkedin, FiGithub, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact__wrapper glass">
          <div className="contact__content">
            <p className="section-label">Entre em contato</p>
            <h2 className="contact__title">Vamos <span>conversar?</span></h2>
            <p className="contact__desc">
              Estou aberto a novas oportunidades, projetos interessantes e boas 
              conversas sobre tecnologia. Não hesite em entrar em contato!
            </p>

            <div className="contact__links">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <FiLinkedin size={18} />
                <span>LinkedIn</span>
                <FiArrowUpRight size={14} className="contact__link-arrow" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <FiGithub size={18} />
                <span>GitHub</span>
                <FiArrowUpRight size={14} className="contact__link-arrow" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="contact__link contact__link--email"
              >
                <FiMail size={18} />
                <span>Enviar e-mail</span>
                <FiArrowUpRight size={14} className="contact__link-arrow" />
              </a>
            </div>
          </div>

          <div className="contact__decoration">
            <img className="contact__setup" src={`${process.env.PUBLIC_URL}/img/setup.png`} alt="Setup de trabalho do Gustavo" />
          </div>
        </div>
      </div>

      <div className="contact__footer container">
        <p className="contact__footer-text">
          Desenvolvido por Gustavo Santos {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
