import "./HowItWorks.css";


import img1 from "../assets/images/timeline-pic-1.webp";
import img2 from "../assets/images/timeline-pic-2.webp";
import img3 from "../assets/images/timeline-pic3.webp";
import img4 from "../assets/images/timeline-pic4.webp";
import img5 from "../assets/images/timeline-pic6.webp";


const steps = [
  {
    id: "01",
    title: "Technical Consultation",
    desc: "Discuss your requirements and vision with our experienced architects and technical experts to shape a clear project roadmap.",
    img: img1,
  },
  {
    id: "02",
    title: "Booking",
    desc: "Secure your project by paying a nominal booking amount and officially initiate the construction process.",
    img: img2,
  },
  {
    id: "03",
    title: "Design & Planning",
    desc: "Our architects prepare detailed designs, layouts, and cost plans tailored to your needs and budget.",
    img: img3,
  },
  {
    id: "04",
    title: "Construction",
    desc: "Construction begins using quality materials, expert supervision, and regular progress updates at every stage.",
    img: img4,
  },
  {
    id: "05",
    title: "Handover & Move-In",
    desc: "Final inspection, quality checks, and smooth handover so you can move into your home with confidence and warranty.",
    img: img5,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="section-title">
        HOW IT <span>WORKS</span>
      </h2>
      <p className="section-subtitle">
        Book · Track · Monitor · Settle
      </p>

      <div className="timeline">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <a href="#">read more</a>
            </div>

            <div className="image">
              <img src={step.img} alt={step.title} />
            </div>

            <span className="step-number">{step.id}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
