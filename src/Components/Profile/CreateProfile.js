import React, { Component } from 'react'
import axios from 'axios'
import './CreateProfile.css'

export default class CreateProfile extends Component {
    constructor(){
        super()

        this.state = {
            first_name: '',
            last_name: '',
            birthday: '',
            passing_date: '',
            img: '',
            // startDate: new Date()
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDate = (date) => {
        this.setState({
            startDate: date
        })
    }

    create = () => {
        const {first_name, last_name, birthday, passing_date, img} = this.state
        axios.post('/api/profile/create', {first_name, last_name, birthday, passing_date, img}).then(profile => {
            this.setState({
                first_name: '',
                last_name: '',
                birthday: '',
                passing_date: '',
                img:''
            })
            this.props.history.push('/api/profiles')
        }).catch(err => console.log(err)) 
    }

    render() {
        return (
            <div className='CreateProfile'>
                <div className='box'>
                    <h1 className='h1'>Create a profile</h1>
                    <input type = 'text'
                        placeholder = 'First Name'
                        name = 'first_name'
                        onChange={this.handleChange}
                        value={this.state.first_name}
                        className='input'
                    />
                    <input type = 'text'
                        placeholder = 'Last Name'
                        name = 'last_name'
                        onChange = {this.handleChange}
                        value={this.state.last_name}
                        className='input'
                    />
                    <input type = 'date'
                        placeholder = 'Birthday'
                        name = 'birthday'
                        onChange = {this.handleChange}
                        value={this.state.birthday}
                        className='input'
                    />
                    <input type = 'date'
                        placeholder = 'Date Of Passing'
                        name = 'passing_date'
                        onChange = {this.handleChange}
                        value = {this.state.passing_date}
                        className='input'
                    />
                    <input type='text'
                        placeholder='Profile Image'
                        name='img' 
                        // value={this.state.password}
                        onChange={this.handleChange}
                        className='input' 
                        />
                    <button onClick={this.create} className='buttonDesktop'>Create</button>

                </div>
            </div>
        )
    }
}
