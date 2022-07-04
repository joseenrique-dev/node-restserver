const { response, request } = require('express');
const User = require('../models/user');

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

const userPost = async (req, res) => {
    console.log('Body: ', req.body);
    const user = new User(req.body);
    await user.save();
        res.json({
            msg:'Post Api',
            user
        });
    }

module.exports = {
    userGet,
    userPut,
    userDelete,
    userPost
}