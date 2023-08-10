// import React from 'react'
import {BsFacebook,BsGithub,BsTwitter,BsInstagram  } from "react-icons/Bs"

import Footer from "../Footer";

export default function Contact({mode}) {
  return (
    <div >
      <div className={`contactWrapper ${mode===true?"courseCardswhite":"contactbgcolor"} `}>
      <h1 className={`text-center pt-5 text-${mode===true?"light":""}`}>Feel free to contact us!</h1>
      <div className="imgwrapper mt-4 d-flex justify-content-center">
      <img className="img img-fluid img-thumbnail contactImg" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg" alt="error" />
      
      </div>
      <div className="contactIcons d-flex justify-content-center">
      <BsFacebook className={`iconn${mode===true?"2":""}`}/>
      <BsTwitter className={`iconn${mode===true?"2":""}`}/>
      <BsInstagram className={`iconn${mode===true?"2":""}`}/>
      <BsGithub className={`iconn${mode===true?"2":""}`}/>

      </div>
      </div>
      
      <Footer mode={mode}/>
      
    </div>
  )
}
