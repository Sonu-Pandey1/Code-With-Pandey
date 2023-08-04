// import React from 'react'
import { NavLink, Outlet,  } from "react-router-dom";
// import Html_home from "./Html_home";

export default function Tutorial() {
  // const navigate  = useNavigate()
  
  return (
    
    <div>
      <h1>Tutorial</h1>
      
      <NavLink to="/tutorial/Html-home" >html</NavLink>
      <NavLink to="css">css</NavLink>
      <NavLink to="js">js</NavLink>
      <NavLink to="c">c</NavLink>
      <NavLink to="c++">c++</NavLink>
      <NavLink to="java">java</NavLink>
      <NavLink to="python">python</NavLink>
      <NavLink to="php">php</NavLink>
      <NavLink to="react-js">react js</NavLink> 
       {/* <button onClick={()=>navigate('css')}>pagae</button> */}
      <Outlet/>
      
    </div>
  )
}
