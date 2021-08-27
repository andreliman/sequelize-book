const { User } = require('../database/models');

exports.getAllUsers = () => User.findAll({ include: 'books' });

exports.addBookToUser = async (id, book) => {
  const user = await User.findByPk(id);

  const returnedBook = user.createBook(book);

  return returnedBook;
}