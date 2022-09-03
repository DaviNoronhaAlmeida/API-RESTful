const { getUsers } = require('../services/getUsers.js');
const { createUser } = require('../services/createUser.js');
const { attUser } = require('../services/attUser.js');
const { deleteUser } = require('../services/deleteUser.js');
const { getUser } = require('../services/getUser.js');

exports.get = (req, res) => {
    getUsers(req, res);
};

exports.post = (req, res) => {
    createUser(req, res);
};

exports.put = (req, res) => {
    attUser(req, res);
};

exports.delete = (req, res) => {
    deleteUser(req, res);
};

exports.getOne = (req, res) => {
    getUser(req, res);
};