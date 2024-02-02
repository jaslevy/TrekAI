import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing.js';
import Signup from './pages/signup.js';
import Login from './pages/login.js';
import '../src/styles/App.css';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [testData, setTestData] = useState([{}])
  useEffect(() => {
    fetch("http://127.0.0.1:5000/testAPI").then(
      res => res.json()
    ).then(
      testData => {
        setTestData(testData)
        console.log(testData)
      }  
    )

  }, [])
  return (
    <div>
    <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
    </Router>
    <div className="acknowledgement" style={{ textAlign: 'center' }}>© 2023 TrekAI.</div>
    </div>
  )
}

export default App
