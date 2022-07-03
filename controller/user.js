const { response } = require('express');

const userGet = (req, res) => {
    
        res.json({
            msg:'Get Api'
        })
    }

const userPut = (req, res) => {
        res.json({
            msg:'Put Api'
        })
    }

const userDelete = (req, res) => {
        res.json({
            msg:'Delete Api'
        })
    }

const userPost = function (req, res) {
    const {name, age} = req.body;
        res.json({
            msg:'Post Api',
            name,
            age
        })
    }

module.exports = {
    userGet,
    userPut,
    userDelete,
    userPost
}