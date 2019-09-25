import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser, logoutUser} from './../../redux/reducers/adminReducer'
import './Login.css'

class Login extends Component {
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        const {email, password} = this.state

        axios
            .post('/auth/login', {email, password})
            .then( res => {
              this.props.updateUser(res.data)
              this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    

    render() {
        return (

            <div className='login'>
                <label>Email</label>
               <input type='email'
                    placeholder='Email'
                    name='email'
                    onChange={this.handleChange} />

               <label>Password</label>
               <input type='password'
                    placeholder='Password'
                    name='password'
                    onChange={this.handleChange} />
                    <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default connect(null, {updateUser, logoutUser})(Login)