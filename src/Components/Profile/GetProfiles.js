import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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

    deleteProfile = () => {
        
    }

    render() {
        const mappedProfiles = this.state.profile.map((profile) => {
            return(
                <Div key={profile.id}>
                    <div>{profile.first_name}</div>
                    <div>{profile.last_name}</div>
                    <div>{profile.birthday}</div>
                    <div>{profile.passing_date}</div>
                    <button>Delete Profile</button>
                </Div>
            )
        })
        return (
            <div>
                <h1>{mappedProfiles}</h1>
            </div>
        )
    }
}

// Styled components
const Div = styled.div`
    margin: 10px;
`