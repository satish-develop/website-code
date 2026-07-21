import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gauge,
  Layers,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  X,
} from 'lucide-react'
import './App.css'

const contactEmail = 'contact@clouddatatechllc.com'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    icon: Cloud,
    title: 'Cloud Consulting',
    description:
      'Architecture, migration planning, cost optimization, platform modernization, and secure cloud operations.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'Reliable pipelines, analytics platforms, reporting layers, data quality controls, and decision-ready dashboards.',
  },
  {
    icon: Code2,
    title: 'Application Development',
    description:
      'Custom web, mobile, API, and backend systems built around practical business workflows and maintainable code.',
  },
  {
    icon: Cpu,
    title: 'Firmware & Embedded',
    description:
      'Device software, board bring-up support, OTA update flows, Linux services, automation hooks, and release tooling.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Readiness',
    description:
      'Security reviews, access controls, cloud hardening, vulnerability remediation, and compliance-minded delivery.',
  },
  {
    icon: Settings,
    title: 'QA & Automation',
    description:
      'Test strategy, CI/CD pipelines, regression suites, release validation, and operational observability.',
  },
]

const outcomes = [
  { value: 'Cloud', label: 'Architecture and migration' },
  { value: 'Data', label: 'Pipelines, reporting, analytics' },
  { value: 'Dev', label: 'Apps, APIs, firmware' },
  { value: 'Ops', label: 'Automation and support' },
]

const heroMetrics = [
  { value: '01', label: 'Strategy sprint' },
  { value: '02', label: 'Build roadmap' },
  { value: '03', label: 'Production launch' },
]

const startupFocus = [
  {
    icon: Sparkles,
    title: 'Investor-ready story',
    text: 'Clean product foundations, sharper demos, credible technical roadmaps, and data that supports the business case.',
  },
  {
    icon: Zap,
    title: 'Fast MVP execution',
    text: 'Focused releases that validate the highest-value workflow first, then scale into durable production systems.',
  },
  {
    icon: TrendingUp,
    title: 'Built to scale',
    text: 'Cloud, data, automation, and embedded work shaped so today’s launch does not become tomorrow’s rebuild.',
  },
]

const processSteps = [
  {
    icon: Users,
    title: 'Discover',
    text: 'Clarify goals, constraints, current systems, risks, and the highest-value path forward.',
  },
  {
    icon: Layers,
    title: 'Design',
    text: 'Create a delivery plan with architecture, milestones, dependencies, and measurable outcomes.',
  },
  {
    icon: Rocket,
    title: 'Build',
    text: 'Develop in focused iterations with demos, test coverage, reviews, and clear progress checkpoints.',
  },
  {
    icon: ClipboardCheck,
    title: 'Launch',
    text: 'Deploy, validate, document, train, and keep the system healthy after release.',
  },
]

const capabilities = [
  'AWS and Azure solution architecture',
  'React, Node, Python, Java, and API platforms',
  'SQL, NoSQL, ETL, BI, and reporting systems',
  'Linux, device services, OTA, and firmware workflows',
  'CI/CD, test automation, monitoring, and release management',
  'Security reviews, identity, access, and cloud governance',
]

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Cloud Data Tech LLC home">
      <img className="brand-logo" src="/assets/cloud-data-tech-logo-header.svg" alt="Cloud Data Tech LLC" />
    </a>
  )
}

function FooterBrand() {
  return (
    <a className="brand brand-compact" href="#top" aria-label="Cloud Data Tech LLC home">
      <img className="brand-logo" src="/assets/cloud-data-tech-logo-header.svg" alt="Cloud Data Tech LLC" />
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const company = formData.get('company')
    const email = formData.get('email')
    const service = formData.get('service')
    const message = formData.get('message')

    const subject = encodeURIComponent(`Project inquiry from ${name || 'website visitor'}`)
    const body = encodeURIComponent(
      [
        `Name: ${name || ''}`,
        `Company: ${company || ''}`,
        `Email: ${email || ''}`,
        `Service: ${service || ''}`,
        '',
        message || '',
      ].join('\n'),
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <nav className="nav-bar" aria-label="Primary navigation">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href={`mailto:${contactEmail}`} onClick={closeMenu}>
              <Mail size={18} />
              Start a Project
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-overlay" />
          <div className="section-inner hero-inner">
            <div className="hero-content">
              <p className="eyebrow">Startup-ready IT consulting & development</p>
              <h1 id="hero-title">Cloud Data Tech LLC</h1>
              <p className="hero-kicker">
                Launch smarter cloud, data, app, and firmware systems.
              </p>
              <p className="hero-copy">
                We help founders and growing teams turn technical ideas into polished platforms,
                automation, analytics, and connected products that are ready for real customers.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  <Send size={18} />
                  Request Consultation
                </a>
                <a className="button button-secondary" href="#services">
                  Explore Services
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="hero-proof" aria-label="Delivery strengths">
                <span>
                  <CheckCircle2 size={18} />
                  Strategy to delivery
                </span>
                <span>
                  <CheckCircle2 size={18} />
                  Cloud, data, and embedded
                </span>
                <span>
                  <CheckCircle2 size={18} />
                  U.S. based support
                </span>
              </div>
            </div>
            <div className="launch-board" aria-label="Startup delivery snapshot">
              <div className="launch-board-top">
                <span className="status-dot" />
                Launch pipeline
              </div>
              <div className="launch-steps">
                {heroMetrics.map((metric) => (
                  <div className="launch-step" key={metric.value}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
              <div className="launch-meter" aria-hidden="true">
                <span />
              </div>
              <p>From first architecture call to a polished, production-minded launch plan.</p>
            </div>
          </div>
        </section>

        <section className="outcomes-band" aria-label="Core practice areas">
          <div className="section-inner outcomes-grid">
            {outcomes.map((item) => (
              <div className="outcome-item" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="startup-band" aria-labelledby="startup-title">
          <div className="section-inner startup-layout">
            <div className="startup-copy">
              <p className="eyebrow">Startup focus</p>
              <h2 id="startup-title">Make the first impression feel real, sharp, and ready.</h2>
              <p>
                Startups need speed, but they also need systems that inspire confidence. We help
                shape the technical foundation, customer experience, data story, and launch path.
              </p>
            </div>
            <div className="startup-grid">
              {startupFocus.map(({ icon: Icon, title, text }) => (
                <article className="startup-card" key={title}>
                  <Icon size={24} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="services" aria-labelledby="services-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2 id="services-title">Technology delivery that makes a young company look established.</h2>
              <p>
                Whether you need a roadmap, a working product, a stronger platform, or a reliable
                release process, Cloud Data Tech LLC can step in with senior engineering support.
              </p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, description }, index) => (
                <article className="service-card" key={title}>
                  <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="service-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-band" id="approach" aria-labelledby="approach-title">
          <div className="section-inner approach-layout">
            <div className="approach-copy">
              <p className="eyebrow">Approach</p>
              <h2 id="approach-title">Clear plans, strong engineering, fewer surprises.</h2>
              <p>
                Good consulting is not just advice. We pair technical direction with implementation
                ownership, so strategy becomes shipped software, stable infrastructure, and systems
                your team can maintain.
              </p>
              <a className="text-link" href="#contact">
                Talk through your roadmap
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="process-list" aria-label="Delivery process">
              {processSteps.map(({ icon: Icon, title, text }) => (
                <article className="process-item" key={title}>
                  <div className="process-icon">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-inner capabilities-layout">
            <div className="capability-panel">
              <p className="eyebrow">Capabilities</p>
              <h2 id="capabilities-title">Built for modern cloud, data, app, and device work.</h2>
              <p>
                We support both greenfield development and modernization across business systems,
                cloud infrastructure, data platforms, automation, and embedded software workflows.
              </p>
              <div className="capability-actions">
                <a className="button button-primary" href={`mailto:${contactEmail}`}>
                  <Mail size={18} />
                  {contactEmail}
                </a>
              </div>
            </div>
            <div className="capability-list">
              {capabilities.map((capability) => (
                <div className="capability-item" key={capability}>
                  <CheckCircle2 size={20} />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="insight-band" aria-labelledby="insight-title">
          <div className="section-inner insight-layout">
            <div>
              <p className="eyebrow">Engagement fit</p>
              <h2 id="insight-title">A practical partner for projects that cross software and operations.</h2>
            </div>
            <div className="insight-grid">
              <article>
                <Gauge size={24} />
                <h3>Modernize</h3>
                <p>Upgrade legacy workflows, improve speed, and reduce operating friction.</p>
              </article>
              <article>
                <Cloud size={24} />
                <h3>Scale</h3>
                <p>Move platforms to resilient cloud architecture with room for growth.</p>
              </article>
              <article>
                <ShieldCheck size={24} />
                <h3>Secure</h3>
                <p>Strengthen identity, access, deployments, data protection, and review habits.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-block contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-inner contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Let’s scope the next build.</h2>
              <p>
                Share what you are trying to launch, fix, automate, or modernize. We will help
                turn that into a clear technical plan and delivery path.
              </p>
              <div className="contact-methods">
                <a href={`mailto:${contactEmail}`}>
                  <Mail size={20} />
                  {contactEmail}
                </a>
                <span>
                  <MapPin size={20} />
                  United States
                </span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Company
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Project type
                <select name="service" defaultValue="Cloud consulting">
                  <option>Cloud consulting</option>
                  <option>Data engineering</option>
                  <option>Application development</option>
                  <option>Firmware and embedded</option>
                  <option>QA and automation</option>
                  <option>Cybersecurity readiness</option>
                </select>
              </label>
              <label className="full-field">
                Message
                <textarea name="message" rows="5" required />
              </label>
              <button className="button button-primary full-field" type="submit">
                <Send size={18} />
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-inner footer-layout">
          <FooterBrand />
          <div className="footer-links">
            <a href="https://clouddatatechllc.com">clouddatatechllc.com</a>
            <a href="https://cybertranstechllc.com">cybertranstechllc.com</a>
          </div>
          <p>Cloud consulting, data platforms, software development, firmware, and automation.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
