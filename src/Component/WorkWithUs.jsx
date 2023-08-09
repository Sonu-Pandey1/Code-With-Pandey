// import React from 'react'
import Footer from "../Footer"

export default function WorkWithUs() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-bottom">
          <div className="col-lg-6 item text-lg-center">
            <h1>We are hiring!</h1>
            <p>We are looking for freelance Developers, Subtitle writers, Content writers and Video editors. If you think you are fit for the role. Submit the form. Make sure you have a valid email so we can contact you back in case your application gets selected. Cheers!</p>
          </div>
          <div className="col-lg-6">
            <div className="formContainerWorkWithUs">    
              <div className="body">
                <div className="container shadow  cpntainerrrrr">
                  <form className="formm">
                    <div className="head">
                      <p className=" text-center">India Only </p>
                      <span className=" text-center">Apply Now!</span>
                    </div>
                    <div className="inputs">
                      <label htmlFor="name">Full Name</label><br />
                      <input type="text" placeholder="Enter Your Name " name="name" id="name" /><br /><br />
                      <label htmlFor="email">Email</label><br />
                      <input type="email" placeholder="Enter Your Email" name="email" id="email" /><br /><br />
                      <label htmlFor="number">Phone Number</label><br />
                      <input type="tel" placeholder="Enter Your Number" name="number" id="number" /><br /><br />
                      <label htmlFor="url">Link To Your Resume</label><br />
                      <input type="url" placeholder="Enter Your Link" name="url" id="url" /><br />
                    </div>
                    <div className="skillsContainer">
                      <label htmlFor="skill">Skill : </label><br />
                      <div className="radiobtnContainer">
                        <ul>
                          <li><input className="dd " type="radio" /> Subtitle Writer</li>
                          <li><input className="dd" type="radio" /> Python Dev</li>
                          <li><input className="dd" type="radio" /> Content Writer</li>
                          <li><input className="dd" type="radio" /> Content Writer</li>
                          <li><input className="dd" type="radio" /> PHP Dev </li>

                        </ul>
                        <ul>
                          <li><input className="dd" type="radio" /> Video Editor</li>
                          <li><input className="dd" type="radio" /> Javascript Dev </li>
                          <li><input className="dd" type="radio" /> Mern Dev</li>
                          <li><input className="dd" type="radio" /> Java Dev</li>
                        </ul>
                      </div>
                    </div>
                    <button>Submit</button>
                    <div>We will be in touch soon!</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
