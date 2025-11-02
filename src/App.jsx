export default function App() {

  const base = import.meta.env.BASE_URL;
  const profile = {
    name: "Masum Ikbal",
    title: "Backend Developer",
    summary:
      "Result-oriented professional, target challenging assignments as a Senior Software Developer in IT Industry.",
    linkedin: "https://in.linkedin.com/in/masum-ikbal-55581b18a",
    photo: `${base}photo.png`,      // <-- served from public/photo.png
    resume: `${base}resume.pdf`,    // <-- served from public/resume.pdf
  };

  return (
    <main className="hero">
      {/* Photo at top center */}
      <div className="photo-section">
        <img className="avatar" src={profile.photo} alt="Profile" />
        <h1>
          <span className="muted">{profile.title}</span>
        </h1>
        <p className="tagline">{profile.summary}</p>
        <div className="cta">
          <a
            className="btn primary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn" href={profile.resume} download>
            Download Resume
          </a>
        </div>
      </div>

      {/* Skills + Experience side-by-side */}
      <div className="top-cards">
           <div className="card">
                    <h3>Experience</h3>
                    <ul>
                      <li>
                        <strong>Senior Associate Platform L1</strong> — Publicis Sapient
                        (July 2025 – Now)
                      </li>
                      <li>
                          <strong>Software Engineer</strong> — Interactive Brokers
                          (July 2025 – July 2025)
                      </li>
                      <li>
                        <strong>Senior Software Developer</strong> — Tata Digital (Aug
                        2020 – June 2025)
                      </li>
                    </ul>
                  </div>
        <div className="card">
          <h3>Skills</h3>
          <ul>
            <li>Java, Spring Boot, REST Api, Microservices</li>
            <li>Kafka, Redis, SQL &amp; NoSQL</li>
            <li>Cosmos DB, PostgresDB</li>
            <li>Azure, Docker, Jenkins</li>
            <li>Junit, Mockito, JIRA, YouTrack, Checkmarx</li>
          </ul>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid">
        {/* About */}
        <div className="card">
          <h3>About</h3>
          <ul>
            <li>
              Showcasing a track record of over 4.9 years in Software
              Development, particularly excelling in back-end applications
              within the IT industry.
            </li>
            <li>
              Actively driving the development of the Tata Neu App as a Senior
              Digital Engineer at Tata Digital, enhancing the customer shopping
              experience.
            </li>
            <li>
              Proficient in designing and developing scalable back-end
              applications using Java, Spring Boot, Kotlin, and various
              databases including Azure Cosmos DB, and Postgres DB.
            </li>
            <li>
              Managing the Golden Record (GR) and Single Sign On (SSO) core
              back-end team at Tata Digital, gathering requirements, and
              developing APIs for PII data.
            </li>
          </ul>
        </div>

        {/* Key Result Areas */}
        <div className="card">
          <h3>Key Result Areas</h3>
          <ul>
            <li>
              Participated in the core back-end team in Golden Record (GR),
              responsible for creating and managing customer's Personal
              Information Identity (PII) data.
            </li>
            <li>
              Designed and implemented the referral feature in the TATA NEU app,
              managing end-to-end tasks from freezing business requirements to
              making the feature live for users.
            </li>
            <li>
              Designed and developed Account Deletion feature in TataNeu App.
            </li>
            <li>
              Designed and delivered the Address Revamp feature in the TataNeu
              app, enhancing user experience and address management
              capabilities.
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="card">
          <h3>Achievements</h3>
          <ul>
            <li>
              Successfully completed Dremio migration project as part of cost
              optimization initiative which results in saving of 2.4 Crore
              annually.
            </li>
            <li>
              Implemented cross-partition to partition-based search in Azure
              Cosmos DB, improving API performance from 3-digit to 2-digit
              milliseconds and reducing cost by 20%.
            </li>
            <li>
              Implemented 4NL container strategy replacing brand-specific
              containers, resulting in a 10% cost reduction
            </li>
            <li>
              Migrated from Azure EventHub to Confluent Kafka, achieving
              approximately 60% reduction in operational costs.
            </li>
            <li>
              Implemented log masking and sampling to reduce logging cost and
              eliminate PII from application logs.
            </li>
            <li>
              Developed a solution to prevent Gmail ID manipulation (dot,
              hyphen and plus addressing) as part of risk management efforts.
            </li>
            <li>
              Enabled secure access to Azure resources by integrating Managed
              Identity, removing the need for hardcoded credentials in
              applications.
            </li>
          </ul>
        </div>
      </div>
      <div className="card cert-card">
        <div className="cert-left">
          <h3>Certifications</h3>
          <ul>
            <li><strong>AZ-900: Microsoft Azure Fundamentals</strong> — Microsoft</li>
            <li><strong>AI-900: Azure AI Fundamentals</strong> — Microsoft</li>
            <li><strong>AZ-204: Azure Developer Associate</strong> — Microsoft</li>
          </ul>
        </div>
                <div className="cert-right">
                  <p className="muted">
                    More available on LinkedIn
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="linkedin-btn"
                      style={{
                        marginLeft: "8px",
                        verticalAlign: "middle",
                        display: "inline-block"
                      }}
                      aria-label="LinkedIn Profile"
                    >
                      {/* SVG LinkedIn icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#0A66C2"
                        style={{ verticalAlign: "middle" }}
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.594v5.602z"/>
                      </svg>
                    </a>
                  </p>
                </div>

      </div>
    </main>
  );
}
