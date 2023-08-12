import React from "react";
import { NavLink, useParams } from "react-router-dom";


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


export default function CourseDetails() {
  const { name } = useParams();

  React.useEffect(() => {
    console.log("name>>>>>>>>>", name);
  }, [name]);

  return (
    <>
      {courseContent.map((item) => (
        <ul >
          {item.topicHeading}
          {item.topicNames.map((topic) => (
            <li >
              {" "}
              <NavLink to={`${name}/${topic}`}>
                {" "}
                {topic}
              </NavLink>{" "}
            </li>
          ))}
        </ul>
      ))}
      <h2>{name}</h2>
    </>
  );
}
