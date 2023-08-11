// import React from 'react'
import Footer from "../Footer"

export default function WorkWithUs({mode}) {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-bottom">
          <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-6 item text-lg-center">
            <h1 className={`kachuna2 text-${mode===true?"light":""}`}>We are hiring!</h1>
            <p className={` kachuna ${mode===true?"courseCardswhitenot":""} mb-md-0 mb-5`}>We are looking for freelance Developers, Subtitle writers, Content writers and Video editors. If you think you are fit for the role. Submit the form. Make sure you have a valid email so we can contact you back in case your application gets selected. Cheers!</p>
          </div>
          <div className=" col-xxl-6 col-xl-6 col-lg-5 col-md-6 ">
            <div className="formContainerWorkWithUs">    
              <div className="body">
                <div className={`container shadow ${mode===true?"courseCardswhite":""} cpntainerrrrr`}>
                  <form className="formm">
                    <div className="head ">
                      <p className={`text-center ${mode===true?"courseCardswhitenot":""}`}>India Only </p>
                      <span className={` text-center text-${mode===true?"light":""}`}>Apply Now!</span>
                    </div>
                    <div className={`inputs ${mode===true?"courseCardswhitenot":""}`}>
                      <label htmlFor="name">Full Name</label><br />
                      <input type="text" placeholder="Enter Your Name " name="name" id="name" /><br /><br />
                      <label htmlFor="email">Email</label><br />
                      <input type="email" placeholder="Enter Your Email" name="email" id="email" /><br /><br />
                      <label htmlFor="number">Phone Number</label><br />
                      <input type="tel" placeholder="Enter Your Number" name="number" id="number" /><br /><br />
                      <label htmlFor="url">Link To Your Resume</label><br />
                      <input type="url" placeholder="Enter Your Link" name="url" id="url" /><br />
                    </div>
                    <div className={`skillsContainer ${mode===true?"courseCardswhitenot":""}`}>
                      <label htmlFor="skill">Skill : </label><br />
                      <div className={`radiobtnContainer  ${mode===true?"courseCardswhitenot":""}`}>
                        <ul>
                          <li><input name="radio" className="dd " type="radio" /> Subtitle Writer</li>
                          <li><input name="radio" className="dd" type="radio" /> Python Dev</li>
                          <li><input name="radio" className="dd" type="radio" /> Content Writer</li>
                          <li><input name="radio" className="dd" type="radio" /> Content Writer</li>
                          <li><input name="radio" className="dd" type="radio" /> PHP Dev </li>

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
                    <div className={`${mode===true?"courseCardswhitenot":""}`}>We will be in touch soon!</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer mode={mode}/>
    </div>
  )
}
