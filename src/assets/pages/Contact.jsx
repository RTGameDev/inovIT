import './contact.css';

export default function Contact() {
  return (
    <section className="contact_section">
      <h2 className="contact_header">კონტაქტი = ახტი და მახტი!</h2>
      <form className="contact_form">
        <label>
          სახელი:
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
        <p>📞 ტელეფონი: 598 09 09 09</p>
        <p>📧 ელ.ფოსტა: info@example.com</p>
        <p>🏢 მისამართი: თბილისი, საქართველო</p>
      </div>
    </section>
  );
}
