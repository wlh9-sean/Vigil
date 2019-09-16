import React, { Component } from 'react'
// import {Switch} from '@material-ui/core'
import styled from 'styled-components'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Nav>
                <h1>Title</h1>
                    <Ul>
                        <li>Register</li>
                        <li>Resources</li>
                        <li>About Us</li>
                    </Ul>
                </Nav>
            </div>
        )
    }
}


// Styled Components
const Nav = styled.nav`
    height: 10vh;
    width: 100vw;
    background: #F6F6F6;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-evenly;
`