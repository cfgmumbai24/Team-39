import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Progress from './component/Progress';
import Edit from './component/Edit';
import FoundationForm from './pages/foundationform';
import Literatureform from './pages/LiteratureForm';
import Updateoredit from './pages/updateoredit';
import Signup from './pages/SingUpPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/edit' element={<Updateoredit />} />
          <Route path='/foundation' element={<FoundationForm />} />
          <Route path='/literature' element={<Literatureform/>} />
          <Route path='/signUp' element={<Signup/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      </Router>


      
    </div>
  )
}

export default App
