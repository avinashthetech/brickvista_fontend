import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services-area">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-title">
          <h2>
            OUR <span>SERVICES</span>
          </h2>
          <p>
            Comprehensive construction and infrastructure solutions with a strong
            focus on quality, efficiency, and timely delivery.
          </p>
          <div className="divider"></div>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">

          {/* 1 */}
          <div className="service-box">
            <h4>🏗️ Building Construction & Structural Works</h4>
            <ul>
              <li>High-Rise Residential & Commercial Buildings</li>
              <li>RCC Framed Structures</li>
              <li>Industrial & Institutional Buildings</li>
              <li>Foundation & Structural Engineering</li>
              <li>Turnkey Civil Contracting</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="service-box">
            <h4>🏢 Interior Finishing & Flooring</h4>
            <ul>
              <li>Premium Interior Fit-Out Solutions</li>
              <li>Marble, Granite & Vitrified Tile Flooring</li>
              <li>False Ceiling & Drywall Systems</li>
              <li>Painting, Polishing & Decorative Finishes</li>
              <li>Modular & Custom Interior Execution</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="service-box">
            <h4>⚡ MEP (Mechanical, Electrical & Plumbing)</h4>
            <ul>
              <li>HVAC Systems Installation</li>
              <li>Electrical Wiring & Panel Boards</li>
              <li>Firefighting Systems</li>
              <li>Plumbing & Drainage Solutions</li>
              <li>Testing & Commissioning</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="service-box">
            <h4>🛣️ Infrastructure & Government Projects</h4>
            <ul>
              <li>Roads & Highways</li>
              <li>Earthwork & Excavation</li>
              <li>Bridge & Public Infrastructure</li>
              <li>Government Civil Projects</li>
              <li>Demolition & Site Development</li>
            </ul>
          </div>

          {/* 5 */}
          <div className="service-box">
            <h4>💧 Water & Utility Systems</h4>
            <ul>
              <li>STP (Sewage Treatment Plant)</li>
              <li>WTP (Water Treatment Plant)</li>
              <li>OHT (Overhead Tanks)</li>
              <li>Underground Reservoirs</li>
              <li>Complete Utility Infrastructure</li>
            </ul>
          </div>

          {/* 6 */}
          <div className="service-box">
            <h4>🌍 Consultancy & Manpower Solutions</h4>
            <ul>
              <li>Skilled & Unskilled Labor Supply</li>
              <li>Engineers for All Trades</li>
              <li>Project Management Support</li>
              <li>Logistics & Facility Staff</li>
              <li>Industrial & Hospital Workforce Solutions</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}