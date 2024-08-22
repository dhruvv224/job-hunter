import React from 'react';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import SignUpForm from './Components/Pages/SignUpForm';
import { Login } from './Components/Pages/Login';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
      <Route path='/home' element={<Home/>}/>

        <Route path='/signup' element={<SignUpForm/>}/>
        <Route path='/login' element={<Login/>}/>


      </Routes>
     
    </div>
  );
}

export default App;
