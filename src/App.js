import React from 'react';
import Router from './routes'
import './App.css'
import 'styled-components'
import Nav from './Components/NavBar/NavBar'

function App() {
  return (
    <div className='App'>
      <Nav />
      {Router}
    </div>
  );
}

export default App;



