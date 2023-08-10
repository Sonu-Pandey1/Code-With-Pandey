// import React from 'react'
// import { NavLink } from "react-router-dom";

import TutorialsCard from "./TutorialsCard";
import Footer from "../Footer";

export default function Notes({mode}) {
  return (
    <div>
      <h1 className="NotesH1 mt-5 mb-4 ">Download Notes by CodeWithPandey</h1>
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
      <Footer mode={mode}/>
    </div>
  )
}
