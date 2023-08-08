// import React from 'react'
import { NavLink,  } from "react-router-dom";
import Footer from "../Footer";
import TutorialsCard from "./TutorialsCard";
// import Html_home from "./Html_home";

export default function Tutorial() {
  // const navigate  = useNavigate()

  return (
    <>
      <div>
        <div className="section2">
          <div className="containtparent">
            <h4 className="containt me-3">All Tutorials</h4>
            <h1> Free Tutorials For You </h1>
          </div>
        </div>
        <div className="cardholder d-flex flex-wrap justify-content-evenly">
          <TutorialsCard nav={<NavLink className={"nablinkinsidebtn"} to="python">Start Learning!</NavLink>} title={"Python Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/python.webp"} />

          <TutorialsCard nav={<NavLink className={"nablinkinsidebtn"} to="c">Start Learning!</NavLink>} title={"C Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/c.webp"} />

          <TutorialsCard nav={<NavLink className={"nablinkinsidebtn"} to="c++">Start Learning!</NavLink>} title={"C++ Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/cpp.webp"} />

          <TutorialsCard nav={<NavLink className={"nablinkinsidebtn"} to="java">Start Learning!</NavLink>} title={"Java Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/java.webp"} />

          <TutorialsCard nav={<NavLink className={"nablinkinsidebtn"} to="Html-home" >Start Learning!</NavLink>} title={"HTML Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/html.webp"} />

          <TutorialsCard nav={<NavLink className={"nablinkinsidebtn"} to="css">Start Learning!</NavLink>} title={"CSS Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/css.webp"} />

          <TutorialsCard nav={<NavLink className={"nablinkinsidebtn"} to="js">Start Learning!</NavLink>} title={"JavaScript Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/js.webp"} />

          <TutorialsCard nav={<NavLink className={"nablinkinsidebtn"} to="react-js">Start Learning!</NavLink>} title={"React JS Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/reactjs.webp"} />

          <TutorialsCard nav={<NavLink className={"nablinkinsidebtn"} to="php">Start Learning!</NavLink>} title={"PHP Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/php.webp"} />

        </div>
        {/* <NavLink to="Html-home" >html</NavLink>
        <NavLink to="css">css</NavLink> */}
        {/* <NavLink to="js">js</NavLink> */}
        {/* <NavLink to="c">c</NavLink> */}
        {/* <NavLink to="c++">c++</NavLink> */}
        {/* <NavLink to="java">java</NavLink> */}

        {/* <NavLink to="php">php</NavLink> */}
        {/* <NavLink to="react-js">react js</NavLink> */}
        {/* <NavLink to="javascript">Javascript</NavLink> */}
        {/* <button onClick={()=>navigate('css')}>pagae</button> */}
        {/* <Outlet /> */}

      </div>
      <Footer />
    </>
  )
}
