const { response, request } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

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

const userPut = async(req, res) => {
    const { id } = req.params;
    const { password, google,email, ...rest } = req.body;

    //db validate
    if( password ){
        const salt = bcrypt.genSaltSync();
        rest.password = bcrypt.hashSync(password, salt);
    }
    const user = await User.findByIdAndUpdate(id, rest, { new: true });
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

    
    const { email, password, name, role } = req.body;
    const user = new User({ email, password, name, role });
    
    //encript password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    //save bd
    await user.save();
        res.json({
            msg:'User created successfully',
            user
        }); 
    }

module.exports = {
    userGet,
    userPut,
    userDelete,
    userPost
}