// import React from 'react'

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
              {/* <form>
                <p>India Only</p>
                <h1>Apply Now!</h1>
                <label htmlFor="name">Full Name</label><br />
                <input type="text" placeholder="Enter Your Name " name="name" id="name" /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" placeholder="Enter Your Email" name="email" id="email" /><br />
                <label htmlFor="number">Phone Number</label><br />
                <input type="tel" placeholder="Enter Your Number" name="number" id="number" /><br />
                <label htmlFor="url">Link To Your Resume</label><br />
                <input type="url" placeholder="Enter Your Link" name="url" id="url" /><br />
                <label htmlFor="skill">Skill : </label><br />
                <div className="radiobtnContainer">
                  <input type="radio"/> Subtitle Writer
                  <input type="radio"/> Python Dev <br />
                  <input type="radio"/> Content Writer 
                  <input type="radio"/> PHP Dev <br />
                  <input type="radio"/> Video Editor 
                  <input type="radio"/> Javascript Dev <br />
                  <input type="radio"/> Mern Dev 
                  <input type="radio"/> Java Dev <br />
                </div>
                <p>We will be in touch soon!</p>

              </form> */}

              <div className="body">
                <div className="container cpntainerrrrr">
                  <form className="formm">
                    <div className="head">
                      <p className=" text-center">India Only </p>
                      <span className=" text-center">Apply Now!</span>

                    </div>
                    <div className="inputs">
                      <label htmlFor="name">Full Name</label><br />
                      <input type="text" placeholder="Enter Your Name " name="name" id="name" /><br />
                      <label htmlFor="email">Email</label><br />
                      <input type="email" placeholder="Enter Your Email" name="email" id="email" /><br />
                      <label htmlFor="number">Phone Number</label><br />
                      <input type="tel" placeholder="Enter Your Number" name="number" id="number" /><br />
                      <label htmlFor="url">Link To Your Resume</label><br />
                      <input type="url" placeholder="Enter Your Link" name="url" id="url" /><br />
                      <label htmlFor="skill">Skill : </label><br />
                      <div className="radiobtnContainer">
                        <input type="radio" /> Subtitle Writer
                        <input type="radio" /> Python Dev <br />
                        <input type="radio" /> Content Writer
                        <input type="radio" /> PHP Dev <br />
                        <input type="radio" /> Video Editor
                        <input type="radio" /> Javascript Dev <br />
                        <input type="radio" /> Mern Dev
                        <input type="radio" /> Java Dev <br />
                      </div>
                      <p>We will be in touch soon!</p>
                    </div>
                    <button>Submit</button>
                  </form>


                </div>

              </div>


            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
