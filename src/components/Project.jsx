import "./Project.css";

import p1 from "../assets/images/santi.jpg";
import p2 from "../assets/images/rivan.jpg";
import p4 from "../assets/images/centralvihar.jpg";
import p3 from "../assets/images/centralnew.jpeg";
import p5 from "../assets/images/jjho.jpeg";
import p6 from "../assets/images/AVANTnew.jpeg";
import p7 from "../assets/images/CIDCO-PMAY.jpg";

export default function Project() {

  const projects = [
    { id: 1, title: "Shanti Villa Hospital", image: p1 },
    { id: 2, title: "Rivana Cancer Hospital", image: p2 },
    { id: 3, title: "Central Vihar", image: p3 },
    { id: 4, title: "Nai Zindagi High-Rise Township (MHADA Project), Sholapur", image: p4 },
    { id: 5, title: "JJ Hospital – New Extension Building, Byculla, Mumbai", image: p5 },
    { id: 6, title: "AVANTA HILLWAY High-Rise Residential Project, Goregaon East", image: p6 },
    { id: 7, title: "CIDCO High-Rise Project, Khandeswar Station, Navi Mumbai", image: p7 },
  ];

  return (
    <section id="project" className="project-area">
      <div className="container">

        {/* TITLE */}
        <div className="section-title">
          <h2>
            PROJECTS <span>COMPLETED</span>
          </h2>
          <div className="divider"></div>
        </div>

        {/* PROJECT GRID */}
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="overlay">{project.title}</div>
              </div>
              <h4>{project.title}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}