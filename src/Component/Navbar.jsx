import { BsFillMoonStarsFill } from "react-icons/bs"
import { ImHome } from "react-icons/Im"
import { NavLink, useNavigate } from "react-router-dom"
// import NavbarStyle from "./Navbar.module.css"
import "../App.css"


export default function Navbar() {
    let navigate = useNavigate()
    return (
        <div className="navContainer  shadow">

            {/* top Navbar here */}
            <nav className="navbar navb  navbar-expand-lg  p-4">
                <div className="container-fluid">
                  
                    <NavLink className="navbar-brand font-color-700 title" to="/">CodeWithPandey</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navul ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/courses ">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tutorial ">Tutorial</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/notes">Notes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/mygear">My Gear</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/workwithus">Contact With Us</NavLink>
                            </li>
                            <li className=" d-flex justify-content-evenly navbarbtnli">
                                <button className="px-1  mx-2 darkmodeIcon "><BsFillMoonStarsFill className="libtnmoon" /></button>
                                <button className="navbarbtn mx-2 btn ">Login</button>
                                <button className="navbarbtn btn ">SignUp</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            
                {/* bottom navbar here */}
            <nav className="navbar    navbar-expand-lg mx-4  p-1">
                <div className="container-fluid">
                    {/* <NavLink className="navbar-brand font-color-700 title " to="/"><ImHome /></NavLink> */}
                    <btn onClick={()=>navigate("/")} className="navbar-brand font-color-700 title"><ImHome /></btn>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navul ms-auto me-auto mb-2  mb-lg-0">
                            <li className="nav-item mx-2" >
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink className="nav-link font-color-700" to="/tutorial/html-home" >HTML</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link font-color-700" to="/tutorial/css ">CSS</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link font-color-700" to="/tutorial/js">JS</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link font-color-700" to="/tutorial/c">C</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link font-color-700" to="/tutorial/c++">C++</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link font-color-700" to="/tutorial/java">JAVA</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link font-color-700" to="/tutorial/python">PYTHON</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link font-color-700" to="/tutorial/php">PHP</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link font-color-700" to="/tutorial/react-js">REACT JS</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 d-none" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success searchbtn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}