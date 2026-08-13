import React from 'react';
import Home from './pages/Home';
import AddFood from './pages/AddFood';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ViewFood from './pages/ViewFood';
import EditFood from './pages/EditFood';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addfood' element={<AddFood/>}/>
      <Route path='/food/:id' element={<ViewFood/>}/>
      <Route path='/food/edit/:id' element={<EditFood/>}/>
      <Route path = '/signup' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App