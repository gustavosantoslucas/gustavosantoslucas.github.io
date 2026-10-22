import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-label">Sobre mim</p>
        <h2 className="section-title">
          Quem é <span>Gustavo?</span>
        </h2>

        <div className="about__grid">
          <div className="about__bio glass">
            <p className="about__bio-text">{personalInfo.bio}</p>
            <p className="about__bio-text about__bio-text--secondary">
              {personalInfo.bioSecondary}
            </p>
          </div>

          <ul className="about__qualities">
            {personalInfo.about.map((quality, index) => (
              <li key={quality.text ?? index} className="about__quality glass">
                <FiCheckCircle size={18} className="about__quality-icon" aria-hidden="true" />
                <span>{quality.text ?? quality}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}