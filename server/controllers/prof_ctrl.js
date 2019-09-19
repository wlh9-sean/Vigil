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

const getIndivialProfile = (req, res) => {

}

deleteProfile = (req, res) => {
    const db = req.app.get('db')
    db.profile.delete_profile(req.params.id, req.query.profile)
    .then(() => {
        res.status(200).send('Profile successfully deleted')
    })
}

module.exports = {
    create,
    getProfiles,
    getIndivialProfile,
    deleteProfile
}