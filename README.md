# Portfólio de Gustavo

Portfólio pessoal desenvolvido com React para apresentar minha trajetória, conhecimentos, projetos e formas de contato.

## Tecnologias

- React 19 e Create React App
- JavaScript e CSS
- React Icons
- Google Fonts: Inter e Space Mono

## Conteúdo

- Apresentação e informações sobre mim
- Tecnologias e ferramentas
- Projeto em destaque
- Experiência, formação e interesses
- Cursos e certificações
- Links de contato e atalho para WhatsApp

## Executar localmente

Requer Node.js e npm.

```bash
npm ci
npm start
```

O servidor de desenvolvimento inicia em `http://localhost:3000`.

## Testes e build

```bash
npm test -- --watchAll=false --runInBand
npm run build
```

O build de produção é gerado na pasta `build/`.

## GitHub Pages

O endereço planejado para publicação é [gustavosantoslucas.github.io](https://gustavosantoslucas.github.io). O projeto está configurado para esse domínio no campo `homepage` do `package.json`.

Para publicar com GitHub Actions, configure a origem como **GitHub Actions** em **Settings → Pages** e adicione um workflow que instale as dependências, execute o build e publique a pasta `build/`.
