const { User } = require('../database/models');

exports.getAllUsers = () => User.findAll();