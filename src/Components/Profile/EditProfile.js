import React, { Component } from 'react'
import axios from 'axios'

class EditProfile extends Component {
    constructor(){
        super()

        this.state = {
            first_name: '',
            last_name: '',
            birthday: '',
            passing_date: ''
        }
    }

    componentDidMount = () => {
        axios.get(`/api/profile/${this.props.match.params.id}`).then(res => {
            this.setState({
                first_name: res.data[0].first_name,   
                last_name: res.data[0].last_name,   
                birthday: res.data[0].birthday,   
                passing_date: res.data[0].passing_date   
            })
        })
    }

    editProfile = () => {
        const {first_name, last_name, birthday, passing_date} = this.state
        axios.put(`/api/profile/edit/${this.props.match.params.id}`, {first_name, last_name, birthday, passing_date}).then(() => {
            this.props.history.push(`/api/profile/${this.props.match.params.id}`)
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type='text'
                    name='first_name'
                    onChange={this.handleChange} 
                    value={this.state.first_name} />

                <input type='text'
                    name='last_name'
                    onChange={this.handleChange}
                    value={this.state.last_name} />

                <input type='date'
                    name='birthday'
                    onChange={this.handleChange}
                    value={this.state.birthday} />
                <input type='date'
                    name='passing_date'
                    onChange={this.handleChange}
                    value={this.state.passing_date} />
                <button onClick={this.editProfile}>Submit Changes</button>
            </div>
        )
    }
}


export default EditProfile
