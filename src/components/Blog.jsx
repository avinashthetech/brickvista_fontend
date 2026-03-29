import "./Blog.css";

import rivanImg from "../assets/images/rivan.jpg";
import shantivillImg from "../assets/images/shantivill.jpg";
import thirdImg from "../assets/images/3rd.jpeg";
import jjhoImg from "../assets/images/jjho.jpeg";
import cidcoImg from "../assets/images/CIDCO-PMAY.jpg";
import lastImg from "../assets/images/last.jpg";

export default function Blog() {
  const blogData = [
    {
      id: 1,
      title: "Renova Kriti Cancer Hospital – 160+ Bed Super Speciality Project",
      image: rivanImg,
      alt: "Renova Kriti Cancer Hospital super speciality construction project by Brick Vista in Prayagraj",
      desc: `Brick Vista Construction Private Limited successfully delivered the Renova Kriti Cancer Hospital project, a 160+ bed super speciality facility, with high professionalism and technical excellence. Their team demonstrated strong expertise in hospital infrastructure, including MEP, HVAC, Modular OTs, electrical, and firefighting systems. The project was completed with quality workmanship, proper coordination, and within the committed timeline.`,
      author: "Dr. V.K. Agrawal",
      company: "Renova Kriti Cancer Hospital, Prayagraj",
    },
    {
      id: 2,
      title: "Shanti Vilas Super Speciality Hospital",
      image: shantivillImg,
      alt: "Shanti Vilas Super Speciality Hospital construction work by Brick Vista in Prayagraj",
      desc: `Brick Vista Construction handled the development of Shanti Vilas Super Speciality Hospital with professionalism and clear technical understanding of healthcare infrastructure. Even under demanding timelines, they maintained coordination and consistency.`,
      author: "Dr. Ajay Shukla",
      company: "Shanti Vilas Super Speciality Hospital, Prayagraj",
    },
    {
      id: 3,
      title: "Nai Zindagi High-Rise Township (MHADA Project), Sholapur",
      image: thirdImg,
      alt: "Nai Zindagi High Rise Township MHADA project execution by Brick Vista in Sholapur",
      desc: `Brick Vista Construction played a significant role in the execution of the Nai Zindagi High-Rise Township. From structural work to coordinated site execution, they maintained strong quality standards, safety compliance, and systematic progress.`,
      author: "Mr. Baji Rao Patil",
      company: "Project Manager, Unity Multicon Pvt. Ltd.",
    },
    {
      id: 4,
      title: "JJ Hospital – New Extension Building, Byculla, Mumbai",
      image: jjhoImg,
      alt: "JJ Hospital new extension building construction support by Brick Vista in Mumbai",
      desc: `Brick Vista contributed effectively to the execution of the JJ Hospital New Extension Building. Their team demonstrated disciplined site management, technical understanding, and smooth coordination within an active healthcare environment.`,
      author: "Mr. Ashish Sahu",
      company: "Project Manager, CAPACITY Infraprojects Ltd.",
    },
    {
      id: 5,
      title: "CIDCO High-Rise Project, Khandeswar Station, Navi Mumbai",
      image: cidcoImg,
      alt: "CIDCO high rise residential construction project by Brick Vista in Navi Mumbai",
      desc: `During the execution of the CIDCO High-Rise Project, Brick Vista demonstrated strong planning, effective manpower management, and commitment to timelines. Their proactive approach ensured quality and safety compliance.`,
      author: "Mr. Ankush Sirana",
      company: "Project Manager, Shapoorji Pallonji Construction Pvt. Ltd.",
    },
    {
      id: 6,
      title: "AVANTA HILLWAY High-Rise Residential Project, Goregaon East",
      image: lastImg,
      alt: "Avanta Hillway high rise residential project structural work by Brick Vista in Mumbai",
      desc: `Brick Vista demonstrated strong structural discipline and execution accuracy during AVANTA HILLWAY. Their adherence to drawings, reinforcement detailing, and quality control maintained technical precision throughout structural phases.`,
      author: "Er. Sartaj",
      company: "Structural Engineer, AVANTA HILLWAY, Mumbai",
    },
  ];

  return (
    <section className="blog-section" aria-labelledby="client-testimonials-heading">
      <div className="container">
        <h2 id="client-testimonials-heading" className="section-title">
          Client <span>Testimonials</span>
        </h2>

        <p className="blog-intro">
          Explore client testimonials and completed healthcare, residential,
          infrastructure, and high-rise construction projects executed by Brick Vista Construction across India.
        </p>

        <div className="blog-grid">
          {blogData.map((blog) => (
            <article key={blog.id} className="blog-card">
              {blog.image && (
                <div className="blog-image">
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    loading="lazy"
                  />
                </div>
              )}

              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-desc">{blog.desc}</p>

                <div className="author-box">
                  <div>
                    <strong>{blog.author}</strong>
                    <span>{blog.company}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}