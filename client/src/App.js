import React, { useState, useEffect } from 'react'


function App() {
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
      
    </div>
  )
}

export default App
