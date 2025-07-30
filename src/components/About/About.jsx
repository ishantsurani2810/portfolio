import "./styles.css";
import ishant_surani_image from "../../assets/ishant_surani_image.webp";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import jqueryIcon from "../../assets/jquery-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            I'm a passionate frontend developer focused on building seamless, high-performing, and engaging user experiences. With a strong foundation in HTML5, CSS3, JavaScript, and React.js, I specialize in developing dynamic, responsive web interfaces.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            My core expertise lies in crafting responsive applications and integrating robust frontend solutions that align with modern web standards.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p>
            I’m also proficient in REST API integration, implementing CRUD operations, and enhancing application performance for better user engagement.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>🎓 Education</h3>
            <h4>Diploma in Computer Engineering</h4>
            <p>Monark University | Pursuing (Distance Learning)</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>💼 Professional Experience</h3>
            <h3>React.js Developer</h3>
            <p>PixelWibes IT Solutions | Ahmedabad</p>
            <p><strong>Duration:</strong> 1 Year (Ongoing)</p>
            <ul>
              <li>Working on live production projects using React.js</li>
              <li>Focused on dynamic UI/UX development and responsive design</li>
              <li>Handled complex API integrations and implemented efficient CRUD operations</li>
              <li>Collaborated with teams to deliver scalable, maintainable codebases</li>
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={600}>
          <div className="experience mt-5">
            <h3>Frontend Intern + Developer</h3>
            <p>Brainy Beam Info-Tech Pvt. Ltd | Ahmedabad</p>
            <p><strong>Duration:</strong> 6 Months</p>
            <ul>
              <li>Developed responsive web pages using HTML, CSS, and JavaScript</li>
              <li>Worked on real-world projects as part of a collaborative team</li>
              <li>Contributed to user interface improvements and frontend logic</li>
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>🛠️ Technical Skills</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          {[
            { src: htmlIcon, alt: "HTML5" },
            { src: cssIcon, alt: "CSS3" },
            { src: sassIcon, alt: "SASS/SCSS" },
            { src: boostrapIcon, alt: "Bootstrap" },
            { src: jsIcon, alt: "JavaScript" },
            { src: jqueryIcon, alt: "jQuery" },
            { src: reactIcon, alt: "React.js" },
            { src: tailwindIcon, alt: "Tailwind CSS" },
          ].map((icon, index) => (
            <div className="hability" key={index}>
              <ScrollAnimation animateIn="fadeInUp" delay={(index + 1) * 100}>
                <img src={icon.src} alt={icon.alt} title={icon.alt} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
