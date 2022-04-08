const { check } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Campo incompleto'),

    check('color')
    .notEmpty()
    .withMessage('Campo incompleto'),

    check('email')
    .notEmpty()
    .withMessage('Campo incompleto').bail()
    .isEmail()
    .withMessage('Ingrese un email valido'),

    check('age')
    .isNumeric()
    .withMessage('Debe ser un número')
]