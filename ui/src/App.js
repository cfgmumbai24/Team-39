import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Progress from './component/Progress';
import Edit from './component/Edit';
import FoundationForm from './pages/foundationform';
import Literatureform from './pages/Literatureform';
import Updateoredit from './pages/updateoredit';
import NumericalForm from './pages/NumericalForm';

const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/:id/edit' element={<Updateoredit />} />
          <Route path='/:id/edit/foundation' element={<FoundationForm />} />
          <Route path='/:id/edit/literature' element={<Literatureform />} />
          <Route path = '/:id/edit/numerical' element = {<NumericalForm/>} />
          {/* <Route path='/literature' element={<Literatureform/>} /> */}
        </Routes>
      </Router>


      
    </div>
  )
}

export default App
