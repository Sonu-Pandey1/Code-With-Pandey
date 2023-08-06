// import React from 'react'
// import "/mainImg.avif"
import Typed from "react-typed"
import CourseCard from "./CourseCard"

export default function Home() {
  return (
    <div>
      <section className="container-fulid  heroSection  ">
        <div className="row mx-5  heroSectionRow   ">
          <div className="col ps-5  col-6 heroSectionLeftDiv ">
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
              {/* <img className="img-fluid" src="/mainImg.avif" alt="error" /> */}

            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <h2 className="text-center mt-3 ">Recommended Courses</h2>
        <div className="courseCards bg-danger">
         <div className="cardsWrapper mx-5 px-4 my-5">
         <div className="cardWrapper d-flex justify-content-between">
            <CourseCard title={"Python Tutorials - 100 Days of Code"} about={"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!"} imgUrl={"https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fpython-100-days-of-code-1%2F7wnove7K-ZQ-HD.jpg&w=384&q=75"}/>

            <CourseCard title={"Ultimate JavaScript Course"} about={"This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free!"} imgUrl={"https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fultimate-js-tutorial-hindi-1%2FJS-Thumb.jpg&w=384&q=75"}/>

            <CourseCard title={"React JS Tutorials For Beginners"} about={"React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up.  What are you waiting for? Just Enroll Buddy!"} imgUrl={"https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F090fefe24d23d47584f6ddc7eb5a241e.png&w=384&q=75"}/>
            
        </div>
         </div>
        </div>
      </section>
    </div>
  )
}
