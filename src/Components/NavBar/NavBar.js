import React, { Component } from 'react'
import './NavBar.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {logoutUser} from './../../redux/reducers/adminReducer'
// import styled from 'styled-components'
import {Link} from 'react-router-dom'
import icon from './menu.svg'
import arrow from './24px.svg'


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
            <div className='navdiv'>
               <div className='desktopView'>
                    {/* Navbar Desktop View*/}
                    <nav className='navbarDesktop'>
                    <Link to='/' className='linkDesktop'>
                        <h1 className='titleDesktop'>Vigil Light</h1>
                    </Link>
                    
                        <ul className='listDesktop'>
                            <Link to='/admin/register' className='linkDesktop'>
                                <li className='listItemDesktop'>Register</li>
                            </Link>

                            <Link to='/api/resources' className='linkDesktop'>
                                <li className='listItemDesktop'>Resources</li>
                            </Link>

                            <Link to='/api/profiles' className='linkDesktop'>
                                <li className='listItemDesktop'>View Profiles</li>
                            </Link>
                        </ul>
                    
                    {!this.props.id ?
                        (<Link to='/admin/login'>
                            <button className='buttonDesktop'>Sign In</button>
                        </Link>)
                    :
                        (<button className='buttonDesktop' onClick={this.logout}>Logout</button>)
                    }
                    </nav>
                
                   
                </div> 

                {/* Navbar Mobile View */}
                {!this.state.menu ? 
                (
                    <div className='mobileView'>
                        <img src={icon} onClick={this.slide} alt='' className='hamburger'/>
                    </div>
                )
                :
                (
                    <div>
                        <nav className={
                            this.state.menu ?
                            'navbarMobile slide'
                            :
                            'navbarMobile'
                        }>
                            <img src={arrow} onClick={this.slide} alt='' />
                            <Link to='/' className='linkMobile'>
                                <h1 className='titleMobile'>Vigil Light</h1>
                            </Link>

                            <ul className='listMobile'>
                                <Link to='/admin/register' className='linkMobile'>
                                    <li className='listItemMobile'>Register</li>
                                </Link>

                                <Link to='/api/resources' className='linkMobile'>
                                    <li className='listItemMobile'>Resources</li>
                                </Link>

                                <Link to='/api/profiles' className='linkMobile'>
                                    <li className='listItemMobile'>View Profiles</li>
                                </Link>
                            </ul>

                            {!this.props.id ?
                        (<Link to='/admin/login'>
                            <button className='buttonMobile'>Sign In</button>
                        </Link>)
                    :
                        (<button className='buttonMobile' onClick={this.logout}>Logout</button>)
                    }

                        </nav>
                    </div>
                )
                }

                    
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps, {logoutUser})(NavBar)


// Styled Components



// const Nav = styled.nav`
// @media(max-width: 768px){
//     font-size: 20px;
//     display: flex
//     Ul {
//         right: -80px;
//     }
// }
//     height: 10vh;
//     width: 100vw;
//     background: #F6F6F6;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;

// `

// const Ul = styled.ul`
//     width: 300px;
//     display: flex;
//     justify-content: space-evenly;
// `

