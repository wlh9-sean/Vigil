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
            <div className='loginParent'>
                <div className='login'>
                    <h1 className='h1'>Login</h1>
                <input type='email'
                        placeholder='Email'
                        name='email'
                        onChange={this.handleChange} 
                        className='email'/>

                <input type='password'
                        placeholder='Password'
                        name='password'
                        onChange={this.handleChange}
                        className='password' />
                        <button onClick={this.login} className='buttonDesktop'>Login</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {updateUser, logoutUser})(Login)