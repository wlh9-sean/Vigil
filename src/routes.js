import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Components/Home/Home'
import Admin from './Components/Admin/Admin'
import Login from './Components/Admin/Login'
import Resources from './Components/Resources/Resources'
import CreateProfile from './Components/Profile/CreateProfile'
import GetProfiles from './Components/Profile/GetProfiles'
import DisplayProfile from './Components/Profile/DisplayProfile'
import EditProfile from './Components/Profile/EditProfile'

export default (
    <Switch>
        {/* Main Routes */}
        <Route exact path='/' component={Home} />
        <Route path='/api/resources' component={Resources} />

        {/* Admin Routes */}
        <Route path='/admin/register' component={Admin} />
        <Route path='/admin/login' component={Login} />

        {/* Profile Routes */}
        <Route path='/api/profile/create' component={CreateProfile} />
        <Route path='/api/profile/:id' component={DisplayProfile} />
        <Route path='/api/profiles' component={GetProfiles} />
        <Route path='/api/profile/comment' />
        <Route path ='/profile/edit/:id' component={EditProfile} />

    </Switch>
)