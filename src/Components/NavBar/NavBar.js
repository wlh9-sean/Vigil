import React, { Component } from 'react'
// import {Switch} from '@material-ui/core'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Nav>
                <Link to='/'>
                    <h1>Title</h1>
                </Link>
                <Link to='/admin/login'>
                    <button>Sign In</button>
                </Link>
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

    @media(max-width: 768px){
        font-size: 20px;
        display: flex
        Ul {
            display: none;
        }
    }
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-evenly;
`

