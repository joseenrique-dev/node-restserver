const { response } = require('express');
const User = require('../models/user'); 

const login = async (req, res = response) => {
    const {email, password} = req.body;
    try {
        //verify if email exist
        const existEmail = await User.findOne({ email });
        if(!existEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'User does not exist'
            });
        }
        

        //if user is active

        //check password

        //generate json webtoken
        res.json({
            message: 'Login success'
        })
    } catch (error) {
        console.error(error);
        return res.status(500,{error: 'Something went wrong'});
    }
    
}


module.exports = {
    login
};
