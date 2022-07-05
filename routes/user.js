const {Router} = require('express');
const { userGet, userPut, userDelete, userPost } = require('../controller/user');
const {check} = require('express-validator');
const { validateField } = require('../middlewars/field-validation');
const Role = require('../models/role');


const router = Router();

    router.get('/', userGet);

    router.put('/:id', userPut);
    router.post('/',[
        check('email','Email is not valid').isEmail(),
        check('name','Name is required').not().isEmpty(),
        check('password','Password is required and greather than 6 characters').not().isEmpty().isLength({min:6}),
        // check('role','Role is required').isIn(['USER_ROLE', 'ADMIN_ROLE']),
        check('role').custom(async (role = '') => {
            const existRol = await Role.findOne({role});
            if(!existRol){
                throw new Error('Role does not exist');
            }
        }),
        validateField
    ], userPost);
    router.delete('/', userDelete);

    module.exports = router ;