import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact({ data }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_vishali",
        "template_8rev36o",
        form.current,
        "g8aOv95A0a2Y02PtS"
      )
      .then(() => {
        setStatus("Message sent successfully ✅");
        form.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-content">

        <h2 className="section-title">{data?.title}</h2>

        <p className="contact-text">{data?.desc}</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Write Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {/* STATUS MESSAGE */}
        {status && (
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            {status}
          </p>
        )}

        <div className="contact-info">
          <a href={`mailto:${data?.email}`}>
            {data?.email}
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;