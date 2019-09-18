import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'

function Home(props) {
    console.log(props)
    return (
        <Div1>
            <div>
                <h1>About Us</h1>
                <p>Occaecat magna deserunt quis proident velit minim cillum reprehenderit fugiat. Sit irure elit labore dolore ullamco enim ullamco nulla. Ut exercitation quis cupidatat ipsum cillum et.</p>
            </div>

            {!props.id ?
                (<Link to='/admin/register'>
                    <button>Register as an Admin</button>
                </Link>)
            :
                (<Link to='/api/profile/create'>
                    <button>Create a Profile</button>
                </Link>)
            }

            <Link to='/api/resources'>
                <button>Resources</button>
            </Link>
        </Div1>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(Home)

// Styled Components
const Div1 = styled.div`
    height: 300px;
    width: 300px;
    background: #F6F6F6;
`