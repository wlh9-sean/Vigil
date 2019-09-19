import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'

export default class CreateProfile extends Component {
    constructor(){
        super()

        this.state = {
            first_name: '',
            last_name: '',
            birthday: '',
            passing_date: '',
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
        const {first_name, last_name, birthday, passing_date} = this.state
        axios.post('/api/profile/create', {first_name, last_name, birthday, passing_date}).then(profile => {
            this.setState({
                first_name: '',
                last_name: '',
                birthday: '',
                passing_date: ''
            })
            this.props.history.push('/')
        }).catch(err => console.log(err)) 
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <h1>Create a profile</h1>
                    <input type = 'text'
                        placeholder = 'First Name'
                        name = 'first_name'
                        onChange={this.handleChange}
                        value={this.state.first_name}
                    />
                    <input type = 'text'
                        placeholder = 'Last Name'
                        name = 'last_name'
                        onChange = {this.handleChange}
                        value={this.state.last_name}
                    />
                    <input type = 'date'
                        placeholder = 'Birthday'
                        name = 'birthday'
                        onChange = {this.handleChange}
                        value={this.state.birthday}
                    />
                    <input type = 'date'
                        placeholder = 'Date Of Passing'
                        name = 'passing_date'
                        onChange = {this.handleChange}
                        value = {this.state.passing_date}
                    />
                    <button onClick={this.create}>Create</button>

                </div>
            </div>
        )
    }
}
