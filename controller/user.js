const { response, request } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const userGet = async (req = request, res = response) => {
    const { limit = 5, from = 0 } = req.query;
    const query = {status : true};
    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User
        .find(query)
        .limit(Number(limit))
        .skip(Number(from))
    ])
    
        res.json({
            total,
            users
        });
    }


const userPut = async(req, res) => {
    const { id } = req.params;
    const { _id, password, google,email, ...rest } = req.body;

    //db validate
    if( password ){
        const salt = bcrypt.genSaltSync();
        rest.password = bcrypt.hashSync(password, salt);
    }
    const user = await User.findByIdAndUpdate(id, rest, { new: true });
        res.json(user)
    }

const userDelete = (req, res) => {
        res.json({
            msg:'Delete Api'
        })
    }

const userPost = async (req, res) => {

    console.log('req.body', req.body);
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