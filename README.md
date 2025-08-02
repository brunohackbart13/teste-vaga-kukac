# Teste técnico para processo seletivo

Este projeto foi feito como parte de um teste técnico para uma vaga de QA. Utilizei o Cypress para automatizar alguns testes simples no site de um quadro Kanban.

---

## O que foi testado

* A página principal carrega corretamente
* As listas "To Do", "In Progress" e "Done" aparecem na tela
* É possível adicionar uma nova tarefa
* É possível deletar uma tarefa
* É possível criar uma nova lista

---

## Ferramentas utilizadas

* Cypress - Framework
* Visual Studio Code
* Git e GitHub

---

## Como rodar os testes

1.  **Clonar este repositório**:
    ```bash
    git clone [https://github.com/brunohackbart13/teste-vaga-kukac](https://github.com/brunohackbart13/teste-vaga-kukac)
    ```
2.  **Instalar**: Node.js, Cypress
3.  **Abrir o Cypress**:
    ```bash
    npx cypress open
    ```
4.  **Rodar o arquivo de teste**: `cypress/e2e/testeKukac.cy.js`
