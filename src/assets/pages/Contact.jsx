import './contact.css';
import youtube from "../images/contact_img/youtube.png"
import facebook from "../images/contact_img/facebook.png"
import linkdin from "../images/contact_img/linkedin.png"
import instagram from "../images/contact_img/instagram.png"

export default function Contact() {
  return (
    <section className="contact_section">
      <form className="contact_form">
        <label>
          სახელი / კომპანია:
          <input type="text" name="name" className="contact_input" placeholder="თქვენი სახელი" />
        </label>
        <label>
          ელ.ფოსტა:
          <input type="email" name="email" className="contact_input" placeholder="you@example.com" />
        </label>
        <label> 
          შეტყობინება:
          <textarea name="message" className="contact_textarea" placeholder="თქვენი ტექსტი" />
        </label>
        <button type="submit" className="contact_button">გაგზავნა</button>
      </form>
      <div className="contact_details">
        <div className="facebook_instagram">
          <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
          <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
        </div>
        <div className="facebook_instagram">
          <a href="https://www.linkedin.com/"><img src={linkdin} alt="" /></a>
          <a href="https://www.youtube.com/"><img src={youtube} alt="" /></a>
        </div>
        <p><img src="" alt="" />ტელეფონი: 598 09 09 09</p>
        <p><img src="" alt="" /> ელ.ფოსტა: info@example.com</p>
        <p><img src="" alt="" /> მისამართი: თბილისი, საქართველო</p>
      </div>
    </section>
  );
}
