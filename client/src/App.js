import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing.js';
import '../src/styles/App.css'


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
    <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
    </Router>
  )
}

export default App
