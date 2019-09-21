import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class DisplayProfile extends Component {
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

    routeProfile = () => {
        this.props.history.push(`/profile/edit/${this.props.match.params.id}`)
    }

    render() {
       const {profile} = this.state
        return (
            <div>
                {!this.props.id ? 
                <>
                    {profile.first_name}
                    {profile.last_name}
                    {profile.birthday}
                    {profile.passing_date}
                </>
                :
                <>
                    {profile.first_name}
                    {profile.last_name}
                    {profile.birthday}
                    {profile.passing_date}
                    
                    <button onClick={this.routeProfile}>Edit Profile</button>
                    <button onClick={() => this.deleteProfile(profile.id)}>Delete Profile</button>
                </>
            }
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(DisplayProfile)