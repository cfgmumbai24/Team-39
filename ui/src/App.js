import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Progress from './component/Progress';
import Edit from './component/Edit';
import FoundationForm from './pages/foundationform';
import Literatureform from './pages/literatureform';
import Updateoredit from './pages/updateoredit';
import NumericalForm from './pages/NumericalForm';
import ChartF from './pages/ChartF';
import ChartN from './pages/ChartN';
import ChartsL from './pages/ChartL';

const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id/progress' element={<Progress />} />
          <Route path='/:id/edit' element={<Updateoredit />} />
          <Route path='/:id/edit/foundation' element={<FoundationForm />} />
          <Route path='/:id/edit/literature' element={<Literatureform />} />
          <Route path = '/:id/edit/numerical' element = {<NumericalForm/>} />
          <Route path = '/:id/progress/:month/chartf' element  = {<ChartF/>}/>
          <Route path = '/:id/progress/:month/chartn' element  = {<ChartN/>}/>
          <Route path = '/:id/progress/:month/chartl' element  = {<ChartsL/>}/>
          {/* <Route path='/literature' element={<Literatureform/>} /> */}
        </Routes>
      </Router>


      
    </div>
  )
}

export default App
