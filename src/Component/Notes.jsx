// import React from 'react'
// import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

import TutorialsCard from "./TutorialsCard";
import Footer from "../Footer";

export default function Notes({mode}) {
  useEffect(()=>{
     AOS.init({
      duration:"1000",
    //   delay:"100",
      // offset:"1000"
      
     });
  },[]);
  return (
    <div>
      <h1 data-aos="fade-down" className="NotesH1 mt-5 mb-4 ">Download Notes by CodeWithPandey</h1>
      <div className="contttt" data-aos="zoom-in-up">
      <div className="cardHolder d-flex flex-wrap justify-content-evenly">
      <TutorialsCard mode4={mode}  des={"Download Notes Here"} notes={true} title={"Python Notes"} imgUrl={"https://www.codewithharry.com/img/notes/python.webp"} />

      <TutorialsCard  mode4={mode}  des={"Download Notes Here"} notes={true}  title={"C Notes"} imgUrl={"https://www.codewithharry.com/img/notes/c.webp"} />

      <TutorialsCard  mode4={mode}  des={"Download Notes Here"} notes={true} title={"Java Notes"} imgUrl={"https://www.codewithharry.com/img/notes/java.webp"}/>

      <TutorialsCard  mode4={mode}   des={"Download Notes Here"} notes={true} title={"HTML Notes"} imgUrl={"https://www.codewithharry.com/img/notes/html.webp"} />

      <TutorialsCard  mode4={mode}  des={"Download Notes Here"} notes={true} title={"CSS Notes"} imgUrl={"https://www.codewithharry.com/img/notes/css.webp"}/>

      <TutorialsCard  mode4={mode}  des={"Download Notes Here"} notes={true} title={"JavaScript Notes"} imgUrl={"https://www.codewithharry.com/img/notes/js.webp"}/>

      <TutorialsCard   mode4={mode} des={"Download Notes Here"} notes={true} title={"DSA Notes"} imgUrl={"https://www.codewithharry.com/img/notes/dsa.webp"}/>

      <TutorialsCard  mode4={mode} des={"Download Notes Here"} notes={true} title={"Android Notes"} imgUrl={"https://www.codewithharry.com/img/notes/android.webp"}/>
      </div>
      </div>
      <Footer mode={mode}/>
    </div>
  )
}
