import React from 'react';
import Home from './pages/Home';
import AddFood from './pages/AddFood';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addfood' element={<AddFood/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App