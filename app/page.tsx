import Image from "next/image";
import { Footer, Header } from "./components/site-shell";
import { EmailLink } from "./components/email-link";
import { InterestTabs } from "./components/interest-tabs";
import { ProjectsList } from "./components/projects-list";

const experience = [
  { role: "Undergrad Researcher @ UIUC", metadata: "June 2026 — Present · Advisor: Dr. Shenlong Wang", description: "Investigating action controllability degradation induced during post-training of diffusion world models." },
  { role: "Machine Learning Engineering Intern @ Capital One", metadata: "Summer 2026 · AWS ECS, AWS S3, CI/CD Workflows", compact: true, description: <>Deployed <a className="inline-reference" href="https://arxiv.org/abs/2507.19457" target="_blank" rel="noreferrer">GEPA</a>-based autoresearch framework for optimizing AI agent skills. Developed infrastructure supporting automated evaluation, optimization, and deployment of skills to scale the framework across eight agents.</> },
  { role: "Course Assistant @ CS 446 (Machine Learning)", metadata: "Spring 2026 · UIUC", description: "Developed and maintained autograders for programming assignments. Helped design course review materials, homeworks, and exams. Graded exams and hosted Q&A review sessions." },
];

const education = [
  { period: "2024 — Present", gpa: "GPA: 3.98", role: "B.S. in Computer Science & Mathematics @ UIUC", graduateCourses: ["Autonomous Vehicle Systems Engineering", "Computer Vision", "Statistical Reinforcement Learning", "Learning-Based Control"], undergraduateCourses: ["Machine Learning", "Deep Generative Models", "Safe Autonomy", "Systems Programming", "Algorithms & Models of Computation", "Computer Architecture"] },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <Header />
      <div className="shell home-profile" id="content">
        <section className="home-profile-intro" id="home" aria-labelledby="home-title">
          <div className="home-profile-copy">
            <h1 id="home-title">Kartikey Sharma</h1>
            <p className="home-profile-bio">
              I&apos;m a third-year Math &amp; Computer Science student at the
              University of Illinois at Urbana-Champaign (UIUC). I currently research
              Diffusion-based World Models under <a href="https://shenlong.web.illinois.edu/" target="_blank" rel="noreferrer">Prof. Shenlong Wang</a>. Last Summer, I
              worked at <a href="https://www.capitalone.com/" target="_blank" rel="noreferrer">Capital One</a>, building infrastructure for automated
              self-improvement of AI agents.
            </p>
            <p className="home-profile-bio home-profile-research">
              My research interests lie at the intersection of Robotics and
              Generative Models. I am especially interested in leveraging
              generative models to construct predictive world models for
              simulation and planning. Recently, I&apos;ve also developed a broader
              interest in Robot Learning and Model-Predictive Control.
            </p>
            <p className="home-profile-bio home-profile-research">
              From an engineering standpoint, I enjoy tackling problems in
              high-performance computing, AI infrastructure, ML systems, and
              Linux programming.
            </p>
            <p className="home-profile-links">
              <EmailLink>Email</EmailLink>
              <span>/</span>
              <a href="/resume.pdf">CV</a>
              <span>/</span>
              <a href="https://github.com/kartikey047" target="_blank" rel="noreferrer">GitHub</a>
              <span>/</span>
              <a href="https://x.com/ksharma047" target="_blank" rel="noreferrer">Twitter</a>
            </p>
          </div>
          <aside className="home-portrait" aria-label="Portrait of Kartikey Sharma">
            <Image src="/profile/kartikey-lanterns.png" alt="Kartikey Sharma at a lantern festival" width={463} height={685} unoptimized priority />
          </aside>
        </section>

        <section className="one-page-section" id="education" aria-label="Education">
          <header className="one-page-section-heading"><p>Education</p></header>
          <div className="barron-list">{education.map((item) => <article className="barron-entry barron-entry--text-only" key={item.role}><div className="barron-entry-copy"><h3>{item.role}</h3><p className="barron-byline barron-byline--spaced"><span>{item.period}</span><b aria-hidden="true">·</b><span>{item.gpa}</span></p><div className="education-coursework"><p>Relevant Coursework</p><div className="education-course-grid"><section><h4>Graduate</h4><p>{item.graduateCourses.join(" · ")}</p></section><section><h4>Undergraduate</h4><p>{item.undergraduateCourses.join(" · ")}</p></section></div></div></div></article>)}</div>
        </section>

        <section className="one-page-section" id="experience" aria-label="Experience">
          <header className="one-page-section-heading"><p>Experience</p></header>
          <div className="barron-list">{experience.map((item) => <article className="barron-entry barron-entry--text-only" key={item.role}><div className="barron-entry-copy"><h3>{item.role}</h3><p className="barron-byline">{item.metadata}</p>{item.description && <p className={item.compact ? "experience-description--compact" : undefined}>{item.description}</p>}</div></article>)}</div>
        </section>

        <section className="one-page-section" id="projects" aria-label="Projects">
          <header className="one-page-section-heading"><p>Projects</p></header>
          <ProjectsList />
        </section>

        <section className="one-page-section" id="interests" aria-label="Interests">
          <header className="one-page-section-heading"><p>Interests</p></header>
          <InterestTabs />
          <div className="interest-skeleton-grid interest-skeleton-grid--secondary">
            <article>
              <h3>Sports</h3>
              <p className="interest-panel-copy">I grew up in the Bay Area and am a huge Warriors, 49ers, and Giants fan.</p>
            </article>
            <article>
              <h3>Food</h3>
              <p className="interest-panel-copy">Add me on <a className="inline-reference" href="https://beliapp.co/profile/lagumists047" target="_blank" rel="noreferrer">Beli</a> if you&apos;re interested.</p>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
