import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class Admin extends Component {
    constructor(){
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isAdmin: false,
            user: {}
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateUser = (user) => {
        this.setState({
            user
        })
    }

    register = () => {
        const {firstName, lastName, email, password, isAdmin, user} = this.state
        axios.post('/auth/register', {firstName, lastName, email, password, isAdmin, user})
        .then(user => {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                isAdmin: true
            })
            this.updateUser(user.data)
        }).catch(err => console.log(err))
    }


    render() {
        console.log(this.state)
        return (
            <Div1>
                <Div2>
                    <h1>Register</h1>
                    <input type='text'
                        placeholder='First Name'
                        name='firstName'
                        // value={this.state.firstName}
                        onChange={this.handleChange}
                        />
                    <input type='text'
                        placeholder='Last Name'
                        name='lastName' 
                        // value={this.state.lastName}
                        onChange={this.handleChange} 
                        />
                    <input type='email'
                        placeholder='email'
                        name='email' 
                        // value={this.state.email}
                        onChange={this.handleChange} 
                        />
                    <input type='password'
                        placeholder='Password'
                        name='password' 
                        // value={this.state.password}
                        onChange={this.handleChange} 
                        />
                    <button onClick={this.register}>Continue</button>
                </Div2>
            </Div1>
        )
    }
}


// Styled Components

const Div1 = styled.div`
    height: 500px;
    width: 50%;
    background: #F6F6F6;
    margin: 10px;
    display: flex;

`

const Div2 = styled.div`
    height: 100%;
    width: 100%;
    background: #F6F6F6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`