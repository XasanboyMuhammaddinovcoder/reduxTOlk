import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Err from './Pages/Err'
import './App.css'

function App() {
  



  return (
    <>
      <Routes>
        <Route path='/' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<Err></Err>}></Route>
      </Routes>
    </>
  )
}

export default App
