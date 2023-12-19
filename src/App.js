import React, { Component } from 'react'
import { Routes, Route,Link } from "react-router-dom";
import Option1 from "./components/Option1"
import Option2 from './components/Option2';
import Option3 from './components/Option3';
import Home from './components/Home';
export default class App extends Component {
  render() {
    return ( <div>
      <div className='row mt-4'>
      <div className='col-md-6 offset-3 d-flex gap-5'>
        <Link to="/" className='btn btn-info'>Home</Link>
        <Link to="/first" className='btn btn-info'>Option1</Link>
        <Link to="/second" className='btn btn-info'>Option2</Link>
        <Link to="/third" className='btn btn-info'>Option3</Link>
      </div>
      </div>
      
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="first" element={<Option1/>}/>
          <Route path="second" element={<Option2/>}/>
          <Route path="third" element={<Option3/>}/>
        </Routes>
      </div>
    )
  }
}

