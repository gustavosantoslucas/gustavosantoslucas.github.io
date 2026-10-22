import React from 'react';
import { FiBriefcase, FiBook, FiTarget } from 'react-icons/fi';
import { experiences, education, interests } from '../data/portfolioData';
import './Experience.css';

function TimelineItem({ item }) {
  const isExp = item.type === 'experience';
  return (
    <div className="timeline-item glass">
      <div className="timeline-item__icon" aria-hidden="true">
        {isExp ? <FiBriefcase size={16} /> : <FiBook size={16} />}
      </div>
      <div className="timeline-item__content">
        <div className="timeline-item__meta">
          <h3 className="timeline-item__title">{item.title}</h3>
          <span className="timeline-item__period">{item.period}</span>
        </div>
        <p className="timeline-item__company">{item.company}</p>
        <p className="timeline-item__desc">{item.description}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const timelineItems = [...experiences, ...education];

  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">Trajetória</p>
        <h2 className="section-title">
          Experiência & <span>Formação</span>
        </h2>

        <div className="experience__layout">
          <div className="experience__timeline">
            {timelineItems.map((item) => (
              <TimelineItem key={`${item.title}-${item.period}`} item={item} />
            ))}
          </div>

          <div className="experience__interests glass">
            <div className="experience__interests-header">
              <FiTarget size={18} className="experience__interests-icon" aria-hidden="true" />
              <h3 className="experience__interests-title">{interests.title}</h3>
            </div>
            <p className="experience__interests-text">{interests.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
