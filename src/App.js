import React from 'react';
import Router from './routes'
import './App.css'
import 'styled-components'
// import Admin from './Components/Admin/Admin'
import Nav from './Components/NavBar/NavBar'

function App() {
  return (
    <div>
      <Nav />
      {/* <Admin /> */}
      {Router}
    </div>
  );
}

export default App;



