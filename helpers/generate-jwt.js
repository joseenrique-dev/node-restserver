const jwt = require('jsonwebtoken');

const generateJWT = ( uid = '' ) =>{
    return new Promise((resolve, reject)=>{
        const payload = {uid};
        jwt.sign(payload, process.env.SECRETPRIVATEKEY,{
            expiresIn: '4h'
        }, (err, token)=>{
            console.error(err)
            if(err) reject('Something went wrong and token can not be generated');
            resolve(token);
        }
    )});
}

module.exports = generateJWT;