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
                <p>Vigil Light provides you with resources aiding in the process of memorializing your loved ones. From detailed instructions for the most popular social media platforms, to a personalized profile where you can pay your respects, let Vigil Light help ease the pressure of saying goodbye. 
                    
                To get started, click “Registration” below. We will first ask for your information before gathering the information of your loved one. </p>
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
