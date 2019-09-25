import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Home(props) {
    console.log(props)
    return (
        <div className='parentDiv'>
            <div className='photoDiv'>
                <img className='sunPhoto' src='https://i.pinimg.com/originals/be/56/ff/be56ff00ba3d8025436fb5f953935749.jpg' alt='Sun Rays' />
            </div>

            <div className='introBox'>
                <h1 className='about'>Welcome</h1>
                <p>Occaecat magna deserunt quis proident velit minim cillum reprehenderit fugiat. Sit irure elit labore dolore ullamco enim ullamco nulla. Ut exercitation quis cupidatat ipsum cillum et.</p>
            </div>
            
            <div className='buttons'>
                {!props.id ?
                    (<Link to='/admin/register'>
                        <button className='button'>Registration</button>
                    </Link>)
                :
                    (<Link to='/api/profile/create'>
                        <button className='button'>Create a Profile</button>
                    </Link>)
                }

                <Link to='/api/resources'>
                    <button className='button'>Resources</button>
                </Link>

            </div>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(Home)

// Styled Components
