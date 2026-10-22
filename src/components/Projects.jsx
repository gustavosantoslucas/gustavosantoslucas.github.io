import React, { useState } from 'react';
import { FiGithub, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import {
  SiPython, SiReact, SiPostgresql, SiDocker,
  SiFastapi, SiScikitlearn, SiJavascript, SiCss,
} from 'react-icons/si';
import { projects } from '../data/portfolioData';
import './Projects.css';

const techIcons = {
  Python: <SiPython />,
  React: <SiReact />,
  PostgreSQL: <SiPostgresql />,
  Docker: <SiDocker />,
  FastAPI: <SiFastapi />,
  'Scikit-learn': <SiScikitlearn />,
  JavaScript: <SiJavascript />,
  CSS3: <SiCss />,
  'React 19': <SiReact />,
  'CSS3 (Glassmorphism)': <SiCss />,
};

const techColors = {
  Python: '#3776AB', React: '#61DAFB', 'React 19': '#61DAFB', PostgreSQL: '#4169E1',
  Docker: '#2496ED', FastAPI: '#009688', 'Scikit-learn': '#F7931E', JavaScript: '#F7DF1E',
  CSS3: '#1572B6', 'CSS3 (Glassmorphism)': '#1572B6',
};

function StatusBadge({ status }) {
  if (status === 'ongoing') {
    return (
      <span className="badge badge-ongoing">
        <span className="badge-dot" />
        Em andamento
      </span>
    );
  }
  return (
    <span className="badge badge-done">
      <span className="badge-dot" />
      Finalizado
    </span>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `project-details-${project.title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <article className="project-card glass">
      <div className="project-card__header">
        <StatusBadge status={project.status} />
        <div className="project-card__techs">
          {project.techs.map((t) => (
            <span key={t} className="project-tech" title={t} style={{ '--tech-color': techColors[t] || '#A78BFA' }} aria-hidden="true">
              {techIcons[t] || <span className="project-tech-letter">{t[0]}</span>}
            </span>
          ))}
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <button
        type="button"
        className="project-card__expand"
        onClick={() => setExpanded(prev => !prev)}
        aria-expanded={expanded}
        aria-controls={detailsId}
      >
        {expanded ? 'Ver menos' : 'Ver detalhes'}
        {expanded ? <FiChevronUp size={14} aria-hidden="true" /> : <FiChevronDown size={14} aria-hidden="true" />}
      </button>

      {expanded && (
        <div className="project-card__details" id={detailsId}>
          <div className="project-card__detail-block">
            <h4>Como foi feito</h4>
            <p>{project.howItWasMade}</p>
          </div>
          <div className="project-card__detail-block">
            <h4>Como utilizar</h4>
            <p>{project.howToUse}</p>
          </div>
        </div>
      )}

      <div className="project-card__footer">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__github"
        >
          <FiGithub size={15} aria-hidden="true" />
          Ver no GitHub
        </a>
        <div className="project-card__tech-names">
          {project.techs.join(' · ')}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">Portfólio</p>
        <h2 className="section-title">
          Projetos em <span>Destaque</span>
        </h2>

        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
