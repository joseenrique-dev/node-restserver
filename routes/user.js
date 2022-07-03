const {Router} = require('express');
const { userGet, userPut, userDelete } = require('../controller/user');

const router = Router();

    router.get('/', userGet);

    router.put('/', userPut);
    router.post('/', function (req, res) {
        res.json({
            msg:'Post Api'
        })
    });
    router.delete('/', userDelete);

    module.exports = router ;