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

module.exports = {
    userGet,
    userPut,
    userDelete
}