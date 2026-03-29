import "./Clients.css";

import c1 from "../assets/images/cl1.jpg";
import c2 from "../assets/images/cl2.jpg";
import c3 from "../assets/images/cl3.jpg";
import c4 from "../assets/images/cl4.jpg";
import c5 from "../assets/images/cl5.jpg";
import c6 from "../assets/images/cl6.jpg";

export default function Clients() {
  const clientLogos = [
    {
      id: 1,
      image: c1,
      alt: "Client logo of Brick Vista Construction project partner 1",
    },
    {
      id: 2,
      image: c2,
      alt: "Client logo of Brick Vista Construction project partner 2",
    },
    {
      id: 3,
      image: c3,
      alt: "Client logo of Brick Vista Construction project partner 3",
    },
    {
      id: 4,
      image: c4,
      alt: "Client logo of Brick Vista Construction project partner 4",
    },
    {
      id: 5,
      image: c5,
      alt: "Client logo of Brick Vista Construction project partner 5",
    },
    {
      id: 6,
      image: c6,
      alt: "Client logo of Brick Vista Construction project partner 6",
    },
  ];

  return (
    <section
      className="clients-area"
      aria-labelledby="clients-heading"
    >
      <div className="container">
        <div className="section-title">
          <h2 id="clients-heading">
            Our <span>Clients</span>
          </h2>
          <div className="divider"></div>
        </div>

        <p className="clients-intro">
          Brick Vista Construction Private Limited is trusted by leading
          healthcare, residential, commercial, and infrastructure clients for
          quality construction, engineering execution, and project delivery
          across India.
        </p>

        <div className="clients-grid">
          {clientLogos.map((client) => (
            <div key={client.id} className="client-box">
              <img
                src={client.image}
                alt={client.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}