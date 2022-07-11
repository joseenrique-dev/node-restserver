const { response } = require('express');
const login = (req, res) => {
    res.json({
        message: 'Login success'
    })
}


module.exports = {
    login
};
