import { useState, useEffect } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Er. Aditya Raj Pratap",
    role: "Director & Managing Director",
    text: `Brick Vista Construction Private Limited is an innovation-driven company delivering modern, sustainable, and high-quality infrastructure solutions. With strong project management and technical expertise, we ensure on-time delivery without compromising engineering standards.`,
  },
  {
    name: "Mrs. Munni Devi",
    role: "Founder & Director",
    text: `We are committed to quality, transparency, and client satisfaction. Our focus remains on building reliable infrastructure with integrity and excellence.`,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <section
      className="testimonial-area"
      aria-labelledby="testimonial-heading"
    >
      <div className="container">

        <h2 id="testimonial-heading" className="title">
          Client <span>Testimonials</span>
        </h2>

        <p className="testimonial-intro">
          Hear what our clients and leadership say about Brick Vista Construction’s
          expertise in civil engineering, infrastructure development, and construction
          project execution across India.
        </p>

        <div className="divider"></div>

        <article className="testimonial-box">
          <h3>{testimonials[index].name}</h3>
          <span>{testimonials[index].role}</span>

          <p>{testimonials[index].text}</p>

          <button
            className="arrow left"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <button
            className="arrow right"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </article>

        <div className="dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
}