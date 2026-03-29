import "./About.css";
import aboutImg from "../assets/images/about.jpg";

export default function About() {
  return (
    <section className="about-area" id="about">
      <div className="container">

        <h2 className="about-title">
          About <span>Us</span>
        </h2>

        {/* TOP ROW */}
        <div className="about-row">

          {/* IMAGE */}
          <div className="about-image">
            <img
              src={aboutImg}
              alt="Brick Vista Construction Private Limited"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">

            <p>
              <strong>Brick Vista Construction Private Limited</strong> is a
              professionally managed civil and infrastructure construction
              company committed to delivering high-quality, safe, and
              cost-effective engineering solutions across India. Since our
              establishment, we have successfully executed residential,
              commercial, and government infrastructure projects with precision
              and excellence.
            </p>

            <p>
              We specialize in high-rise buildings, hospitals, roads, highways,
              infrastructure development, and advanced environmental engineering
              solutions including STP, ETP, and WTP systems, ensuring quality,
              safety, and timely project delivery.
            </p>

          </div>
        </div>

        {/* BOTTOM CONTENT FULL WIDTH */}
        <div className="about-full">

          <h4>Our Experience</h4>
          <p>
            With <strong>8+ years of industry experience</strong>, Brick Vista
            Construction has successfully delivered multiple government and
            private sector projects. Our expertise in turnkey project execution,
            structural engineering, and project management ensures durable and
            reliable infrastructure solutions.
          </p>

          <h4>Our Mission</h4>
          <p>
            To deliver high-quality, safe, and sustainable construction
            solutions while maintaining integrity, transparency, and customer
            satisfaction, building long-term relationships with our clients.
          </p>

          <h4>Our Vision</h4>
          <p>
            To become a leading infrastructure and construction company in
            India, recognized for engineering excellence, innovation, and
            reliability while contributing to nation-building through
            world-class infrastructure.
          </p>

          <h4>Why Choose Us?</h4>
          <ul>
            <li>Experienced Civil & Infrastructure Engineering Team</li>
            <li>On-Time Project Delivery</li>
            <li>Cost-Effective & Quality Construction</li>
            <li>Government & Private Sector Project Experience</li>
            <li>Modern Technology & Safety Standards</li>
            <li>Strong Project Management</li>
          </ul>

        </div>

      </div>
    </section>
  );
}