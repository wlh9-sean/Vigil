const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    try {
        const {firstName, lastName, email, password, isAdmin} = req.body
        const db = req.app.get('db')

        let users = await db.auth.get_admin(email)
        let user = users[0]

        if (user) {
            return res.status(409).send('Already Registered. Please sign in')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let response = await db.auth.create_admin({first_name:firstName, last_name: lastName, email, hash, is_admin: true})
        let newUser= response[0]

        delete newUser.password

        req.session.user = newUser
        res.send(req.session.user)
    } catch (error) {
        if (error) throw error
        console.log('There was an error', )
        res.status(500).send(error)
    }
}

const login = async(req, res) => { 
    try {
        const db = req.app.get('db')
        const {email, password} = req.body

        let users = await db.auth.get_admin(email)
        let user = users[0]

        if(!user){
            return res.status(401).send('Email or password is incorrect.')
        }

        let isAuthenticated = bcrypt.compareSync(password, user.password)

        if(!isAuthenticated){
            return res.status(401).send('Email or password is incorrect.')  
        }

        delete user.password
        req.session.user = user
        res.send(req.session.user)

    } catch (error) {
        console.log('There was an error', error)
        res.status(500).send(error)
    }
}

module.exports = {
    register,
    login
}