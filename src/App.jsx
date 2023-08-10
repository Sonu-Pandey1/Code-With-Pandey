
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from "./Component/Home"
import Courses from "./Component/Courses"
import Tutorial from "./Component/Tutorial"
import Blog from "./Component/Blog"
import Notes from "./Component/Notes"
import Contact from "./Component/Contact"
import WorkWithUs from "./Component/WorkWithUs"
import Html_home from "./Component/Html_home"
import Page404 from './Component/Page404'
import Login from './Component/Login'
import Signup from './Component/Signup'

function App() {

  const [mode, setMode]=useState(false)
    console.log(mode)
    let modeHandller=()=>{
        setMode(!mode);
        if(mode===true){
          document.body.style.backgroundColor="#ffffff"
        }
        else{
          document.body.style.backgroundColor="#111827"
        }
        
    }

  return (
    <>
      <Navbar mode={mode} modeHandller={modeHandller} />
      <Routes>
        <Route path='/' element={<Home mode={mode} />} />
        <Route path='/courses' element={<Courses mode={mode} />} />
        <Route path='/tutorial/' element={<Tutorial mode={mode} />}>
        </Route>
        <Route path='/tutorial/:name' element={<Html_home mode={mode} />} />
        <Route path='/blog' element={<Blog mode={mode} />} />
        <Route path='/notes' element={<Notes mode={mode} />} />
        <Route path='/contact' element={<Contact mode={mode} />} />
        <Route path='/workwithus' element={<WorkWithUs mode={mode} />} />
        <Route path='/login' element={<Login mode={mode}/>}/>
        <Route path='/signup' element={<Signup mode={mode}/>}/>
        <Route path='/*' element={<Page404 mode={mode}/>} />
      </Routes>
    </>
  )
}

export default App
