
import rccss from './rightContain.module.css';
import { useState, useEffect } from "react";
// import { courseContent } from "../../../service/javascrpit";
import { useParams } from "react-router-dom";


const courseContent =[
    {
        topicHeading:"introduction",
        topicNames:["JS Introduction","JS Execution","Node.js Installation"]
        
    },
    {
        topicHeading:"JAVASCRIPT VARIABLES",
        topicNames:["What are Variables?", "Variable Naming Rules", "var vs let vs const", "Primitives and Objects", "Operators and Expressions"]
        
    }
  ]


export default function RightContain() {
  const {name}=useParams()
  const [length,setLength]=useState(0)
  const [array, setarray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const details=courseContent
  useEffect(()=>{
    for(let i in details){
      setLength(details[i].topicNames.length);
    }
    
  },[details, length])

  // console.log("length",length)

  function decrement() {
    setCurrentPage(currentPage - 1);
  }
  function increment() {
    setCurrentPage(currentPage + 1);
  }
  useEffect(() => {
    setarray(details[1].topicNames);
  }, [array, details]);
  return (
    <>
      <div className={rccss.btnarea}>
        <button
          id={rccss.previousbtn}
          className={rccss.Button}
          disabled={currentPage <= length ? true : false}
          onClick={decrement}
        >
          Previous
        </button>
        <button
          disabled={currentPage >= length ? true : false}
          onClick={increment}
          className={rccss.Button}
        >
          Next
        </button>
      </div>

     

      <div className={rccss.introcontain}>
        <h2>{name} Introduction</h2>
        <ul>
          <h3>What is HTML?</h3>
          <li>HTML is an initialism for "HyperText Markup Language".</li>
          <li>It is the language of the web.</li>
          <li>It is used to create websites.</li>
          <li>
            HTML is used for making pages of the website also called webpages
            that we see on the interne
          </li>
          <li>It consists of a set of tags.</li>
        </ul>
      </div>

      <div id={rccss.paracontainer} className="m-3">
        <h2>Why the word HyperText & Markup Language</h2>
        <p>
          The word hypertext markup language comprises the words “hypertext” and
          “markup language”. The term "hypertext" refers to the linking of text
          with other documents and “markup language” refers to a language that
          uses a set of tags.
          <br />
          So, HTML is the linking of text with other documents using some set of
          tags.
        </p>
        <p>
          <span>Note:-</span> Tags refers to some meaningful texts enclosed in
          angle braces For eg. Each tag has a different meaning and importance
          in building an HTML page which can affect the web page in its own ways{" "}
        </p>
      </div>
    </>
  );
}


