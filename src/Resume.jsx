import React from 'react'
import './styles/Resume.css'

function Resume() {
    return(
        <div>
            <h1 className="margin">Resume</h1>
            <h2 className="margin">Download My <a href="https://drive.google.com/file/d/18iHpY64yi3KMDBkIDjkkFAfvXqde0gRe/view?usp=sharing" download>Resume</a></h2>
            <h2 className="margin">Front-End</h2>
            <ul className="margin">
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>Responsive Design</li>
            </ul>
            <h2 className="margin">Back-End</h2>
            <ul className="margin">
                <li>Node.js</li>
                <li>Express</li>
                <li>APIs</li>
                <li>SQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>GraphQL</li>
            </ul>
            <h2 className="margin">Programming Languages</h2>
            <ul className="margin">
                <li>JavaScript: Advanced</li>
                <li>Python: Intermidiate</li>
                <li>C#: Beginner</li>
            </ul>
        </div>
    )
}

export default Resume