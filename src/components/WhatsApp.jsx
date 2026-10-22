import React, { useState } from 'react';
import { FiX, FiMessageCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './WhatsApp.css';

export default function WhatsApp() {
  const [open, setOpen] = useState(false);

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Olá, Gustavo! Vi seu portfólio e gostaria de conversar.');
    window.open(`https://wa.me/${personalInfo.whatsapp}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="wa-wrap">
      {open && (
        <div className="wa-card">
          <div className="wa-card__header">
            <div className="wa-card__info">
              <p className="wa-card__name">Gustavo</p>
              <p className="wa-card__status">Online</p>
            </div>
            <button
              className="wa-card__close"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
            >
              <FiX size={16} />
            </button>
          </div>
          <div className="wa-card__body">
            <div className="wa-card__bubble">
               Seja bem-vindo ao meu portfólio. Fico feliz com sua visita!
            </div>
          </div>
          <div className="wa-card__footer">
            <p className="wa-card__question">Deseja conversar?</p>
            <button className="wa-card__btn" onClick={openWhatsApp}>
              Abrir WhatsApp
            </button>
          </div>
        </div>
      )}

      <button
        className={`wa-btn ${open ? 'wa-btn--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp"
      >
        {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
        {!open && <span className="wa-btn__ping" />}
      </button>
    </div>
  );
}
