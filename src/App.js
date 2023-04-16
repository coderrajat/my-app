import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import User_Nav from './Components/User_Nav';


function App() {
  return (
    <div className="App">
      <Router>
    
    <Routes>
        <Route exact path='/' element={<User_Nav/>}/>

    </Routes>

    </Router>
    </div>
  );
}

export default App;
