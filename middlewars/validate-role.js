const isAdminRole = (req, res, next) => {
    const { role } = req.user;
    if(!req.user){
        return req.status(500).json({
            ok: false,
            msg: 'User does not exist'
        });
    }
    if(role !== 'ADMIN_ROLE'){
        return res.status(401).json({
            ok: false,
            msg: 'User does not have permission'
        });
    }
    next();
}

module.exports = {
    isAdminRole
}