import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import BookingForm from './BookingForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path='/booking' element={<BookingForm/>}/>
      </Routes>
    </Router>
  )
}

export default App
