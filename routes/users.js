const { Router } = require('express');
const UsersController = require('../controllers/UsersController');

const router = Router();

router.get('/', async function (request, response) {
  const users = await UsersController.getAllUsers();
  response.json(users);
});

module.exports = router;
