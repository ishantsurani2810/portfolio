import "./styles.css";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <section className="contact-section" id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ishantsurani290@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ishantsurani290@gmail.com">ishantsurani290@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918490856291"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918490856291">(+91) 8490856291</a>
        </div>  
      </div>
      <Form></Form>
    </section>
  )
} 