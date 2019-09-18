const authenticateUser = (req, res, next) => {
    const {is_admin} = req.session

    if(is_admin === false){
        return res.status(401).send('Please register as an admin')
    }
    next()
};

module.exports = {
    authenticateUser
}