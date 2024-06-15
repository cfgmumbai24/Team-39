import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Progress from './component/Progress';
import Edit from './component/Edit';
const App = () => {
  return (
    <div className=' text-gray-500 bg-green-700'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>


      
    </div>
  )
}

export default App
