const {request, response} = require('express'); 
const jwt = require('jsonwebtoken');

const validateJWT =  ( req, res = response, next ) => {
    const token = req.header('x-token');
    console.log('TOKENN-->',token);
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'No token provided'
        });
    }
    try {
        
        console.log('JWT-->',process.env.JWT_SECRET);
        jwt.verify(token, process.env.JWT_SECRET);
        next();

    } catch (error) {
        console.log('ERROR-->',error);
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        });
    }
        
    }

module.exports = {
    validateJWT
};