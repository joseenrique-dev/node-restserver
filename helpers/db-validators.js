const Role = require('../models/role');

const isAValidRole = async (role = '') => {
   
    const existRol = await Role.findOne({role});
    
    if(!existRol){
        throw new Error('Role does not exist');
    }
}

const emailExist = async (email = '') => {
    const existEmail = await User.findOne({ email });
    if(existEmail){
        return res.status(400).json({
            msg: 'The email already exists'
        })
    }
}

module.exports = {
    isAValidRole,
    emailExist
}