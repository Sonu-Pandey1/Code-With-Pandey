
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from "./Component/Home"
import Courses from "./Component/Courses"
import Tutorial from "./Component/Tutorial"
import Blog from "./Component/Blog"
import Notes from "./Component/Notes"
import Contact from "./Component/Contact"
import MyGear from "./Component/MyGear"
import WorkWithUs from "./Component/WorkWithUs"


function App() {
 

  return (
    <>
    
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/tutorial' element={<Tutorial/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/mygear' element={<MyGear/>}/>
        <Route path='/workwithus' element={<WorkWithUs/>}/>
      </Routes>
    </>
  )
}

export default App
