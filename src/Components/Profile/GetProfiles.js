import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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

    

    render() {
        const mappedProfiles = this.state.profile.map((profile) => {
            return(
                <Link to={`/api/profile/${profile.id}`}>
                    <Div>
                        <div>{profile.first_name}</div>
                        <div>{profile.last_name}</div>
                    </Div>
                </Link>
            )
        })
        return (
            <div>
                {mappedProfiles}
            </div>
        )
    }
}

// Styled components
const Div = styled.div`
    margin: 10px;
`