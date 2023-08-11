// import React from 'react'
import Footer from "../Footer"
import "../App.css"
// import { NavLink } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
export default function Page404({mode}) {
  const navigate = useNavigate()
  return (
    <>
      <div className="Page404maindiv">
        <div className="divdata ">
          <h1 className={`text-${mode===true?"light":""}`}>404 - Page Not Found <span><img className="mt-4" src="https://hs-marketing.imgix.net/images/pages/404/illustration-flourish.png?ixlib=gatsbyHook-2.1.1&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=100&h=30" alt="error" /></span></h1>


          <p className={`${mode===true?"courseCardswhitenot":"pagr404divpcolor"}`}>We looked all over, but that page seems to have gotten away  from us. Try one of these links to get back on track.</p>
        </div>

        <button className={`btn ${mode===true?"btnn3":"btnn"}`} onClick={() => { navigate("/contact") }}>Learn More About Code With Pandey &gt; </button><br />
        <button  className={`btn ${mode===true?"btnn3":"btnn"}`} onClick={() => { navigate("/") }}>Go To Home &gt;</button>


      </div>
      <Footer mode={mode} />
    </>
  )
}
