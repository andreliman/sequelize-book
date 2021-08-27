const { Router } = require('express');
const UsersController = require('../controllers/UsersController');

const router = Router();

router.get('/', async function (request, response) {
  const users = await UsersController.getAllUsers();
  response.json(users);
});

router.post('/:id/books', async function (request, response) {
  const { id } = request.params;
  const { title, author, price } = request.body;

  const book = await UsersController.addBookToUser(id, { title, author, price });

  return response.json(book);
});

module.exports = router;
