const { response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user'); 
const generateJWT = require('../helpers/generate-jwt');

const login = async (req, res = response) => {
    const {email, password} = req.body;
    try {
        //verify if email exist
        const userResponse = await User.findOne({ email });
        if(!userResponse) {
            return res.status(400).json({
                ok: false,
                msg: 'User does not exist'
            });
        }
        
        //if user is active
        if(!userResponse.status) {
            return res.status(400).json({
                ok: false,
                msg: 'User status false'
            });
        }
        //check password
        const validPassword = bcryptjs.compareSync(password,userResponse.password)
        if(!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Wrong password !!!.'
            });
        }
        //generate json webtoken
        console.log('--->',userResponse.id);  
        const token = await generateJWT(userResponse.id);
        res.json({
            ok: true,
            userResponse,
            token
        })
    } catch (error) {
        console.error(error);
        return res.status(500,{error: 'Something went wrong'});
    }
    
}


module.exports = {
    login
};
