import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateUser} from './../../redux/reducers/adminReducer'
import axios from 'axios'
// import styled from 'styled-components'
import './Admin.css'

class Admin extends Component {
    constructor(){
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    register = () => {
        const {firstName, lastName, email, password, isAdmin} = this.state
        axios.post('/auth/register', {firstName, lastName, email, password, isAdmin})
        .then(user => {
            axios.post(`/mail/welcome/${email}`).then(() => {
                console.log('email sent')
            })
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                
            })
            this.props.updateUser(user.data)
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }


    render() {
        return (
            <div className='registerParent'>
                <div className='box'>
                    <h1 className='h1'>Register</h1>
                    <input type='text'
                        placeholder='First Name'
                        name='firstName'
                        // value={this.state.firstName}
                        onChange={this.handleChange}
                        className='input'
                        />
                    <input type='text'
                        placeholder='Last Name'
                        name='lastName' 
                        // value={this.state.lastName}
                        onChange={this.handleChange}
                        className='input' 
                        />
                    <input type='email'
                        placeholder='email'
                        name='email' 
                        // value={this.state.email}
                        onChange={this.handleChange}
                        className='input' 
                        />
                    <input type='password'
                        placeholder='Password'
                        name='password' 
                        // value={this.state.password}
                        onChange={this.handleChange}
                        className='input' 
                        />
                    <button onClick={this.register} className='buttonDesktop'>Continue</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {updateUser}) (Admin)


// Styled Components

// const Div1 = styled.div`
//     height: 500px;
//     width: 50%;
//     background: #F6F6F6;
//     margin-top: 50px;
//     margin-left: 270px;
//     display: flex;

// `

// const Div2 = styled.div`
//     height: 100%;
//     width: 100%;
//     background: #F6F6F6;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-around;
// `