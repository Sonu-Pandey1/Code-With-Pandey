// import React from 'react'
import {BsFacebook,BsGithub,BsTwitter,BsInstagram  } from "react-icons/Bs"

import Footer from "../Footer";

export default function Contact({mode}) {
  return (
    <div>
      <div className="contactWrapper  ">
      <h1 className="text-center pt-5">Feel free to contact us!</h1>
      <div className="imgwrapper mt-4 d-flex justify-content-center">
      <img className="img img-fluid img-thumbnail contactImg" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg" alt="error" />
      
      </div>
      <div className="contactIcons d-flex justify-content-center">
      <BsFacebook className="icon"/>
      <BsTwitter className="icon"/>
      <BsInstagram className="icon"/>
      <BsGithub className="icon"/>

      </div>
      </div>
      
      <Footer mode={mode}/>
      
    </div>
  )
}
