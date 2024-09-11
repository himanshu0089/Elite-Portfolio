import React from 'react'
import { useState } from "react";
import "./About.css"
function About() {
  const [refer, setRefer] = useState("skills")
  return (

    <div className="about" id="about">
      <div className="content">
        <div className="row">
          <div className="about-col-1">
            <img src="Photos/me 3.jpg" alt="" />
          </div>
          <div className="about-col-2">
            {/* <p className='sub-title'>About Me</p> */}
            <div className="about-col-2-text">
              <p>I am a results-oriented web developer with a passion for crafting dynamic and
                intuitive web applications.
              </p>
            </div>

            <div className="reference" >
              <h3 className={refer === "skills" ? "active" : ""} onClick={() => setRefer("skills")}>Skills</h3>
              <h3 className={refer === "experience" ? "active" : ""} onClick={() => setRefer("experience")}>Experience</h3>
              <h3 className={refer === "education" ? "active" : ""} onClick={() => setRefer("education")}>Education</h3>
            </div>
            {refer === 'skills' && <div className="details">
              <div className="">
                <p> With expertise in React, JavaScript, and Node.js, I thrive on
                  solving complex problems and creating user-friendly solutions.
                  I have in depth knowledge of React, JavaScript, HTML, CSS, Redux, 
                  Node, Express, MongoDB, C++, Java, Sql, DBMS,typeScript,
                  I am seeking a challenging role where I can leverage my skills
                  to contribute to the success of a forward-thinking organization. My
                  dedication to excellence and drive for innovation make me a valuable
                  asset to any team.
              </p>
                <p className='skill'>Key Skills:</p>
                <p>React, JavaScript, HTML, CSS, Redux, Node, Express, MongoDB</p>
              </div>

            </div>

            }

            {refer === 'experience' && <div className="details">

              <div className="">
                <p>
                  I have more than two years of experience in Web Development for TCS with
                  core competencies in React, JavaScript, Redux and Node JS. I have worked
                  in two projects in two different domains( Airline Industry and Finance Sector).
                  I have build component-based UIs, using state management tools like Redux or
                  Context API.
                </p>
              </div>

            </div>}

            {refer === 'education' && <div className="details">
              <div className="educate">
                I have completed my 10th and 12th from G.L Public School with 95
                and 84 precent respectively. After that I pursued my B.E in CSE from Chandigarh University
              </div>
              <div className="education">
                <p>B.E</p>
                <p>Chandigarh University</p>
                <p>2016-2020</p>
                <p>7.42</p>
              </div>
            </div>}


          </div>

        </div>

      </div>
    </div>
  )
}

export default About