import React from 'react';
import { FiPlay, FiAward } from 'react-icons/fi';
import { courses } from '../data/portfolioData';
import './Courses.css';

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
      Concluído
    </span>
  );
}

export default function Courses() {
  return (
    <section className="section" id="courses">
      <div className="container">
        <p className="section-label">Aprendizado</p>
        <h2 className="section-title">
          Cursos & <span>Certificações</span>
        </h2>

        <p className="courses__summary glass">
          <strong>+24 cursos concluídos na Alura</strong>, com estudos contínuos em
          comunidades de tecnologia e em plataformas gratuitas.
        </p>

        <div className="courses__grid">
          {courses.map((c) => (
            <div key={c.title} className="course-card glass">
              <div className="course-card__top">
                <div
                  className={`course-card__icon ${c.status === 'ongoing' ? '' : 'course-card__icon--done'}`}
                  aria-hidden="true"
                >
                  {c.status === 'ongoing' ? <FiPlay size={16} /> : <FiAward size={16} />}
                </div>
                <StatusBadge status={c.status} />
              </div>
              <h3 className="course-card__title">{c.title}</h3>
              <p className="course-card__platform">{c.platform}</p>
              <p className="course-card__desc">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
