import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing.js';


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
          <div class="acknowledgment">
             © 2023 inspired by <a href="https://www.tedsumers.info" target="_blank" rel="noopener noreferrer">Ted Sumers Site</a> and designs are from <a href="https://patakk.tumblr.com" target="_blank" rel="noopener noreferrer">PATAKK on Tumblr</a>.
           </div>
    </Router>
  )
}

export default App
