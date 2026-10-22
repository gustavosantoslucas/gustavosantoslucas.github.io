import React from 'react';
import {
  SiPython, SiNodedotjs, SiFastapi, SiDjango,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiSqlite,
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiTailwindcss,
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiJupyter,
  SiDocker, SiGit, SiGithub, SiGithubactions, SiLinux, SiPostman, SiVscodium,
  SiSwagger, SiOpenai,
} from 'react-icons/si';
import { FaAws, FaBrain, FaChartBar } from 'react-icons/fa6';
import { stacks } from '../data/portfolioData';
import './Stacks.css';

const techIcons = {
  Python: <SiPython />,
  'Node.js': <SiNodedotjs />,
  FastAPI: <SiFastapi />,
  Django: <SiDjango />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Redis: <SiRedis />,
  SQLite: <SiSqlite />,
  React: <SiReact />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss />,
  Tailwind: <SiTailwindcss />,
  TensorFlow: <SiTensorflow />,
  'Scikit-learn': <SiScikitlearn />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  Jupyter: <SiJupyter />,
  Docker: <SiDocker />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  'GitHub Actions': <SiGithubactions />,
  Linux: <SiLinux />,
  'VS Code': <SiVscodium />,
  Postman: <SiPostman />,
  'REST API': <SiSwagger />,
  'Random Forest': <FaBrain />,
  'Análise de Dados': <FaChartBar />,
  'IAs generativas': <SiOpenai />,
  'IA generativas': <SiOpenai />,
  AWS: <FaAws />,
};

const techColors = {
  Python: '#3776AB', 'Node.js': '#5FA04E', FastAPI: '#009688', Django: '#44B78B',
  PostgreSQL: '#4169E1', MySQL: '#4479A1', MongoDB: '#47A248', Redis: '#DC382D', SQLite: '#74A9D8',
  React: '#61DAFB', JavaScript: '#F7DF1E', TypeScript: '#3178C6', HTML5: '#E34F26', CSS3: '#1572B6', Tailwind: '#06B6D4',
  TensorFlow: '#FF6F00', 'Scikit-learn': '#F7931E', Pandas: '#150458', NumPy: '#4DABCF', Jupyter: '#F37626',
  Docker: '#2496ED', Git: '#F05032', 'GitHub Actions': '#2088FF', Linux: '#FCC624', 'VS Code': '#007ACC', Postman: '#FF6C37',
  'REST API': '#A78BFA', 'Random Forest': '#22A06B', 'Análise de Dados': '#4DABCF', 'IA generativas': '#A855F7',
  GitHub: '#F0F6FC', AWS: '#FF9900',
};

export default function Stacks() {
  return (
    <section className="section" id="stacks">
      <div className="container">
        <p className="section-label">Tecnologias</p>
        <h2 className="section-title">
          Minhas <span>Stacks</span>
        </h2>

        <div className="stacks__grid">
          {stacks.map((stack) => (
            <div key={stack.category} className="stacks__card glass">
              <h3 className="stacks__card-title">{stack.category}</h3>
              <ul className="stacks__techs">
                {stack.techs.map((tech) => (
                  <li key={tech} className="stacks__tech">
                    <span className="stacks__tech-icon" style={{ '--tech-color': techColors[tech] || '#A78BFA' }} aria-hidden="true">
                      {techIcons[tech] || <span className="stacks__tech-letter">{tech[0]}</span>}
                    </span>
                    <span className="stacks__tech-name">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
