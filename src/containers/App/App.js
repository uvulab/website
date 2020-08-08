import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function App({ routes }) {
  return <Router>{routes}</Router>
}

export default App
