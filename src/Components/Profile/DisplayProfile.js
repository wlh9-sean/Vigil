import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import './Profile.css'


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
            <div className='profileContainer'>
                {!this.props.id ? 
                <>
                <div className='individualProfile'>
                    <div>
                        <img src={profile.img} className='photo' alt=''/>
                    </div>

                    <div className='infoStyling'>
                        <div className='nameStyling'>
                            <p>{profile.first_name} {profile.last_name}</p>
                        </div>

                        <div className='birthdayStyling'>
                            {profile.birthday}
                        </div>

                        <div className='passingDateStyling'>
                            {profile.passing_date}
                        </div>

                    </div>
                </div>
                </>
                :
                <>
                <div className='individualProfile'>
                    <div>
                        <img src={profile.img} className='photo' alt=''/>
                    </div>

                    <div className='infoStyling'>
                        <div className='nameStyling'>
                            <p>{profile.first_name} {profile.last_name}</p>
                        </div>

                        <div className='dateStyling'>
                            {profile.birthday}
                        </div>

                        <div className='dateStyling'>
                            {profile.passing_date}
                        </div>
                    </div>
                </div>
                    
                    <div className='profileButtons'>
                        <button onClick={this.routeProfile} className='button'>Edit Profile</button>
                        <button onClick={() => this.deleteProfile(profile.id)} className='button'>Delete Profile</button>

                    </div>
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