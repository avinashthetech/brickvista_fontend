import { useState } from "react";
import "./Gallary.css";

import gmen1 from "../assets/images/gmen2.jpeg";
import g15 from "../assets/images/g14.jpeg";
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import g5 from "../assets/images/g5.jpg";
import g6 from "../assets/images/g7.jpg";
import g7 from "../assets/images/CIDCO-PMAY.jpg";
import g8 from "../assets/images/centralnew.jpeg";
import g9 from "../assets/images/jjho.jpeg";
import g10 from "../assets/images/SantiVilas.jpeg";
import g11 from "../assets/images/last.jpg";
import g12 from "../assets/images/rivan.jpg";
import g13 from "../assets/images/sholapur.jpeg";
import g14 from "../assets/images/3rd.jpeg";

const images = [
  { src: gmen1, alt: "Construction project site work by Brick Vista Construction" },
  { src: g15, alt: "Building construction progress by Brick Vista Construction" },
  { src: g1, alt: "Commercial construction project by Brick Vista Construction" },
  { src: g2, alt: "Civil engineering project execution by Brick Vista Construction" },
  { src: g3, alt: "Infrastructure development work by Brick Vista Construction" },
  { src: g4, alt: "Residential construction project by Brick Vista Construction" },
  { src: g5, alt: "Site execution and structural work by Brick Vista Construction" },
  { src: g6, alt: "Modern construction site project by Brick Vista Construction" },
  { src: g7, alt: "CIDCO high rise project completed by Brick Vista Construction" },
  { src: g8, alt: "Central construction project by Brick Vista Construction" },
  { src: g9, alt: "JJ Hospital extension building project by Brick Vista Construction" },
  { src: g10, alt: "Shanti Vilas Super Speciality Hospital construction project" },
  { src: g11, alt: "Avanta Hillway residential project by Brick Vista Construction" },
  { src: g12, alt: "Renova Kriti Cancer Hospital project by Brick Vista Construction" },
  { src: g13, alt: "Sholapur high rise township construction project" },
  { src: g14, alt: "Nai Zindagi high rise township project by Brick Vista Construction" },
];

export default function Gallery() {
  const [active, setActive] = useState(2);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="gallery-area" id="gallery" aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="gallery-title">
        Project <span>Gallery</span>
      </h2>

      <p className="gallery-subtitle">
        Explore Brick Vista Construction project gallery featuring hospital,
        residential, high-rise, and infrastructure construction work across India.
      </p>

      <div className="gallery-slider">
        <button className="nav left" onClick={prev} aria-label="Previous gallery image">
          ‹
        </button>

        <div className="gallery-track">
          {images.map((img, index) => {
            let position = "next";

            if (index === active) position = "active";
            else if (
              index === active - 1 ||
              (active === 0 && index === images.length - 1)
            ) {
              position = "prev";
            }

            return (
              <div className={`gallery-card ${position}`} key={index}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            );
          })}
        </div>

        <button className="nav right" onClick={next} aria-label="Next gallery image">
          ›
        </button>
      </div>
    </section>
  );
}