const {Router} = require('express');
const { userGet, userPut, userDelete, userPost } = require('../controller/user');

const router = Router();

    router.get('/', userGet);

    router.put('/:id', userPut);
    router.post('/', userPost);
    router.delete('/', userDelete);

    module.exports = router ;