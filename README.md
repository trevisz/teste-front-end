# Teste Econverse - Desenvolvedor Front-End

Aplicação web desenvolvida para o teste técnico de Desenvolvedor Front-End na Econverse. O projeto consiste em uma página de e-commerce responsiva desenvolvida em React, TypeScript e SASS, consumindo a API oficial de produtos e disponibilizando um modal detalhado ao interagir com a vitrine.

## Tecnologias Utilizadas

- **React**
- **TypeScript**
- **SASS / SCSS**
- **Axios**

## Funcionalidades

- **Vitrine Dinâmica:** Consumo do arquivo JSON com a lista de produtos fornecida pela Econverse.
- **Modal Interativo:** Exibição dos detalhes do produto (foto, título, preço, descrição curta e controle de quantidade) ao clicar sobre o card.
- **Layout Fiel ao Figma:** Estruturação visual completa com Header, Banner Promocional, Categorias, Vitrine e Footer.

## Instruções para Compilar e Rodar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina.
- [Git](https://git-scm.com/) configurado.

### Passos para Execução

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/trevisz/teste-front-end.git
   ```

2. **Acessar a pasta do projeto:**
   ```bash
   cd teste-front-end
   ```

3. **Instalar as dependências:**
   ```bash
   npm install
   ```

4. **Executar a aplicação em modo de desenvolvimento:**
   ```bash
   npm start
   ```

5. A aplicação estará disponível no seu navegador no endereço:
   ```text
   http://localhost:3000
   ```

##  Build para Produção

Para gerar a compilação otimizada para produção:
```bash
npm run build
```