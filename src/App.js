import React from 'react';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import SignUpForm from './Components/Pages/SignUpForm';
import { Login } from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Jobs from './Components/Jobs';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>

      <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUpForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        


      </Routes>
     
    </div>
  );
}

export default App;
