import { useState } from 'react'
import './bootstrap.min.css'

import './App.css'
import Landing from './pages/Landing'
import List from './pages/List'
import Add from './pages/Add'
import View from './pages/View'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Edit from './pages/Edit'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <>
    
  <Header/>
  <Routes>
    <Route path='/' element={<Landing/>}></Route>
    <Route path='list' element={<List/>}></Route>
    <Route path='add' element={<Add/>}></Route>
    <Route path='view/:id' element={<View/>}></Route>
    <Route path='edit/:id' element={<Edit/>}></Route>
  </Routes>
  <ToastContainer></ToastContainer>
    </>
  )
}

export default App
