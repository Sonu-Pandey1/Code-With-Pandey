// import React from 'react'
// import "/mainImg.avif"
import Typed from "react-typed"

export default function Home() {
  return (
    <div>
      <section className="container-fulid  heroSection ">
        <div className="row mx-5  heroSectionRow   ">
          <div className="col ps-5  col-6  heroSectionLeftDiv">
            <div className="animationleftdiv">
              <h1>Welcome to
                <Typed className="Typinganimation px-1"
                  strings={[
                    " CodeWithPandey "
                  ]}
                  typeSpeed={50}
                  showCursor={false}
                />
              </h1>
              <h6 >Learn
                <Typed className="Typinganimation px-1"
                  strings={[
                    " C Programming ",
                    " C++",
                    " DSA",
                    " Java",
                    " Python",
                    " Data Science",
                    " Machine Learning",
                    " Web Development",
                    " App Development",
                  ]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                /></h6>
            </div>
            <p>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
            <div className="heroSectionBtns mt-4">
              <button className="btn btn-dark ">Free Courses</button>
              <button className="btn btn-light ms-3 border-secondary-subtle ">Explore Blog</button>
            </div>
          </div>
          <div className="col col-6 heroSectionRightDiv">

            <div className="mainimg">
              {/* <img src="/mainImg.avif" alt="error" /> */}

            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <h2 className="text-center mt-3 ">Recommended Courses</h2>
      </section>
    </div>
  )
}
