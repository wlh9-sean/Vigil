require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const cors = require('cors')
const chalk = require('chalk')

const authCtrl = require('./controllers/auth_ctrl')
const profCtrl = require('./controllers/prof_ctrl')
const authMidd = require('./middleware/auth_middlware')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use( express.static( `${__dirname}/../build` ) );

app.use(express.json())
app.use(cors())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 60000000000
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(chalk.blue('Database Connected 🦄'))
}).catch(error => console.log(chalk.bgRed('Connection failed', error)))

// Auth Endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)

// Profile Endpoints POST create PUT update GET read DELETE delete
app.post('/api/profile/create', authMidd.authenticateUser, profCtrl.create)
app.get('/api/profiles', profCtrl.getProfiles)
app.get('/api/profile/:id', profCtrl.getIndividualProfile)
app.delete('/api/profile/:id', profCtrl.deleteProfile)
app.put('/api/profile/edit/:id', profCtrl.updateProfile)


app.listen(SERVER_PORT, () => console.log(chalk.cyan(`Serving on port ${SERVER_PORT} 🚀`)))