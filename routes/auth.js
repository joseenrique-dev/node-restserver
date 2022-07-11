const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controller/auth');
const { validateField } = require('../middlewars/field-validation');


const router = Router();

router.post('/login',[
    check('email','Email is not valid').isEmail(),
    check('password','Password is required and greather than 6 characters').not().isEmpty().isLength({min:6}),
    validateField
], login);

module.exports = router;