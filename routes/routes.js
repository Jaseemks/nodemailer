const { sendMail } = require('../controller/mailSend');

const routes = require('express').Router();

routes.post('/sendMail', sendMail);

module.exports = routes;
