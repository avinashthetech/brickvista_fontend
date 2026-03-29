import welcomeImg from "../assets/images/about.jpg";
import "./Welcome.css";

export default function Welcome() {
  return (
    <section
      className="welcome-area"
      aria-labelledby="welcome-heading"
    >
      <div className="container">
        <div className="welcome-grid">
          <div className="welcome-left">
            <h2 id="welcome-heading">
              Welcome to <span>Brick Vista Construction</span>
            </h2>

            <h3>Private Limited</h3>

            <p className="welcome-subtitle">
              Construction & Engineering Company in India
            </p>

            <p className="tagline">
              Quality Construction. Honest Service.
            </p>

            <div className="welcome-image">
              <img
                src={welcomeImg}
                alt="Brick Vista Construction building and infrastructure project"
                loading="lazy"
              />
            </div>
          </div>

          <div className="welcome-right">
            <p>
              Brick Vista Construction Private Limited is a multidisciplinary
              construction and engineering company delivering high-quality
              infrastructure, civil engineering, and turnkey project solutions
              across India.
            </p>

            <p>
              Our core specializations include civil and structural works, RCC
              structures, commercial and residential buildings, foundations,
              high-rise construction, MEP services, HVAC, firefighting,
              plumbing, flooring, interior finishing, roads, highways, and
              complete turnkey infrastructure development.
            </p>

            <p>
              Established in 2017 by experienced professionals, Brick Vista is
              rapidly emerging as a trusted construction company in India,
              known for quality, safety, timely delivery, and engineering
              excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}