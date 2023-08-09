
import { Route, Routes } from 'react-router-dom'
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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/tutorial/' element={<Tutorial />}>
        </Route>
        <Route path='/tutorial/:name' element={<Html_home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/workwithus' element={<WorkWithUs />} />
        <Route path='/workwithus' element={<WorkWithUs />} />
        <Route path='/workwithus' element={<WorkWithUs />} />
        <Route path='/*' element={<Page404/>} />
      </Routes>
    </>
  )
}

export default App
