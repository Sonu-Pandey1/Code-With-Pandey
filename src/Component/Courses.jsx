
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

export default function Courses({mode}) {

  useEffect(()=>{
     AOS.init({
      duration:"1000",
    //   delay:"100",
      // offset:"1000"
      
     });
  },[]);
  
  let handlePrevious =()=>{
    console.log("previous clicked >>>>>>",visiable)
    setvisiable(visiable-9)
  }
  let handleNext =()=>{
    console.log("next clicked >>>>>>",visiable)
    setvisiable(visiable+9)
  }
  const navigate = useNavigate()
  const [visiable, setvisiable] = useState(9);
  console.log(visiable)
  let data = [
    {
      "id": 1,
      "title": "Python Tutorials - 100 Days of Code",
      "description": "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fpython-100-days-of-code-1%2F7wnove7K-ZQ-HD.jpg&w=384&q=75"
    },
    {
      "id": 2,
      "title": "Ultimate JavaScript Course",
      "description": "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fultimate-js-tutorial-hindi-1%2FJS-Thumb.jpg&w=384&q=75"
    },
    {
      "id": 3,
      "title": "Tailwind Course In Hindi",
      "description": "Complete Tailwind CSS Course by CodeWithHarry in Hindi - Learn Tailwind CSS from scratch for free!",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fe1c843acc10c59c60504cd438a082c6d.png&w=384&q=75"
    },
    {
      "id": 4,
      "title": "Sanity.io Tutorials in Hindi",
      "description": "Sanity.io is the platform for structured content. This course will not only cover Sanity from starting to the end, but it has projects for hands-on experience.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fsanity-tutorial-in-hindi-1%2FSanity-Thumb.jpg&w=384&q=75"
    },
    {
      "id": 5,
      "title": "Strapi Tutorial For Beginners",
      "description": "This course contains everything that you should know about Strapi. It is an open-source, Headless CMS that saves lot of time for developers by giving them freedom to use their favorite tools and frameworks.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fstrapi-tutorial-in-hindi-1%2FStrapi-Thumb.jpg&w=384&q=75"
    },
    {
      "id": 6,
      "title": "React Js Tutorials For Beginners",
      "description": "React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F090fefe24d23d47584f6ddc7eb5a241e.png&w=384&q=75"
    },
    {
      "id": 7,
      "title": "Next.js Tutorials For Beginners",
      "description": "Complete Next.js Course by CodeWithHarry in Hindi - Learn Next.js from Scratch.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F62f60049963012281edcc77dd2ec031b.png&w=384&q=75"
    },
    {
      "id": 8,
      "title": "General Python Errors",
      "description": "Being a coder, I can understand the pain and excitement while finding a bug or error in a code. This course contains some of the most famous or common errors in the Python language.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fc02d6cddcae8d68f4dc594a1f6c851d2.png&w=384&q=75"
    },
    {
      "id": 9,
      "title": "C Language Practice Programs",
      "description": "This series contains programs for you to practice C Programming and related concepts. It has videos that will provide you with a proper explanation of the program and its logic.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fd9800649e08234d24d76cb4698844aa1.png&w=384&q=75"
    },
    {
      "id": 10,
      "title": "Python Game Development Tuts",
      "description": "If you're interested in game development, this course is for you. It will lead you through all the basic game development concepts and will give you an initial boost.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F638637414b878e840719ef217bfdfb24.png&w=384&q=75"
    },
    {
      "id": 11,
      "title": "OOPS Using Python Programming",
      "description": "If you don't know about Object Oriented Programming (OOP) Paradigm, then this course is for you. In this you'll learn about objects, classes and much more in Python language.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F288cb343ae0bc71833e4ed2304ef5b73.png&w=384&q=75"
    },
    {
      "id": 12,
      "title": "Basic Python Programs With Code",
      "description": "This series contains basic Python programs. It's a concise and precise course, so if you have a couple of minutes or an hour, just get started. This course will surely add some value.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F04516e12269f92c93d5857c511ba7fb1.png&w=384&q=75"
    },
    {
      "id": 13,
      "title": "Web Dev Using Flask and Python",
      "description": "This course will teach you everything you need to know about web development using Flask. It will lead you through each and every concept of Flask and will give you a good initial start!",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fee73fdc0c096dc971978e0887853595a.png&w=384&q=75"
    },
    {
      "id": 14,
      "title": "Coding Discussion With Harry",
      "description": "Interested in general technology (coding) topics? If yes, then you must checkout this series, here you'll get tonnes of videos regarding most asked questions and other general questions.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F157872dd5dc5fe6b49cc48f29a30a772.png&w=384&q=75"
    },
    {
      "id": 15,
      "title": "Learn In One Video",
      "description": "Don't have much time to watch the whole course's playlist? Don't worry, we've got you covered. This series contains one-shot videos of popular technologies, search for your required stack, and you're ready to get into it.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F9d95005147356658c81eadf3386607c0.png&w=384&q=75"
    },
    {
      "id": 16,
      "title": "C++ Tutorials For Beginners",
      "description": "This course contains all the concepts and exercises of the C++ language. If you're a mere beginner, you can start your coding journey with this course and ace your exams.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F68ae8da41f7d66599dc95c0885759cb6.png&w=384&q=75"
    },
    {
      "id": 17,
      "title": "Python Django Tutorials For Beginners",
      "description": "Django is a Python-based free and open-source web framework. If you already know Python and want to try web development, you can go with Django.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fff3e8ac2e1e65f9940260b30461d3c13.png&w=384&q=75"
    },
    {
      "id": 18,
      "title": "Web Dev Tutorials For Beginners",
      "description": "This is one of my favorite courses. In this series, you'll learn about HTML, CSS, JavaScript, and everything needed to be a job-ready web developer. Just hop on, man.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fc60b26139e9868b92d6ada1cdf7810cf.png&w=384&q=75"
    },
    {
      "id": 19,
      "title": "Python Tutorials For Absolute Beginners",
      "description": "This is one of the most-watched courses on this channel. If you want to create projects as early as possible, then this course is for you. You'll get dozen of projects in this course.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F45f2c8ae4ba61cbf76d8f6d64c182359.png&w=384&q=75"
    },
    {
      "id": 20,
      "title": "Android Development Tutorials",
      "description": "Android Development is one of the booming career options nowadays, and many people are learning Android because it feels so good to create own app. You can also grab this opportunity by enrolling in this course.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fe6f7ca4e6ac6deb87658f1d891128085.png&w=384&q=75"
    },
    {
      "id": 21,
      "title": "Java Tutorials For Beginners",
      "description": "If you don't know programming and want to start your career by learning Java as your first language, you can start with this course as it is for absolute beginners.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F2aefee3112fe9273f4d7d13541ab7094.png&w=384&q=75"
    },
    {
      "id": 22,
      "title": "Data Structures and Algorithms Course",
      "description": "Data Structure and Algorithm is one of the most crucial things to learn. This course will give you a complete understanding of Data Structure and its implementation.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F5286f40260e65257448301d19d2d8935.jpg&w=384&q=75"
    },
    {
      "id": 23,
      "title": "C Language Tutorials For Beginners",
      "description": "Even if you don't know the ABC of coding, start this course, and I can assure you that you'll be an intermediate-level coder after completion. Get started with C language.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fbcbd66927239e25555ed8ce2385b8879.png&w=384&q=75"
    },
    {
      "id": 24,
      "title": "JavaScript Tutorials For Beginners",
      "description": "JavaScript is an essential element for the web developers. If you want to take your web development journey one step ahead then you enroll in this course.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fcc52fae1bb5de526a1690997c0b6f8a1.png&w=384&q=75"
    },
    {
      "id": 25,
      "title": "PHP Tutorials For Beginners",
      "description": "PHP is a general-purpose scripting language geared towards web development. This course will give you a complete and proper understanding of PHP concepts.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F9bff268ac2e0dc20f420b526087fc4a1.png&w=384&q=75"
    },
    {
      "id": 26,
      "title": "Git and GitHub Tutorials For Beginners",
      "description": "If you're serious about coding and want to make a career out of it, then do learn Git and GitHub because it is something that you'll use at every phase of your job.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F0cc70fb920f432f8f4c479330c7a41e0.png&w=384&q=75"
    },
    {
      "id": 27,
      "title": "Intermediate Python Tutorials",
      "description": "Wanna take your Python skills to the next level? This course is what you all need. It contains all the advanced concepts of the Python language. What??? Just tap on the 'Start Watching' button to get started.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F0b409e41bed725a3e3fc684602296c31.png&w=384&q=75"
    },
    {
      "id": 28,
      "title": "Data Science and Big Data Tutorials",
      "description": "This course will give you a gist of Data Science and Big Data. I'm sure you must have heard about Data Scientist. This series contains the content to become one of them.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fd3c4ddaaa6d7ac69f590baeba279e806.png&w=384&q=75"
    },
    {
      "id": 29,
      "title": "ML Tutorials For Beginners",
      "description": "Machine Learning is one of the exciting topics nowadays. And if you want to get a glimpse of ML, don't think twice. Just get started with this course.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F488c39e3286b452d8a0b30de80257f81.png&w=384&q=75"
    },
    {
      "id": 30,
      "title": "Python GUI Tkinter Tutorials",
      "description": "Console output is annoying sometimes, isn't it? That's why to get rid of the console, you can create GUI programs, and this is the course for you to start with. 'Spill some colors in your program.'",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fe5df82b9c1a91d57aedcea1af1df7bdc.png&w=384&q=75"
    },
    {
      "id": 31,
      "title": "Python Practice Program Tuts",
      "description": "This series contains some of the exciting Python programs that one must try. You'll also get a proper explanation of the code. So, get started with this course to practice Python.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2Fd4c53ce89929c4dc6671f724042c481d.png&w=384&q=75"
    },
    {
      "id": 32,
      "title": "Realtime PHP Chatroom Tutorials",
      "description": "This is one of the best applications of PHP and Jquery. In this series, we've developed a real-time chatroom, so if you're someone who likes project-based learning, this is for you.",
      "imgUrl": "https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F0c9fbb82efe5437883daf3e96ab77e10.png&w=384&q=75"
    }
  ]
console.log(data.length)

  return (
    <>
      <div className="section2">
        <div className="containtparent" data-aos="fade-down">
          <h4 className="containt"> All Courses</h4>
          <h1 className={`text-${mode===true?"light":""}`}>Premium Courses</h1>
        </div>
      </div>
      {/* <h1 className="mt-4 text-center">Premium Courses</h1> */}
      <div className="d-flex  flex-wrap justify-content-evenly m-4">
        {data.slice(0, visiable).map((items) => {
          return (<div data-aos="zoom-in-up" className="cardWrapper" key={items.id}>
            <div className="cardContainer ">
              <div className={`card mb-5 shadow ${mode===true?"courseCardswhite":""}`} style={{ width: "24rem" }}>
                <img src={items.imgUrl} className="card-img-top img-fluid img-thumbnail rounded-4" alt="error" />
                <div className="card-body">
                  <h5 className={`card-title text-${mode===true?"light":""} `}>{items.title}</h5>
                  <p className={`card-text parag mt-3 ${mode===true?"courseCardswhitenot":""} `}>{items.description}</p>
                  <button className="bg-color-700 mx-3 btn cardBtn" onClick={() => navigate("/tutorial")} >Start Watching</button>
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </div>
      <div className="btnContainer d-flex justify-content-between mx-5 ">
        <button disabled={visiable<=9 } className="btn btn-success " onClick={handlePrevious}>Previous</button>
        <button disabled={visiable>=data.length} className="btn btn-success" onClick={handleNext}>Next</button>
      </div>
      
      <Footer mode={mode}/>
    </>
  )

}
