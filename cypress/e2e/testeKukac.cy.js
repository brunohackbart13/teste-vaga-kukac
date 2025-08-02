//Estou aproveitando código inicial de demonstração do Cypress
describe('template spec', () => {
  it('carregar a pagina do meu teste', () => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
    })

    it('ver se as listas estão aparecendo normalmente ',() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
    cy.contains('To Do');
    cy.contains('In Progress');
    cy.contains('Done')
    })

    it ('testar se podemos criar uma nova atividade em uma lista',() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
    cy.contains('Adicionar Tarefa').click();
    cy.get('input[type="text"]').type('Criar tela de login');
    cy.contains('Enviar').click();
    cy.contains('Criar tela de login').should('exist');
  })


it('testar se podemos deletar uma tarefa', () => {
  cy.visit('https://kanban-dusky-five.vercel.app/');
  cy.contains('Adicionar Tarefa').click();
  cy.get('input[type="text"]').type('Tarefa para deletar');
  cy.contains('Enviar').click();
  cy.contains('Tarefa para deletar').should('exist');
  cy.contains('Tarefa para deletar')
    .parent()
    .find('.trash')
    .click({ force: true });  //Usando force pois não detectou o ícone, pode ter sido falha minha, mas por hora encontrei essa solução.
  cy.contains('Tarefa para deletar').should('not.exist');
})

it('testar se podemos adicionar uma nova lista', () => {
  cy.visit('https://kanban-dusky-five.vercel.app/');
  cy.contains('Adicionar outra lista').click();
  cy.get('input[type="text"]').last().type('Nova Lista Teste');
  cy.get('input[type="text"]').last().type('{enter}');
  cy.contains('Nova Lista Teste').should('exist');
})
})