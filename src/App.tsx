import "./App.css";

const TechSkill = ({ name, icon }: { name: string; icon: string }) => (
  <div className="tech-pill" title={name}>
    <img src={icon} alt={name} className="tech-icon" />
    <span className="tech-name">{name}</span>
  </div>
);

function App() {
  const calculateYearsOfExperience = () => {
    const startDate = new Date(2019, 4, 1);
    const today = new Date();
    const endDate = new Date(
      today.getFullYear(),
      today.getMonth() - 8,
      today.getDate(),
    );

    const yearsOfExp =
      (endDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25);
    return yearsOfExp.toFixed(1);
  };

  return (
    <div className="career-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Frontend Engineer</span>
          </div>
          <h1 className="hero-title">Sai Teja Muddana</h1>
          <p className="hero-subtitle">Senior Frontend Developer</p>
          <p className="hero-description">
            Building scalable, high-performance web applications with React +
            TypeScript. Specializing in design systems, micro-frontends, and
            performance optimization.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">{calculateYearsOfExperience()}</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-value">15</span>
              <span className="stat-label">Applications Contributed To</span>
            </div>
            <div className="stat">
              <span className="stat-value">4</span>
              <span className="stat-label">Major Companies</span>
            </div>
          </div>
          <div className="hero-cta">
            <a
              href="mailto:saitejamuddana@gmail.com"
              className="btn btn-primary"
            >
              Get in touch
            </a>
            <a href="#experience" className="btn btn-secondary">
              Explore work
            </a>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-header">
          <h2>Experience</h2>
          <p>6+ years of building enterprise applications</p>
        </div>
        <div className="experience-timeline">
          <article className="experience-card">
            <div className="timeline-marker"></div>
            <div className="company-logo">
              <img src="src/assets/Lloyds-logo.png" alt="Lloyds" />
            </div>
            <div className="experience-header">
              <span className="role-company">Lloyds Technology Centre</span>
              <h3>Senior Software Engineer</h3>
            </div>
            <p className="experience-period">Sep 2024 – Present</p>
            <ul className="experience-highlights">
              <li>
                Architected scalable frontend applications in microservices
                ecosystem
              </li>
              <li>
                Built modular component libraries, reducing dev time by ~30%
              </li>
              <li>
                Improved merchant dashboards performance by ~25% through
                optimization
              </li>
              <li>Led accessibility improvements aligned with W3C standards</li>
            </ul>
            <p className="tech-stack">
              React • TypeScript • Context API • Hooks • Tanstack Query • Azure
              DevOps
            </p>
          </article>

          <article className="experience-card">
            <div className="timeline-marker"></div>
            <div className="company-logo">
              <img
                src="src/assets/united_airlines-logo.png"
                alt="United Airlines"
              />
            </div>
            <div className="experience-header">
              <span className="role-company">United Airlines</span>
              <h3>React Developer</h3>
            </div>
            <p className="experience-period">Sep 2022 – Dec 2023</p>
            <ul className="experience-highlights">
              <li>
                Contributed to architecture of scalable design system (ATMOS)
              </li>
              <li>
                Increased dev efficiency by ~30% through component libraries
              </li>
              <li>Optimized critical user flows, improving conversion rates</li>
              <li>Implemented ADA/W3C accessibility standards</li>
            </ul>
            <p className="tech-stack">
              React • TypeScript • Redux • Storybook • Node.js
            </p>
          </article>

          <article className="experience-card">
            <div className="timeline-marker"></div>
            <div className="company-logo">
              <img
                src="src/assets/northern_trust-logo.png"
                alt="Northern Trust"
              />
            </div>
            <div className="experience-header">
              <span className="role-company">Northern Trust</span>
              <h3>Software Engineer</h3>
            </div>
            <p className="experience-period">May 2021 – Aug 2022</p>
            <ul className="experience-highlights">
              <li>Built scalable fintech applications for wealth management</li>
              <li>
                Implemented micro frontend architecture for independent
                deployments
              </li>
              <li>Designed secure JWT authentication flows</li>
              <li>Improved accessibility compliance to ~80%</li>
            </ul>
            <p className="tech-stack">
              React • TypeScript • Redux • GraphQL • Node.js
            </p>
          </article>

          <article className="experience-card">
            <div className="timeline-marker"></div>
            <div className="company-logo">
              <img src="src/assets/us_cellular-logo.png" alt="US Cellular" />
            </div>
            <div className="experience-header">
              <span className="role-company">US Cellular</span>
              <h3>Frontend Developer</h3>
            </div>
            <p className="experience-period">May 2019 – Apr 2021</p>
            <ul className="experience-highlights">
              <li>Developed enterprise web applications with React</li>
              <li>Built reusable UI components and integrated REST APIs</li>
              <li>Optimized performance, reducing server load by ~15%</li>
              <li>Implemented CI/CD pipelines using Jenkins and GitHub</li>
            </ul>
            <p className="tech-stack">
              React • JavaScript (ES6+) • Context • Storybook • Node.js
            </p>
          </article>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>Tools and frameworks I work with</p>
        </div>
        <div className="skills-container">
          <div className="skill-category">
            <div className="tech-pills">
              <TechSkill
                name="React"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              />
              <TechSkill
                name="TypeScript"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              />
              <TechSkill
                name="Next.js"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              />
              <TechSkill
                name="HTML5"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              />
              <TechSkill
                name="CSS3"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              />
              <TechSkill
                name="Redux"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
              />
              <TechSkill
                name="Context API"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              />
              <TechSkill
                name="React Query"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              />
              <TechSkill
                name="GraphQL"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
              />
              <TechSkill
                name="Axios"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              />
              <TechSkill
                name="Jest"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
              />
              <TechSkill
                name="Playwright"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg"
              />
              <TechSkill
                name="Docker"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
              />
              <TechSkill
                name="Kubernetes"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
              />
              <TechSkill
                name="GitHub"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              />
              <TechSkill
                name="Git"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              />
              <TechSkill
                name="Node.js"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              />
              <TechSkill
                name="Express.js"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              />
              <TechSkill
                name="MongoDB"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              />
              <TechSkill
                name="PostgreSQL"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Significant contributions and achievements</p>
        </div>
        <div className="projects-grid">
          <article className="project-card">
            <h3>Lloyds Accept</h3>
            <p className="project-company">Lloyds Banking Group + Stripe</p>
            <p className="project-description">
              Designed and built scalable dashboards and transactional data
              trackers using React + TypeScript. Improved performance and user
              engagement through optimized rendering strategies.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Micro-Frontends</span>
              <span>Finance Tracking</span>
            </div>
          </article>

          <article className="project-card">
            <h3>ATMOS Design System</h3>
            <p className="project-company">United Airlines</p>
            <p className="project-description">
              Developed reusable component library used across multiple
              applications. Reduced UI inconsistencies and improved developer
              productivity across teams.
            </p>
            <div className="project-tags">
              <span>Design System</span>
              <span>Components</span>
              <span>Storybook</span>
            </div>
          </article>

          <article className="project-card">
            <h3>Employee & Outlet Management Portal</h3>
            <p className="project-company">US Cellular</p>
            <p className="project-description">
              Realtime employee access management portal with onboarding and
              offboarding capabilities for the 4th largest cellular provider in
              the USA.
            </p>
            <div className="project-tags">
              <span>Enterprise</span>
              <span>People Management</span>
              <span>SPA</span>
              <span>React</span>
            </div>
          </article>
        </div>
      </section>

      <section className="education-section">
        <div className="section-header">
          <h2>Education</h2>
          <p>Academic background and specializations</p>
        </div>
        <div className="education-grid">
          <article className="education-card">
            <h3>Master's Computer Science</h3>
            <p className="school">State University of New York</p>
            <p className="year">2017</p>
            <p className="specialization">
              Telecommunications and Network Security
            </p>
            <p className="specialization">Utica, New York, USA</p>
          </article>
          <article className="education-card">
            <h3>B. Tech</h3>
            <p className="school">B.V. Raju Institute of Technology</p>
            <p className="year">2014</p>
            <p className="specialization">Electronics and Communications</p>
            <p className="specialization">Narsapur, Telangana, India</p>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let's work together</h2>
        <p>
          I'm open to freelance projects, full-time opportunities, and
          consulting work.
        </p>
        <div className="cta-links">
          <a href="mailto:saitejamuddana@gmail.com" className="btn btn-primary">
            Send me an email
          </a>
          <a
            href="https://github.com/saitejam12"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
