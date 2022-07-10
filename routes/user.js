const {Router} = require('express');
const { userGet, userPut, userDelete, userPost } = require('../controller/user');
const {check} = require('express-validator');
const { validateField } = require('../middlewars/field-validation');
const { isAValidRole, emailExist } = require('../helpers/db-validators');



const router = Router();

    router.get('/', userGet);

    router.put('/:id', userPut);
    router.post('/',[
        check('email','Email is not valid').isEmail(),
        check('email').custom(emailExist),
        check('name','Name is required').not().isEmpty(),
        check('password','Password is required and greather than 6 characters').not().isEmpty().isLength({min:6}),
        // check('role','Role is required').isIn(['USER_ROLE', 'ADMIN_ROLE']),
        check('role').custom(isAValidRole),
        validateField
    ], userPost);
    router.delete('/', userDelete);

    module.exports = router ;