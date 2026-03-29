import "./Contact.css";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import ContactHero from "./ContactHero";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.msg || "Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
        });
      } else {
        toast.error(data.msg || "Failed to send message");
      }
    } catch (error) {
      console.log("submit error:", error);
      toast.error("Server error");
    }
  };

  return (
    <section className="contact-area">
      <Helmet>
        <title>Contact Brick Vista Construction | Construction Company in India</title>
        <meta
          name="description"
          content="Contact Brick Vista Construction for commercial, residential, hospital, infrastructure and turnkey construction projects in India. Reach our offices in Bengaluru, Mumbai and Prayagraj."
        />
        <meta
          name="keywords"
          content="contact construction company India, Brick Vista Construction contact, construction company Prayagraj, construction company Bengaluru, construction company Mumbai, turnkey construction India, civil contractor India"
        />
        <link rel="canonical" href="https://brickvista.in/contact" />

        <meta property="og:title" content="Contact Brick Vista Construction" />
        <meta
          property="og:description"
          content="Get in touch with Brick Vista Construction for trusted construction and engineering solutions across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brickvista.in/contact" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Brick Vista Construction" />
        <meta
          name="twitter:description"
          content="Contact Brick Vista Construction for construction, civil engineering and turnkey project solutions in India."
        />
      </Helmet>

      <ToastContainer position="top-right" autoClose={3000} />

      <ContactHero />

      <div className="container">
        <div className="contact-row">
          <div className="contact-left">
            <h1 className="section-title">
              Contact <span>Brick Vista Construction</span>
            </h1>

            <p>
              Brick Vista Construction provides trusted construction, engineering,
              infrastructure and turnkey project solutions across India. Contact our
              team for project discussions, quotations, site visits and business inquiries.
            </p>

            <h2 className="section-title">
              Our <span>Office</span>
            </h2>

            <p><FaMapMarkerAlt className="icon" /> 21st Main Road, RK Colony, 2nd Phase, JP Nagar, Bengaluru – 560078</p>
            <p><FaMapMarkerAlt className="icon" /> G-3, Krishna Chaubey Compound, Gen Arun Kumar Vaidya Marg, Goregaon East, Mumbai – 400063</p>
            <p><FaMapMarkerAlt className="icon" /> Bungalow No. 262, AN JHA Marg, Near Kriti Scanning Centre, Prayagraj – 211002</p>
            <p><FaPhoneAlt className="icon" /> +91 94512 05866</p>
            <p><FaPhoneAlt className="icon" /> +91 88818 94002</p>
            <p><FaEnvelope className="icon" /> brickvista@gmail.com</p>

            <iframe
              title="Brick Vista Construction office location map"
              src="https://maps.google.com/maps?q=Prayagraj&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{ border: 0, marginTop: "20px" }}
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-right">
            <h2 className="section-title">
              Get In <span>Touch</span>
            </h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane /> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}