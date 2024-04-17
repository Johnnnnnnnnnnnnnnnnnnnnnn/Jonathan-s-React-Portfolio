import React, { useState } from 'react'
import Aboutme from './Aboutme'
import Portfolio from './Portfolio'
import Contactme from './Contactme'
import Resume from './Resume'
import Footer from './Footer'
import './styles/Body.css'

function Header() {
    const [selectedOption, setSelectedOption] = useState(1);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
  };
    return(
        <>
            <header className="mainHeader">
                <h1 className="myName">Jonathan Santoso</h1>
                <nav>
                    <ul className="unorderedList">
                        <li className={`listItem boldFont ${selectedOption === 1 ? 'active' : ''}`} onClick={() => handleOptionClick(1)}>About Me</li>
                        <li className={`listItem boldFont ${selectedOption === 2 ? 'active' : ''}`} onClick={() => handleOptionClick(2)}>Portfolio</li>
                        <li className={`listItem boldFont ${selectedOption === 3 ? 'active' : ''}`} onClick={() => handleOptionClick(3)}>Contact Me</li>
                        <li className={`listItem boldFont ${selectedOption === 4 ? 'active' : ''}`} onClick={() => handleOptionClick(4)}>Resume</li>
                    </ul>
                </nav>
            </header>
            <body>
                <div>
                    {selectedOption === 1 && <Option1Component/>}
                    {selectedOption === 2 && <Option2Component/>}
                    {selectedOption === 3 && <Option3Component/>}
                    {selectedOption === 4 && <Option4Component/>}
                </div>
            </body>
        </>
        
    );
}

function Option1Component() {
    return(
        <>
            <Aboutme/>
            <Footer/>
        </>   
    )
  }
  
function Option2Component() {
    return(
        <Portfolio/>
    )
  }
  
function Option3Component() {
    return(
        <Contactme/>
    )
  }

function Option4Component() {
    return(
        <Resume/>
    )
  }

export default Header