import "./Career.css";

export default function Career() {
  return (
    <section className="career-area" id="career" aria-labelledby="career-heading">
      <div className="container">
        <h2 id="career-heading" className="career-title">
          Construction <span>Careers</span> at Brick Vista
        </h2>

        <p className="career-subtitle">
          Join Brick Vista Construction Private Limited and build your career in
          civil engineering, site execution, project management, and construction
          services across India.
        </p>

        <div className="job-list">
          <article className="job-card">
            <h3>Civil Engineering Intern</h3>
            <p><strong>Qualification:</strong> Diploma / B.Tech / B.E in Civil Engineering</p>
            <p><strong>Location:</strong> Mumbai / Prayagraj</p>
            <p><strong>Duration:</strong> 3–6 Months</p>
            <p><strong>Experience:</strong> Freshers / Students</p>
            <p>
              Opportunity for civil engineering students to gain practical
              exposure in construction projects, site supervision, and project execution.
            </p>
          </article>

          <article className="job-card">
            <h3>Site Engineer</h3>
            <p><strong>Qualification:</strong> Diploma / B.Tech / B.E in Civil Engineering</p>
            <p><strong>Location:</strong> Mumbai / Prayagraj</p>
            <p><strong>Experience:</strong> 2+ Years</p>
            <p>
              Looking for experienced site engineers with knowledge of civil
              construction, quality control, supervision, and execution.
            </p>
          </article>


          <article className="job-card">
            <h3>Project Engineer</h3>
            <p><strong>Qualification:</strong> B.Tech / B.E in Civil Engineering</p>
            <p><strong>Location:</strong> PAN India</p>
            <p><strong>Experience:</strong> 4+ Years</p>
            <p>
              Ideal for professionals with expertise in project planning,
              execution, structural coordination, and construction management.
            </p>
          </article>

          <article className="job-card">
            <h3>Skilled & Unskilled Labor</h3>
            <p><strong>Location:</strong> Multiple Sites</p>
            <p><strong>Experience:</strong> Freshers / Experienced</p>
            <p>
              Openings available for skilled and unskilled labor for active
              construction sites and infrastructure projects.
            </p>
          </article>
        </div>

        <div className="apply-section">
          <h3>Apply for Construction Jobs in India</h3>
          <p>
            Send your resume to join Brick Vista Construction Private Limited for
            civil engineering jobs, internships, site engineer roles, and project
            engineer openings.
          </p>
          <a href="mailto:brickvista@gmail.com" className="apply-btn">
            Send Resume
          </a>
        </div>
      </div>
    </section>
  );
}