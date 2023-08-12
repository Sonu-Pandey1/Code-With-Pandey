// import React from 'react'\
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

import { NavLink,  } from "react-router-dom";
import Footer from "../Footer";
import TutorialsCard from "./TutorialsCard";
// import Html_home from "./Html_home";

export default function Tutorial({mode}) {
  // const navigate  = useNavigate()
  useEffect(()=>{
     AOS.init({
      duration:"1000",
    //   delay:"100",
      // offset:"1000"
      
     });
  },[]);

  return (
    <>
      <div>
        <div className="section2">
          <div className="containtparent" data-aos="fade-down">
            <h4 className="containt me-3">All Tutorials</h4>
            <h1 className={`text-${mode===true?"light":""}`}> Free Tutorials For You </h1>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="cardholder d-flex flex-wrap justify-content-evenly">
          <TutorialsCard mode3={mode} nav={<NavLink className={"nablinkinsidebtn"} to="python">Start Learning!</NavLink>} title={"Python Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/python.webp"} />

          <TutorialsCard mode3={mode} nav={<NavLink className={"nablinkinsidebtn"} to="c">Start Learning!</NavLink>} title={"C Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/c.webp"} />

          <TutorialsCard mode3={mode} nav={<NavLink className={"nablinkinsidebtn"} to="c++">Start Learning!</NavLink>} title={"C++ Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/cpp.webp"} />

          <TutorialsCard mode3={mode} nav={<NavLink className={"nablinkinsidebtn"} to="java">Start Learning!</NavLink>} title={"Java Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/java.webp"} />

          <TutorialsCard mode3={mode} nav={<NavLink className={"nablinkinsidebtn"} to="Html-home" >Start Learning!</NavLink>} title={"HTML Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/html.webp"} />

          <TutorialsCard mode3={mode} nav={<NavLink className={"nablinkinsidebtn"} to="css">Start Learning!</NavLink>} title={"CSS Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/css.webp"} />

          <TutorialsCard mode3={mode} nav={<NavLink className={"nablinkinsidebtn"} to="js">Start Learning!</NavLink>} title={"JavaScript Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/js.webp"} />

          <TutorialsCard mode3={mode} nav={<NavLink className={"nablinkinsidebtn"} to="react-js">Start Learning!</NavLink>} title={"React JS Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/reactjs.webp"} />

          <TutorialsCard mode3={mode} nav={<NavLink className={"nablinkinsidebtn"} to="php">Start Learning!</NavLink>} title={"PHP Tutorial"} imgUrl={"https://www.codewithharry.com/img/notes/php.webp"} />
        </div>
      </div>
      <Footer mode={mode} />
    </>
  )
}
