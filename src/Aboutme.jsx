import profile from './assets/profile.jpg'
import './styles/Aboutme.css'

function Aboutme() {
    return(
        <div>
            <h1  className="margin">About Me</h1>
            <img className="profileImg margin" src={profile} alt="my profile picture" />
            <p className="margin">
                Hi there! I'm a junior web developer eager to dive into the professional world of programming. 
                With a fresh perspective and a passion for technology, 
                I'm excited to take my first steps in this dynamic field.
            </p>
            <p className="margin">
                My journey into web development began with a spark of curiosity and a thirst for knowledge. 
                As a newcomer to programming, I've been immersing myself in the fundamentals of HTML, CSS, JavaScript, and recently even learning React by trying to build websites from scratch. 
                Each line of code I write is a step towards mastering these essential tools and techniques.
            </p>
            <p className="margin">
                Although I may be new to programming, I bring a wealth of enthusiasm and a willingness to learn. 
                I thrive in environments where creativity and innovation are encouraged, and I'm eager to collaborate with others to bring ideas to life. 
                While I may face challenges along the way, I'm committed to growth and improvement, embracing each obstacle as an opportunity to learn and evolve.
            </p>
            <p className="margin">
                As I embark on this exhilarating journey, I'm filled with optimism and excitement for the adventures that lie ahead. 
                With determination and perseverance, I'm confident that I'll soon become a proficient and respected web developer.
            </p>
        </div>
    )
}

export default Aboutme