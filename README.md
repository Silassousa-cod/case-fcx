# Projeto de Automação de Testes - Advantage Online Shopping - Case Fcx

Este projeto contém testes automatizados de ponta a ponta (E2E) para o site [Advantage Online Shopping](https://www.advantageonlineshopping.com/), desenvolvidos com o framework Cypress.

## 🚀 Tecnologias Utilizadas

*   **[Cypress](https://www.cypress.io/)**: Um framework de testes de front-end de última geração, construído para a web moderna. Ele oferece uma experiência de teste rápida, fácil e confiável.
*   **[Faker.js](https://fakerjs.dev/)**: Uma biblioteca para gerar grandes quantidades de dados falsos (massa de dados) para uso em testes e desenvolvimento.
*   **[Node.js](https://nodejs.org/)**: O ambiente de execução JavaScript necessário para instalar as dependências e rodar o Cypress.

---

## 📂 Arquitetura do Projeto

A estrutura de pastas foi organizada para promover a reutilização de código e a manutenibilidade:

```
case-fcx/
├── .github/
│   └── workflows/
│       └── main.yml      # Workflow de CI/CD com GitHub Actions
├── cypress/
│   ├── e2e/              # Contém os arquivos de teste (specs)
│   │   ├── finishOrder.cy.js
│   │   └── registration.cy.js
│   ├── support/          # Arquivos de suporte e configuração
│   │   ├── commands.js   # Comandos customizados (ex: cy.login)
│   │   ├── elements.js   # Centralização dos seletores de elementos (locators)
│   │   └── constants.js  # Constantes usadas nos testes
│   └── ...
├── .gitignore            # Arquivos e pastas ignorados pelo Git
├── cypress.config.js     # Arquivo principal de configuração do Cypress
└── package.json          # Dependências e scripts do projeto
```

---

## ⚙️ Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de testes em sua máquina local.

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio>
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd case-fcx
    ```

3.  **Instale as dependências:**
    Certifique-se de ter o Node.js instalado e execute o comando abaixo para baixar o Cypress e outras dependências.
    ```bash
    npm install
    ```

---

## ▶️ Executando os Testes

Você pode executar os testes de duas maneiras: em modo interativo (com interface gráfica) ou em modo headless (via linha de comando).

### Modo Interativo (Recomendado para desenvolvimento)

Este modo abre o Cypress Test Runner, permitindo que você visualize a execução dos testes em tempo real, depure e interaja com os elementos.

```bash
npx cypress open
```

### Modo Headless (Ideal para CI/CD)

Este modo executa todos os testes em um navegador em segundo plano, sem interface gráfica. É a forma padrão de execução em ambientes de integração contínua.

```bash
npx cypress run
```

Para rodar em um navegador específico (ex: Chrome):

```bash
npx cypress run --browser chrome
```

---

## 🤖 Integração Contínua (CI/CD)

Este projeto está configurado com **GitHub Actions**. O fluxo de trabalho definido em `.github/workflows/main.yml` irá disparar a execução de todos os testes automaticamente a cada `push` ou `pull request` para as branches `main` e `master`.
