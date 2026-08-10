import React from 'react';
import Home from './pages/Home';
import AddFood from './pages/AddFood';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ViewFood from './pages/ViewFood';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addfood' element={<AddFood/>}/>
      <Route path='/food/:id' element={<ViewFood/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App