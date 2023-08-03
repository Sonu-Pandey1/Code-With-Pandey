import { BsFillMoonStarsFill } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import '../App.css'
export default function Navbar() {
    return (
        <>

            {/* <div classNameName="container-fulid">
                <div classNameName="nav  p-4 bg-danger ">
                    <div classNameName="navTitle">
                        <h5>CodeWithPandey</h5>
                    </div>
                    <div classNameName="navItems d-flex ms-auto">
                        <ul classNameName="d-flex justify-content-evenly">
                            <li>Home</li>
                            <li>Courses</li>
                            <li>Toturial</li>
                            <li>Blog</li>
                            <li>Notes</li>
                            <li>Contact</li>
                            <li>My Gear</li>
                            <li>Work With Us</li>
                        </ul>
                        <div classNameName="navItemsMainFetures">
                            <button><BsFillMoonStarsFill /></button>
                            <button>Login</button>
                            <button>Signup</button>
                        </div>
                    </div>
                </div>
            </div> */}


            <nav className="navbar navb  navbar-expand-lg  p-4">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">CodeWithPandey</a> */}
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
                                <NavLink className="nav-link"  to="/courses ">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tutorial">Tutorial</NavLink>
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
                                <button className="px-1  mx-2 darkmodeIcon "><BsFillMoonStarsFill className="libtnmoon"/></button>
                                <button className="navbarbtn mx-2 btn ">Login</button>
                                <button className="navbarbtn btn ">SignUp</button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>

            <nav className="navbar    navbar-expand-lg  p-4">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">CodeWithPandey</a> */}
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
                                <NavLink className="nav-link"  to="/courses ">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tutorial">Tutorial</NavLink>
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
                                <button className="px-1  mx-2 darkmodeIcon "><BsFillMoonStarsFill className="libtnmoon"/></button>
                                <button className="navbarbtn mx-2 btn ">Login</button>
                                <button className="navbarbtn btn ">SignUp</button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}