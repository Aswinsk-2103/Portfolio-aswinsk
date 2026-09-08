import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

// Design philosophy: Swiss editorial composition with cobalt signal accents, paper-white space, ink navy type, and compact technical metadata.
const profileImage = "/images/aswin-profile.webp";
const heroTexture = "/images/aswin-hero-texture.webp";
const techMesh = "/images/aswin-tech-mesh.webp";
const garmentArt = "/images/aswin-project-garment.webp";
const precisionArt = "/images/aswin-project-precision.webp";
const petAdoptionArt = "/images/aswin-project-pet-adoption.webp";
const fraudArt = "/images/aswin-project-fraud-detector.webp";
const monogram = "/images/aswin-monogram.webp";
const resumeUrl = "https://drive.google.com/file/d/1bwEg90sckEjtPptL8NazcIe-ePSlObKG/view?usp=sharing";

const navItems = ["Home", "Projects", "Experience", "Education", "Contact"];

const projects = [
  {
    number: "01",
    title: "Garment-management",
    description: "A full-stack operations workspace for managing products, customers, orders, and stock as a garment business grows.",
    image: garmentArt,
    tags: ["React", "Express", "MySQL", "JWT", "Tailwind"],
    live: "https://garment-managements.onrender.com",
    code: "https://github.com/Aswinsk-2103/Garment-management",
    accent: "cobalt",
  },
  {
    number: "02",
    title: "Precision Irrigation Framework",
    description: "A machine-learning based framework using soil sensor and weather data to support smarter, more measured water management.",
    image: precisionArt,
    tags: ["Python 3.10+", "Node.js", "MongoDB", "Machine Learning"],
    live: "https://precision-irrigation-framework.vercel.app/",
    code: "https://github.com/Aswinsk-2103/Precision-Irrigation-Framework",
    accent: "sky",
  },
  {
    number: "03",
    title: "Pet Adoption Platform",
    description: "A modern platform connecting people who want to adopt with pets looking for loving homes through a clear, responsive experience.",
    image: petAdoptionArt,
    tags: ["React.js", "REST API", "JavaScript", "CSS3", "Render"],
    live: "https://pet-adaption-platform-rtjs.onrender.com/",
    code: "https://github.com/Aswinsk-2103/Pet-Adaption-Platform",
    accent: "ice",
  },
  {
    number: "04",
    title: "Credit Card Fraud Detector",
    description: "An end-to-end ML web app for real-time fraud detection with a Random Forest model, class-imbalance weighting, and live probability scoring.",
    image: fraudArt,
    tags: ["Python", "Flask", "Scikit-Learn", "React", "Render"],
    live: "https://credit-card-sk34.onrender.com",
    code: "https://github.com/Aswinsk-2103/Credit-Card",
    accent: "navy",
  },
];

const skills = [
  "React", "JavaScript", "Node.js", "Express", "Python", "Flask", "MySQL", "MongoDB", "JWT", "Tailwind CSS", "Scikit-Learn", "Git & GitHub", "HTML5", "CSS3", "REST APIs", "Render",
];

const skillRows = [skills.slice(0, 4), skills.slice(4, 8), skills.slice(8, 12), skills.slice(12, 16)];

const screenOrder = ["home", "projects", "experience", "education", "contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const go = (id: string) => { setMenuOpen(false); setActiveScreen(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const currentIndex = screenOrder.indexOf(activeScreen);
  const goRelative = (direction: number) => go(screenOrder[(currentIndex + direction + screenOrder.length) % screenOrder.length]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      setFeedbackMessage("Please complete all required fields before sending.");
      return;
    }

    setFormStatus("submitting");
    setFeedbackMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/skaswin763@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFeedbackMessage("Message sent. I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
        setFeedbackMessage("Could not send message automatically. Please use the email links below.");
      }
    } catch {
      setFormStatus("error");
      setFeedbackMessage("Network failure. Please click 'Open Gmail' or 'Open email app' below.");
    }
  };

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <button className="wordmark" onClick={() => go("home")} aria-label="Go to home">
          <img src={monogram} alt="" className="wordmark-mark" />
          <span>Aswin<span className="wordmark-dot">.</span></span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => <button key={item} onClick={() => go(item.toLowerCase())}>{item}</button>)}
          <a className="nav-cv" href={resumeUrl} target="_blank" rel="noreferrer">CV <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section id="home" className={`hero-section screen-view ${activeScreen === "home" ? "active" : ""}`} aria-hidden={activeScreen !== "home"}>
        <div className="hero-texture" aria-hidden="true" />
        <div className="section-kicker"><span className="signal-dot" /> Available worldwide · Remote</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">/ full stack developer</p>
            <h1>Hi, I&apos;m <em>Aswin</em>.<br />I turn ideas into impactful digital experiences.</h1>
            <p className="hero-intro">I build the web with creativity and code, transforming ideas into elegant, interactive, and meaningful products.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => go("projects")}>Open case files <ChevronRight size={17} /></button>
              <button className="button button-quiet" onClick={() => go("contact")}>Connect with me <ArrowUpRight size={17} /></button>
            </div>
            <div className="social-row">
              <a href="https://github.com/Aswinsk-2103" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href="https://www.linkedin.com/in/aswin-selva-b07462331/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href="mailto:skaswin763@gmail.com" aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={profileImage} alt="Aswin SK in a black blazer" />
              <div className="portrait-label"><span>01</span><span>Aswin SK<br />Coimbatore, IN</span></div>
            </div>
            <div className="hero-note"><Sparkles size={15} /><span>Building with clarity<br />and a little curiosity.</span></div>
          </div>
        </div>
        <div className="hero-footer"><span>Scroll to explore</span><span className="scroll-line" /><span>2026 — 2028</span></div>
      </section>

      <section className={`intro-strip screen-view ${activeScreen === "home" ? "active" : ""}`} aria-label="Introduction" aria-hidden={activeScreen !== "home"}>
        <div className="side-index">01 <span>profile</span></div>
        <div className="intro-content"><p className="eyebrow">/ a developer in progress</p><h2>Thoughtful products.<br /><span>Useful by design.</span></h2></div>
        <div className="intro-aside"><p>Based in Coimbatore, India and available worldwide, I work across the stack to make complex ideas feel simple, useful, and ready for the real world.</p><a href="mailto:skaswin763@gmail.com">Say hello <ArrowUpRight size={15} /></a></div>
      </section>

      <section id="skills" className={`skills-section screen-view ${activeScreen === "home" ? "active" : ""}`} aria-hidden={activeScreen !== "home"}><div className="section-rule-label">02 / stack map <span className="rule-line" /></div>
        <div className="section-heading"><div><p className="eyebrow">/ toolkit</p><h2>Technologies I work with</h2></div><Code2 className="heading-icon" size={34} /></div>
        <div className="skills-marquee" aria-label="Technologies and tools">
          {skillRows.map((row, rowIndex) => <div className={`skill-marquee-row ${rowIndex % 2 === 0 ? "to-left" : "to-right"}`} key={`row-${rowIndex}`}><div className="skill-marquee-track">{[...row, ...row].map((skill, index) => <span key={`${skill}-${index}`}><Check size={13} />{skill}</span>)}</div></div>)}
        </div>
      </section>

      <section id="projects" className={`projects-section screen-view ${activeScreen === "projects" ? "active" : ""}`} aria-hidden={activeScreen !== "projects"}>
        <div className="section-heading project-heading"><div><p className="eyebrow">/ selected work</p><h2>Built to make a difference.</h2></div><span className="section-count">04 projects</span></div>
        <div className="github-more github-more-top"><a href="https://github.com/Aswinsk-2103" target="_blank" rel="noreferrer">View more on GitHub <Github size={16} /><ArrowUpRight size={15} /></a></div>
        <div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.title}>
          <div className="project-art"><img src={project.image} alt="" /><span className="project-number">{project.number}</span></div>
          <div className="project-info"><div className="project-meta"><span>Case file / {project.number}</span><span>Full stack</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Open case file <ExternalLink size={14} /></a><a href={project.code} target="_blank" rel="noreferrer">Source code <Github size={14} /></a></div></div>
        </article>)}</div>
      </section>

      <section id="experience" className={`experience-section screen-view ${activeScreen === "experience" ? "active" : ""}`} aria-hidden={activeScreen !== "experience"}>
        <div className="side-index">03 <span>experience</span></div>
        <div className="experience-content"><p className="eyebrow">/ experience</p><h2>Learning by<br /><span>building.</span></h2><div className="experience-entry"><div className="entry-marker"><BriefcaseBusiness size={18} /></div><div><p className="entry-date">2025 — present</p><h3>MERN Full Stack Development</h3><p className="entry-company">AlgoTutor · Professional training</p><a href="https://drive.google.com/file/d/1qfJ3j_y0gOW1vG7LHz11_OGnd1rr_7px/view?usp=drivesdk" target="_blank" rel="noreferrer">View credential <ArrowUpRight size={14} /></a></div></div><div className="experience-entry second-entry"><div className="entry-marker"><Sparkles size={18} /></div><div><p className="entry-date">AgentVerse / AlgoTutor</p><h3>AI System Integration</h3><p className="entry-company">Multi-agent systems · AI problem solving</p><div className="focus-list"><span>AI System Integration</span><span>Multi-Agent Systems</span><span>AI Problem Solving</span></div></div></div><a className="about-cv-button" href={resumeUrl} target="_blank" rel="noreferrer">For more about me <ArrowUpRight size={16} /></a></div>
      </section>

      <section id="education" className={`education-section screen-view ${activeScreen === "education" ? "active" : ""}`} aria-hidden={activeScreen !== "education"}>
        <div className="section-heading"><div><p className="eyebrow">/ education</p><h2>Foundations for the<br /><span>next chapter.</span></h2></div><GraduationCap className="heading-icon" size={38} /></div>
        <div className="education-list"><div className="education-row"><span className="education-year">2024 — 2028</span><div><h3>B.Tech</h3><p>Sri Eshwar College of Engineering</p></div><span>Coimbatore</span></div><div className="education-row"><span className="education-year">2022 — 2024</span><div><h3>Grade XII</h3><p>Vetri Vikaas Boys Hr. Sec. School</p></div><span>Namakkal</span></div></div>
      </section>

      <section id="contact" className={`contact-section screen-view ${activeScreen === "contact" ? "active" : ""}`} aria-hidden={activeScreen !== "contact"}>
        <div className="contact-backdrop" aria-hidden="true" />
        <div className="side-index light">04 <span>contact</span></div>
        <div className="contact-content"><p className="eyebrow light-text">/ have an idea?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><p className="contact-copy">If you&apos;re looking for a developer who cares about the details and the bigger picture, I&apos;d love to hear what you&apos;re working on.</p><a className="button button-light" href="mailto:skaswin763@gmail.com">Open a line <ArrowUpRight size={17} /></a></div>
        <div className="contact-details"><a href="mailto:skaswin763@gmail.com"><Mail size={16} /> skaswin763@gmail.com</a><a href="tel:+917358739928"><Phone size={16} /> +91 73587 39928</a><span><MapPin size={16} /> Available worldwide</span></div>
        
        <form className="connect-form" onSubmit={handleContactSubmit}>
          <div className="connect-form-heading">
            <div><p className="eyebrow light-text">/ send a message</p><h3>Connect with me.</h3></div>
            <Mail size={24} />
          </div>
          <p className="connect-email-copy">Have an idea, opportunity, or question? Send a message directly or choose your preferred way to reach me.</p>
          
          <label htmlFor="connect-name">
            <span>Your Name *</span>
            <input
              id="connect-name"
              type="text"
              required
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </label>

          <label htmlFor="connect-email">
            <span>Your Email *</span>
            <input
              id="connect-email"
              type="email"
              required
              placeholder="e.g. alex@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>

          <label htmlFor="connect-message">
            <span>Your Message *</span>
            <textarea
              id="connect-message"
              required
              placeholder="How can I help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </label>

          <div className="connect-actions" style={{ marginTop: "18px" }}>
            <button type="submit" className="connect-submit" disabled={formStatus === "submitting"}>
              {formStatus === "submitting" ? "Sending message..." : "Send message"} <Send size={15} />
            </button>
            <a className="connect-gmail-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=skaswin763@gmail.com&su=Portfolio%20enquiry&body=Hi%20Aswin%2C%0A%0A" target="_blank" rel="noreferrer">
              Open Gmail <ExternalLink size={15} />
            </a>
            <a className="connect-gmail-link" href="mailto:skaswin763@gmail.com?subject=Portfolio%20enquiry&body=Hi%20Aswin%2C%0A%0A">
              Open email app <ArrowUpRight size={15} />
            </a>
          </div>

          {feedbackMessage && (
            <p className={`form-feedback ${formStatus}`}>{feedbackMessage}</p>
          )}
        </form>

        <div className="resume-panel"><div className="resume-icon"><Download size={22} /></div><h3>Open for opportunities</h3><p>Interested in collaborating or have a project in mind? Let&apos;s connect and create something useful together.</p><a className="resume-button" href={resumeUrl} target="_blank" rel="noreferrer">View full resume <ArrowUpRight size={17} /></a></div>
      </section>

      <div className="screen-controls" aria-label="Screen navigation"><button onClick={() => goRelative(-1)} aria-label="Previous screen">←</button><span><strong>{String(currentIndex + 1).padStart(2, "0")}</strong> / 05 · swipe or tap to move</span><button onClick={() => goRelative(1)} aria-label="Next screen">→</button></div>
      <footer className="site-footer"><span>© 2026 Aswin SK</span><span>Built with React · Crafted with intent</span><button onClick={() => go("home")}>Back to home <ArrowUpRight size={14} /></button></footer>
    </main>
  );
}
