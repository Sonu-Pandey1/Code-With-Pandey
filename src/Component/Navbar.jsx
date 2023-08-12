// import { BsFillMoonStarsFill } from "react-icons/bs"
import { ImHome } from "react-icons/Im"
import { NavLink, useNavigate } from "react-router-dom"
// import NavbarStyle from "./Navbar.module.css"
import "../App.css"
// import { useState } from "react"


export default function Navbar({mode ,modeHandller}) {
    
  
    let navigate = useNavigate()
    
    return (
        <div  className= {`navContainer  shadow ${mode===true?"courseCardswhite":""}`}>

            {/* top Navbar here */}
            <nav className="navbar navb  navbar-expand-lg  p-3" >
                <div className="container-fluid">

                    <NavLink className={`navbar-brand font-color-700 title ${mode===true?"premaryColor2":"premaryColor"} `} to="/"><span>&lt;</span><span>&#8725;</span><span>&gt;</span>&nbsp;  CodeWithPandey</NavLink>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navul ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink className={`nav-link font-color-${mode===true?"800":""}`} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link font-color-${mode===true?"800":""}`}to="/courses ">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link font-color-${mode===true?"800":""}`} to="/tutorial ">Tutorial</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link font-color-${mode===true?"800":""}`} to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link font-color-${mode===true?"800":""}`} to="/notes">Notes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link font-color-${mode===true?"800":""}`} to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link font-color-${mode===true?"800":""}`} to="/workwithus">Contact With Us</NavLink>
                            </li>
                            <li className=" d-flex justify-content-evenly navbarbtnli">
                                <label className="switch">
                                    <input onClick={()=>{modeHandller()}} type="checkbox" className="input__check"/>
                                        <span className={`slider${mode===true?"1":""}`}></span>
                                </label>
            
                                <button onClick={() => { navigate("/login") }} className={`navbarbtn${mode===true?"2":""} px-3 mx-2 `}>Login</button>
                                <button onClick={() => { navigate("/signup") }} className={`navbarbtn${mode===true?"2":""}  px-3 mx-2`}>SignUp</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            {/* bottom navbar here */}
            <nav className="navbar    navbar-expand-lg mx-4  p-1">
                <div className="container-fluid">
                    {/* <NavLink className="navbar-brand font-color-700 title " to="/"><ImHome /></NavLink> */}
                    <button onClick={() => navigate("/")} className={`navbar-brand font-color-700 title homeicon${mode===true?"2":"1"}`}><ImHome className={`homeiconmain ${mode===true?"premaryColor":""}`} /></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContentt">
                        <ul className="navbar-nav navul ms-auto me-auto mb-2  mb-lg-0">
                            <li className="nav-item mx-2 " >
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink className={`nav-link font-color-${mode===true?"800":"700"}`} to="/tutorial/html-home" >HTML</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={`nav-link font-color-${mode===true?"800":"700"}`} to="tutorial/css ">CSS</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={`nav-link font-color-${mode===true?"800":"700"}`} to="/tutorial/js">JS</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={`nav-link font-color-${mode===true?"800":"700"}`} to="/tutorial/c">C</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={`nav-link font-color-${mode===true?"800":"700"}`} to="/tutorial/c++">C++</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={`nav-link font-color-${mode===true?"800":"700"}`} to="/tutorial/java">JAVA</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={`nav-link font-color-${mode===true?"800":"700"}`} to="/tutorial/python">PYTHON</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={`nav-link font-color-${mode===true?"800":"700"}`} to="/tutorial/php">PHP</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className={`nav-link font-color-${mode===true?"800":"700"}`} to="/tutorial/react-js">REACT JS</NavLink>
                            </li>
                        </ul>
                        <div className="input-wrapper">
                            <button className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fff" d="M22 22L20 20"></path>
                                </svg>
                            </button>
                            <input placeholder="search.." className={`  ${mode===true?"input1":"input"}`} name="text" type="text" />
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2 d-none" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success searchbtn" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}