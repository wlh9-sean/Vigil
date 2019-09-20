const create = (req, res) => {
    const db = req.app.get('db')
    const {first_name, last_name, birthday, passing_date} = req.body
    const {id} = req.session.user

    db.profile.create_profile({first_name, last_name, birthday, passing_date, id})
    .then(() => {
        res.status(200).send('Profile Created!')
    })
    .catch(error => {
        console.log(error)
    })
}

const getProfiles = (req, res) => {
    const db = req.app.get('db')


    db.profile.get_profiles()
    .then((profiles) => {
        res.status(200).send(profiles)
    })
    .catch (error => console.log(error))
}

const getIndividualProfile = (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.profile.get_individual_profile(+id)
    .then((profile) => {
        res.status(200).send(profile)
    })
    .catch(err => console.log(err))
}

deleteProfile = (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const admin_id = req.session.user.id

    db.profile.delete_profile([id, admin_id])
    .then(() => {
        res.status(200).send('Profile successfully Deleted!')
    }).catch(err => console.log(err))
}

updateProfile = (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const admin_id = req.session.user.id
    const {first_name, last_name, birthday, passing_date} = req.body
    const stringBirthday = birthday.toString()
    const stringPassing = passing_date.toString()

    db.profile.edit_profile({first_name, last_name, stringBirthday, stringPassing, id})
    .then(() => {
        res.status(200).send('Profile Updated')
    }).catch(err => console.log(err))
}

module.exports = {
    create,
    getProfiles,
    getIndividualProfile,
    deleteProfile,
    updateProfile
}