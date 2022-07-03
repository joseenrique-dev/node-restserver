const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const { q, name = 'No name', apikey, page = 1, limit = 10 } = req.query;
        res.json({
            msg:'Get Api',
            q,
            name,
            apikey,
            page,
            limit
        })
    }

const userPut = (req, res) => {
    const { id } = req.params;
        res.json({
            msg:'Put Api',
            id
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