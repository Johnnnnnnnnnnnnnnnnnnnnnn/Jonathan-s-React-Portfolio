import './styles/Portfolio.css'
import rpsimg from './assets/rpsimg.png'
import portfolioimg from './assets/portfolioimg.jpg'
import quizimg  from './assets/quizimg.jpg'
import calendarimg from './assets/calendarimg.jpg'
import weatherimg from './assets/weatherimg.jpg'
import readmeimg from './assets/readmeimg.png'
function Portfolio() {
    return(
        <div className="porfolioBody">
            <h1 className="portfolioHeader">Portfolio</h1>
            <div className="card">
                <img className="card-image" src={rpsimg} alt="" />
                <h2 className="">Rock Paper Scissor</h2>
                <p className=""><a href="https://github.com/Johnnnnnnnnnnnnnnnnnnnnnn/RPS-with-JS">Repo Link</a></p>
                <p><a href="https://johnnnnnnnnnnnnnnnnnnnnnn.github.io/RPS-with-JS/">Deployed Link</a></p>
            </div>
            <div className="card">
                <img className="card-image" src={portfolioimg} alt="" />
                <h2 className="">HTML Portfolio</h2>
                <p className=""><a href="https://github.com/Johnnnnnnnnnnnnnnnnnnnnnn/Module-2-Challange-Portfolio">Repo Link</a></p>
                <p><a href="https://johnnnnnnnnnnnnnnnnnnnnnn.github.io/Module-2-Challange-Portfolio/">Deployed Link</a></p>
            </div>
            <div className="card">
                <img className="card-image" src={quizimg} alt="" />
                <h2 className="">Quiz Website</h2>
                <p className=""><a href="https://github.com/Johnnnnnnnnnnnnnnnnnnnnnn/Module-4-Quiz-Challange">Repo Link</a></p>
                <p><a href="https://johnnnnnnnnnnnnnnnnnnnnnn.github.io/Module-4-Quiz-Challange/">Deployed Link</a></p>
            </div>
            <div className="card">
                <img className="card-image" src={calendarimg} alt="" />
                <h2 className="">Daily Scheduler</h2>
                <p className=""><a href="https://github.com/Johnnnnnnnnnnnnnnnnnnnnnn/Challange-5-Daily-Scheduler">Repo Link</a></p>
                <p><a href="https://johnnnnnnnnnnnnnnnnnnnnnn.github.io/Challange-5-Daily-Scheduler/">Deployed Link</a></p>
            </div>
            <div className="card">
                <img className="card-image" src={weatherimg} alt="" />
                <h2 className="">Weather API</h2>
                <p className=""><a href="https://github.com/Johnnnnnnnnnnnnnnnnnnnnnn/challange-6-weather-API">Repo Link</a></p>
                <p><a href="https://johnnnnnnnnnnnnnnnnnnnnnn.github.io/challange-6-weather-API/">Deployed Link</a></p>
            </div>
            <div className="card">
                <img className="card-image" src={readmeimg} alt="" />
                <h2 className="">README Generator</h2>
                <p className=""><a href="https://github.com/Johnnnnnnnnnnnnnnnnnnnnnn/Challange-7-README-Generator">Repo Link</a></p>
                <p><a href="">No Deployed Link</a></p>

                <p></p>
            </div>
        </div>
        
    )
}

export default Portfolio