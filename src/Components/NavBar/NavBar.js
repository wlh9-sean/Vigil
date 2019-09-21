import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {logoutUser} from './../../redux/reducers/adminReducer'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    constructor(){
        super()

        this.state = {
            menu: false
        }
    }

    logout = () => {
        axios.get('/auth/logout')
        .then(() => {
            this.props.logoutUser()
            // this.props.history.push('/')
        })
    }

    slide = () => {
        this.setState({
            menu: !this.state.menu
        })
    }


    render() {
        return (
            <div>
                
                    {/* Navbar */}
                    <Nav>
                    <Link to='/'>
                        <h1>Title</h1>
                    </Link>
                    {!this.props.id ?
                        (<Link to='/admin/login'>
                            <button>Sign In</button>
                        </Link>)
                    :
                    (<button onClick={this.logout}>Logout</button>)
                    }

                    
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

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps, {logoutUser})(NavBar)


// Styled Components



const Nav = styled.nav`
@media(max-width: 768px){
    font-size: 20px;
    display: flex
    Ul {
        right: -80px;
    }
}
    height: 10vh;
    width: 100vw;
    background: #F6F6F6;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

const Ul = styled.ul`
    width: 300px;
    display: flex;
    justify-content: space-evenly;
`

