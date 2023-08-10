// import React from 'react'
import { useState } from "react";
import Footer from "../Footer";
export default function Blog({mode}) {
  const [visiable, setvisiable] = useState(9);
  let handlePrevious =()=>{
    console.log("previous clicked >>>>>>",visiable)
    setvisiable(visiable-9)
  }
  let handleNext =()=>{
    console.log("next clicked >>>>>>",visiable)
    setvisiable(visiable+9)
  }
  let data = [
    {
      "id": 1,
      "title": "Using TailwindCSS with Python Flask",
      "description": "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
      "date": "Posted on - 22/3/2023"
    },
    {
      "id": 2,
      "title": "Exploring Power BI's Versatile Features: Creating a Table from an Existing One",
      "description": "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
      "date": "Posted on - 22/3/2023"
    },
    {
      "id": 3,
      "title": "50 Linux Commands You Should Know",
      "description": "Complete Tailwind CSS Course by CodeWithHarry in Hindi - Learn Tailwind CSS from scratch for free!",
      "date": "Posted on - 27/6/2023"
    },
    {
      "id": 4,
      "title": "Sanity.io Tutorials in Hindi",
      "description": "Sanity.io is the platform for structured content. This course will not only cover Sanity from starting to the end, but it has projects for hands-on experience.",
      "date": "Posted on - 22/3/23"
    },
    {
      "id": 5,
      "title": "Strapi Tutorial For Beginners",
      "description": "This course contains everything that you should know about Strapi. It is an open-source, Headless CMS that saves lot of time for developers by giving them freedom to use their favorite tools and frameworks.",
      "date": " Posted on - 22/4/2023"
    },
    {
      "id": 6,
      "title": "React Js Tutorials For Beginners",
      "description": "React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 7,
      "title": "Next.js Tutorials For Beginners",
      "description": "Complete Next.js Course by CodeWithHarry in Hindi - Learn Next.js from Scratch.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 8,
      "title": "General Python Errors",
      "description": "Being a coder, I can understand the pain and excitement while finding a bug or error in a code. This course contains some of the most famous or common errors in the Python language.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 9,
      "title": "C Language Practice Programs",
      "description": "This series contains programs for you to practice C Programming and related concepts. It has videos that will provide you with a proper explanation of the program and its logic.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 10,
      "title": "Python Game Development Tuts",
      "description": "If you're interested in game development, this course is for you. It will lead you through all the basic game development concepts and will give you an initial boost.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 11,
      "title": "OOPS Using Python Programming",
      "description": "If you don't know about Object Oriented Programming (OOP) Paradigm, then this course is for you. In this you'll learn about objects, classNamees and much more in Python language.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 12,
      "title": "Basic Python Programs With Code",
      "description": "This series contains basic Python programs. It's a concise and precise course, so if you have a couple of minutes or an hour, just get started. This course will surely add some value.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 13,
      "title": "Web Dev Using Flask and Python",
      "description": "This course will teach you everything you need to know about web development using Flask. It will lead you through each and every concept of Flask and will give you a good initial start!",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 14,
      "title": "Coding Discussion With Harry",
      "description": "Interested in general technology (coding) topics? If yes, then you must checkout this series, here you'll get tonnes of videos regarding most asked questions and other general questions.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 15,
      "title": "Learn In One Video",
      "description": "Don't have much time to watch the whole course's playlist? Don't worry, we've got you covered. This series contains one-shot videos of popular technologies, search for your required stack, and you're ready to get into it.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 16,
      "title": "C++ Tutorials For Beginners",
      "description": "This course contains all the concepts and exercises of the C++ language. If you're a mere beginner, you can start your coding journey with this course and ace your exams.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 17,
      "title": "Python Django Tutorials For Beginners",
      "description": "Django is a Python-based free and open-source web framework. If you already know Python and want to try web development, you can go with Django.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 18,
      "title": "Web Dev Tutorials For Beginners",
      "description": "This is one of my favorite courses. In this series, you'll learn about HTML, CSS, JavaScript, and everything needed to be a job-ready web developer. Just hop on, man.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 19,
      "title": "Python Tutorials For Absolute Beginners",
      "description": "This is one of the most-watched courses on this channel. If you want to create projects as early as possible, then this course is for you. You'll get dozen of projects in this course.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 20,
      "title": "Android Development Tutorials",
      "description": "Android Development is one of the booming career options nowadays, and many people are learning Android because it feels so good to create own app. You can also grab this opportunity by enrolling in this course.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 21,
      "title": "Java Tutorials For Beginners",
      "description": "If you don't know programming and want to start your career by learning Java as your first language, you can start with this course as it is for absolute beginners.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 22,
      "title": "Data Structures and Algorithms Course",
      "description": "Data Structure and Algorithm is one of the most crucial things to learn. This course will give you a complete understanding of Data Structure and its implementation.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 23,
      "title": "C Language Tutorials For Beginners",
      "description": "Even if you don't know the ABC of coding, start this course, and I can assure you that you'll be an intermediate-level coder after completion. Get started with C language.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 24,
      "title": "JavaScript Tutorials For Beginners",
      "description": "JavaScript is an essential element for the web developers. If you want to take your web development journey one step ahead then you enroll in this course.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 25,
      "title": "PHP Tutorials For Beginners",
      "description": "PHP is a general-purpose scripting language geared towards web development. This course will give you a complete and proper understanding of PHP concepts.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 26,
      "title": "Git and GitHub Tutorials For Beginners",
      "description": "If you're serious about coding and want to make a career out of it, then do learn Git and GitHub because it is something that you'll use at every phase of your job.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 27,
      "title": "Intermediate Python Tutorials",
      "description": "Wanna take your Python skills to the next level? This course is what you all need. It contains all the advanced concepts of the Python language. What??? Just tap on the 'Start Watching' button to get started.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 28,
      "title": "Data Science and Big Data Tutorials",
      "description": "This course will give you a gist of Data Science and Big Data. I'm sure you must have heard about Data Scientist. This series contains the content to become one of them.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 29,
      "title": "ML Tutorials For Beginners",
      "description": "Machine Learning is one of the exciting topics nowadays. And if you want to get a glimpse of ML, don't think twice. Just get started with this course.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 30,
      "title": "Python GUI Tkinter Tutorials",
      "description": "Console output is annoying sometimes, isn't it? That's why to get rid of the console, you can create GUI programs, and this is the course for you to start with. 'Spill some colors in your program.'",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 31,
      "title": "Python Practice Program Tuts",
      "description": "This series contains some of the exciting Python programs that one must try. You'll also get a proper explanation of the code. So, get started with this course to practice Python.",
      "date": " Posted on - 22/3/2023"
    },
    {
      "id": 32,
      "title": "Realtime PHP Chatroom Tutorials",
      "description": "This is one of the best applications of PHP and Jquery. In this series, we've developed a real-time chatroom, so if you're someone who likes project-based learning, this is for you.",
      "date": " Posted on - 22/3/2023"
    }
  ]
  return (
    <div>
      <h1 className="text-center mt-4  blogH1">Coding Articles</h1>
      <div className="cardcontainerrrr d-flex flex-wrap justify-content-center p-5 mb-5">
        {data.slice(0,visiable).map((items) => {
          return <div key={items.id}>
            <div className="card mb-5 shadow-lg" style={{ width: "50rem" }}>
              <div className="card-header">
                {items.date}
              </div>
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <p className="card-text">{items.description}</p>
                <button className="bg-color-700 cardBtn tutorialinsidbtn  btn " >Reed More</button>
              </div>
            </div>
          </div>
        })}
      </div>
      <div className="btnContainer d-flex justify-content-between  mx-5 ">
        <button disabled={visiable <= 9} className="btn btn-success " onClick={handlePrevious}>Previous</button>
        <button disabled={visiable >= data.length} className="btn btn-success" onClick={handleNext}>Next</button>
      </div>
      <Footer mode={mode}/>
    </div>
  )
}
