import Route from '@ioc:Adonis/Core/Route'

// Rotas para a tabela Fichas, utilizando o controlador FichasController
Route.group(() => {
  Route.get('/', 'FichasController.index')              // Listar todas as fichas
  Route.post('/', 'FichasController.store')             // Criar uma nova ficha
  Route.get('/:id', 'FichasController.show')            // Visualizar uma ficha específica
  Route.put('/:id', 'FichasController.update')          // Atualizar uma ficha específica
  Route.delete('/:id', 'FichasController.destroy')      // Excluir uma ficha específica
}).prefix('/fichas')

// Rotas para a tabela Users, utilizando o controlador UsersController
Route.group(() => {
  Route.get('/', 'UsersController.index')               // Listar todos os usuários
  Route.post('/', 'UsersController.store')              // Criar um novo usuário
  Route.get('/:id', 'UsersController.show')             // Visualizar um usuário específico
  Route.put('/:id', 'UsersController.update')           // Atualizar um usuário específico
  Route.delete('/:id', 'UsersController.destroy')       // Excluir um usuário específic
  Route.get('/pacientes/:cpf', 'UsersController.buscarPorCpf'); // Rota GET /pacientes/:cpf

}).prefix('/users')
