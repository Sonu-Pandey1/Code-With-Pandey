
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
import Html_home from "./Component/Html_home"
// import Css from "./Component/Css"

function App() {


  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/tutorial/' element={<Tutorial />}>
          {/* <Route path='html-home' element={<Html_home />} /> */}
          {/* <Route path='css' element={<Css/>} />
          <Route path='js' element={<h1>js</h1>} />
          <Route path='c' element={<h1>c</h1>} />
          <Route path='c++' element={<h1>C++</h1>} />
          <Route path='java' element={<h1>Java</h1>} />
          <Route path='python' element={<h1>python</h1>} />
          <Route path='php' element={<h1>php</h1>} />
          <Route path='react-js' element={<h1>react -js</h1>} /> */}
        </Route>
        <Route path='/tutorial/:name' element={<Html_home />} />
        {/* <Route path='tutorial/css' element={<Css />} />
        <Route path='tutorial/js' element={<h1>js</h1>} />
        <Route path='tutorial/c' element={<h1>c</h1>} />
        <Route path='tutorial/c++' element={<h1>C++</h1>} />
        <Route path='tutorial/java' element={<h1>Java</h1>} />
        <Route path='tutorial/python' element={<h1>python</h1>} />
        <Route path='tutorial/php' element={<h1>php</h1>} />
        <Route path='tutorial/react-js' element={<h1>react -js</h1>} /> */}

        <Route path='/blog' element={<Blog />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mygear' element={<MyGear />} />
        <Route path='/workwithus' element={<WorkWithUs />} />
        <Route path='/*' element={<h1>Page not found</h1>} />

      </Routes>
    </>
  )
}

export default App
