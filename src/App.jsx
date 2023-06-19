import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import {BrowserRouter ,Routes, Route, Router} from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="App">
            <BrowserRouter>
              <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/Register' element={<Register/>}/>
              </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
