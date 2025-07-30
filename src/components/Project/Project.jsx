import "./styles.css";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <section className="project-section" id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/ishantsurani2810/freshfruithub" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://fresh-fruits-hub.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Fresh-Fruit-Hub</h3>
              <p>
                Introducing Fresh Fruit Hub, a React.js powered mini project showcasing a dynamic Home page filled with products, testimonials, advertisements, and engaging videos. Explore a news page brimming with insightful fruit-related blogs, alongside Contact Us and About Us pages for a complete fruit-centric experience!
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/ishantsurani2810/Holiday-Travel-App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://holiday-travel-app.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> 
                </div>
            </header>
            <div className="body">
              <h3>Travel-App</h3>
              <p> The Holiday-Travel app, built on React.js, offers seamless navigation across four pages: About Us, Contact Us, and a Home page featuring responsive details, all adorned with captivating CSS3 styling. Perfect for exploring your next adventure with ease and style! </p>
            </div>
            <footer> <ul className="tech-list"> <li>React.js</li> <li>CSS3</li> <li>JavaScript</li> </ul> </footer>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
} 