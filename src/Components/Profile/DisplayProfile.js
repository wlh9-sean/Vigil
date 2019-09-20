import React, { Component } from 'react'
import axios from 'axios'

export default class DisplayProfile extends Component {
    constructor(){
        super()

        this.state = {
            profile: [],
            
        }
    }

    componentDidMount = () => {
        axios.get(`/api/profile/${this.props.match.params.id}`).then(res => {
            this.setState({
                profile: res.data[0]   
            })
        })
    }

    deleteProfile = () => {
        axios.delete(`/api/profile/${this.props.match.params.id}`).then(res => {
          this.props.history.push('/api/profiles')
        }).catch(err => console.log(err))
    }

    render() {
       const {profile} = this.state
        return (
            <div>
                {profile.first_name}
                {profile.last_name}
                {profile.birthday}
                {profile.passing_date}
                <button onClick={id => this.deleteProfile(id)}>Delete Profile</button>
            </div>
        )
    }
}
