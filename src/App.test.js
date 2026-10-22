import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero greeting and name', () => {
  render(<App />);
  expect(screen.getByText(/Olá, eu sou/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1, name: /Gustavo/i })).toBeInTheDocument();
});

test('renders all main navigation sections', () => {
  render(<App />);
  expect(screen.getByText(/Quem é/i)).toBeInTheDocument();
  expect(screen.getByText(/Minhas/i)).toBeInTheDocument();
  expect(screen.getByText(/Projetos em/i)).toBeInTheDocument();
  expect(screen.getByText(/Experiência &/i)).toBeInTheDocument();
  expect(screen.getByText(/Cursos &/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /conversar\?/i })).toBeInTheDocument();
});

test('renders project status badges', () => {
  render(<App />);
  expect(screen.getAllByText(/Em andamento/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Finalizado|Concluído/i).length).toBeGreaterThan(0);
});

test('renders WhatsApp floating button', () => {
  render(<App />);
  expect(screen.getByLabelText(/WhatsApp/i)).toBeInTheDocument();
});

test('contact links point to correct destinations', () => {
  render(<App />);
  const emailLinks = screen.getAllByRole('link', { name: /e-mail|email/i });
  expect(emailLinks.some(a => a.getAttribute('href')?.startsWith('mailto:'))).toBe(true);

  const githubLinks = screen.getAllByRole('link', { name: /github/i });
  expect(githubLinks.some(a => a.getAttribute('href')?.includes('github.com'))).toBe(true);
});
