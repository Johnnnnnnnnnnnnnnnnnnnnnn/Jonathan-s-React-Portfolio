import './styles/Body.css'
import Profile from './assets/profile.jpg'
import Githublogo  from './assets/Githublogo.jpg'
import Linkedinlogo from './assets/Linkedinlogo.jpg'
import Instagramlogo from './assets/Instagramlogo.jpg'

function Footer() {
    return (
        <footer>
            <ul className="unorderedList">
                <li className="listItem">
                    <a href="https://github.com/Johnnnnnnnnnnnnnnnnnnnnnn">
                        <div className="footersDiv">
                            <img className="footerImg" src={Githublogo} alt="" />
                            <p>Github</p>
                        </div>
                    </a>
                </li>
                <li className="listItem">
                    <a href="https://www.linkedin.com/in/jonathan-santoso-3776402b8/">
                        <div className="footersDiv">
                            <img className="footerImg" src={Linkedinlogo} alt="" />
                            <p>Linkedin</p>
                        </div>
                    </a>
                </li>
                <li className="listItem">
                    <a href="https://www.instagram.com/jonathan_san120/">
                        <div className="footersDiv">
                            <img className="footerImg" src={Instagramlogo} alt="" />
                            <p>Instagram</p>
                        </div>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer