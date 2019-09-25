import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Profiles.css'


export default class GetProfiles extends Component {
    constructor(){
        super()

        this.state = {
            profile: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/profiles').then(res => {
            this.setState({
                profile: res.data
            })
        })
    }

    

    render() {
        const mappedProfiles = this.state.profile.map((profile) => {
            return(
                <Link to={`/api/profile/${profile.id}`} className='getProfiles'>
                    <div className='profile'>
                        <div className='firstName'>{profile.first_name}</div>
                        <div className='lastName'>{profile.last_name}</div>
                    </div>
                </Link>
            )
        })
        return (
            <div className='profiles'>
                <section className='each'>
                    {mappedProfiles}
                </section>
            </div>
        )
    }
}

// Styled components
// const Div = styled.div`
//     margin: 10px;
// `