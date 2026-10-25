# Portfólio de Gustavo Santos

Portfólio pessoal desenvolvido em React para apresentar minha trajetória em tecnologia, formação, conhecimentos e projetos. O site é responsivo e está publicado no GitHub Pages.

## Acesse

- **Site:** [gustavosantoslucas.github.io](https://gustavosantoslucas.github.io/)
- **GitHub:** [github.com/gustavosantoslucas](https://github.com/gustavosantoslucas)
- **LinkedIn:** [linkedin.com/in/gustavo-santos-61b98b366](https://www.linkedin.com/in/gustavo-santos-61b98b366/)

## Tecnologias

- React 19 e Create React App
- JavaScript, HTML e CSS
- React Icons
- Google Fonts: Inter e Space Mono
- GitHub Actions e GitHub Pages para publicação

## O que você encontra no site

- Apresentação e informações sobre mim
- Formação, experiência e objetivos profissionais
- Tecnologias e ferramentas que estudo
- Projetos em destaque
- Cursos e certificações
- Links para contato por e-mail, LinkedIn e WhatsApp

## Executar localmente

Você precisa ter [Node.js](https://nodejs.org/) e npm instalados.

1. Clone o repositório:

   ```bash
   git clone https://github.com/gustavosantoslucas/gustavosantoslucas.github.io.git
   cd gustavosantoslucas.github.io
   ```

2. Instale as dependências:

   ```bash
   npm ci
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

O site ficará disponível em `http://localhost:3000`.

## Build de produção

Para gerar os arquivos otimizados para publicação:

```bash
npm run build
```

Os arquivos serão criados na pasta `build/`.

## Publicação

O deploy é feito pelo GitHub Actions quando há um push para a branch `main`. O workflow instala as dependências com `npm ci`, gera o build e publica a pasta `build/` no GitHub Pages.

Para conferir ou alterar a configuração do GitHub Pages, acesse **Settings → Pages** no repositório e selecione **GitHub Actions** como origem da publicação.

## Estrutura do projeto

```text
src/
├── components/       # Seções e componentes da interface
├── data/             # Conteúdo do portfólio
├── App.js            # Composição principal da página
└── index.css         # Estilos globais
public/
└── img/              # Imagens usadas no site
.github/workflows/    # Automação de build e deploy
```

## Contato

- **E-mail:** [gustavosantosdev10@gmail.com](mailto:gustavosantosdev10@gmail.com)
- **LinkedIn:** [Gustavo Santos](https://www.linkedin.com/in/gustavo-santos-61b98b366/)
- **GitHub:** [gustavosantoslucas](https://github.com/gustavosantoslucas)
