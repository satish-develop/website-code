import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
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
  Pause,
  Play,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  X,
} from 'lucide-react'
import './App.css'

const contactEmail = 'Info@clouddatatechllc.com'

const navItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI & Technology', href: '#technology' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

const footerNavItems = [{ label: 'Home', href: '#top' }, ...navItems]

const services = [
  {
    icon: Sparkles,
    title: 'AI & Automation',
    description:
      'AI assistants, workflow automation, intelligent search, LLM integrations, and practical governance for real business use.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Platform Engineering',
    description:
      'AWS and Azure architecture, migrations, containers, serverless platforms, cost control, and reliable cloud operations.',
  },
  {
    icon: Database,
    title: 'Data Platforms & Analytics',
    description:
      'Data pipelines, warehouses, reporting layers, dashboards, quality controls, and analytics systems leaders can trust.',
  },
  {
    icon: Code2,
    title: 'Product & App Engineering',
    description:
      'Custom web apps, portals, APIs, integrations, backend services, and customer-facing products built for maintainability.',
  },
  {
    icon: Cpu,
    title: 'Firmware & Connected Systems',
    description:
      'Embedded software, device services, Linux workflows, OTA support, release tooling, and connected product automation.',
  },
  {
    icon: ShieldCheck,
    title: 'Security, QA & DevOps',
    description:
      'Secure access, CI/CD, automated testing, monitoring, release validation, and production-readiness practices.',
  },
]

const outcomes = [
  { value: 'AI Strategy', label: 'Assistants, automation, LLM workflows' },
  { value: 'Cloud Platforms', label: 'Architecture, migration, operations' },
  { value: 'Data Intelligence', label: 'Pipelines, analytics, reporting' },
  { value: 'Product Engineering', label: 'Apps, APIs, firmware, QA' },
]

const companyHighlights = [
  {
    icon: TrendingUp,
    kicker: 'Established in 2016',
    title: 'Experience built through practical technology delivery.',
    text: 'Since 2016, Cloud Data Tech LLC has helped organizations plan, build, modernize, and support dependable digital systems.',
  },
  {
    icon: Layers,
    kicker: 'Full-service IT capabilities',
    title: 'Multiple technology services through one trusted partner.',
    text: 'Our capabilities span AI and automation, cloud, data, applications, APIs, firmware, QA, security readiness, and DevOps.',
  },
  {
    icon: Users,
    kicker: 'End-to-end support',
    title: 'Support from the first idea through production.',
    text: 'We help with discovery, architecture, implementation, testing, deployment, monitoring, modernization, and ongoing improvement.',
  },
  {
    icon: Rocket,
    kicker: 'Flexible engagement',
    title: 'Engineering support shaped around business priorities.',
    text: 'Engage us for focused consulting, project delivery, platform modernization, or ongoing technical support as your needs evolve.',
  },
]

const heroMetrics = [
  { value: '01', label: 'Assess the business and technology fit' },
  { value: '02', label: 'Architect the AI, cloud, data, and product plan' },
  { value: '03', label: 'Build, validate, and launch with confidence' },
]

const startupFocus = [
  {
    icon: Sparkles,
    title: 'Professional first impression',
    text: 'A sharper website, product foundation, roadmap, and demo experience that helps a startup look serious from day one.',
  },
  {
    icon: Zap,
    title: 'AI-ready systems',
    text: 'Automation, data, and application architecture shaped so AI features can be useful, governed, and maintainable.',
  },
  {
    icon: TrendingUp,
    title: 'Built to operate',
    text: 'Cloud, software, firmware, QA, and DevOps decisions made with production reliability in mind, not just launch-day speed.',
  },
]

const processSteps = [
  {
    icon: Users,
    title: 'Align',
    text: 'Clarify business goals, users, systems, data, risks, and the most valuable outcome to deliver first.',
  },
  {
    icon: Layers,
    title: 'Architect',
    text: 'Create the solution design, technology choices, delivery roadmap, milestones, and measurable success criteria.',
  },
  {
    icon: Rocket,
    title: 'Build',
    text: 'Develop in focused iterations with demos, code reviews, testing, documentation, and transparent progress checkpoints.',
  },
  {
    icon: ClipboardCheck,
    title: 'Operate',
    text: 'Deploy, validate, monitor, support handoff, and keep the system stable as users, data, and business needs grow.',
  },
]

const capabilities = [
  'AI assistants, LLM workflows, intelligent search, automation, and RAG patterns',
  'AWS, Azure, serverless, containers, networking, identity, and cloud governance',
  'React, Node.js, Python, Java, APIs, integrations, and backend platforms',
  'SQL, NoSQL, ETL/ELT, BI dashboards, data quality, and reporting systems',
  'IoT, Linux services, embedded software, firmware workflows, and OTA planning',
  'CI/CD, QA automation, monitoring, access control, security reviews, and release management',
]

const deliverySignals = [
  {
    icon: Gauge,
    title: 'Modernize',
    text: 'Upgrade legacy workflows, improve performance, reduce manual work, and create room for AI-enabled operations.',
  },
  {
    icon: Cloud,
    title: 'Scale',
    text: 'Move products and platforms toward secure, observable cloud architecture that can grow with the business.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure',
    text: 'Strengthen identity, access, data protection, deployment discipline, and production review habits.',
  },
]

const careerBenefits = [
  {
    icon: Sparkles,
    title: 'Modern technology exposure',
    text: 'Work around AI automation, cloud platforms, data systems, software products, firmware, QA, and DevOps instead of one narrow track.',
  },
  {
    icon: Users,
    title: 'Early team impact',
    text: 'Join while the company is still growing, where your ideas can shape delivery standards, engineering culture, and client experience.',
  },
  {
    icon: TrendingUp,
    title: 'Room to grow',
    text: 'Take ownership, learn across domains, and build a portfolio of real business systems as the organization expands.',
  },
  {
    icon: ClipboardCheck,
    title: 'Professional delivery mindset',
    text: 'Work with clear requirements, architecture thinking, testing, documentation, review habits, and production-minded execution.',
  },
]

const futureHiringAreas = [
  'AI & automation engineering',
  'Cloud and data engineering',
  'Software and API development',
  'Firmware and embedded systems',
  'QA automation and DevOps',
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
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeHighlight, setActiveHighlight] = useState(0)
  const [carouselPlaying, setCarouselPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [carouselHovered, setCarouselHovered] = useState(false)
  const [carouselFocused, setCarouselFocused] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 500)

    updateBackToTop()
    window.addEventListener('scroll', updateBackToTop, { passive: true })

    return () => window.removeEventListener('scroll', updateBackToTop)
  }, [])

  useEffect(() => {
    if (!carouselPlaying || carouselHovered || carouselFocused) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setActiveHighlight((current) => (current + 1) % companyHighlights.length)
    }, 6500)

    return () => window.clearTimeout(timer)
  }, [activeHighlight, carouselPlaying, carouselFocused, carouselHovered])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

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

  const activeCompanyHighlight = companyHighlights[activeHighlight]
  const ActiveHighlightIcon = activeCompanyHighlight.icon

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
              <p className="eyebrow">Cloud Data Tech LLC</p>
              <h1 id="hero-title">AI, cloud, data, software, and firmware engineering.</h1>
              <p className="hero-kicker">
                Senior technology consulting and development for startups and growing businesses.
              </p>
              <p className="hero-copy">
                We design and build intelligent systems: AI automation, cloud platforms, data
                pipelines, applications, APIs, embedded software, QA, security, and DevOps.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  <Send size={18} />
                  Request Consultation
                </a>
                <a className="button button-secondary" href="#solutions">
                  Explore Solutions
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="hero-proof" aria-label="Delivery strengths">
                <span>
                  <CheckCircle2 size={18} />
                  Strategy to production
                </span>
                <span>
                  <CheckCircle2 size={18} />
                  AI, cloud, data, embedded
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
                Engineering command center
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
              <p>From idea validation to production systems that look credible in front of customers.</p>
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

        <section className="company-highlights" aria-label="Company highlights">
          <div className="section-inner">
            <div
              className="highlight-carousel"
              role="region"
              aria-roledescription="carousel"
              aria-label="Cloud Data Tech company highlights"
              onMouseEnter={() => setCarouselHovered(true)}
              onMouseLeave={() => setCarouselHovered(false)}
              onFocusCapture={() => setCarouselFocused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setCarouselFocused(false)
                }
              }}
            >
              <article
                className="highlight-slide"
                aria-roledescription="slide"
                aria-label={`${activeHighlight + 1} of ${companyHighlights.length}`}
                key={activeCompanyHighlight.kicker}
              >
                <div className="highlight-icon" aria-hidden="true">
                  <ActiveHighlightIcon size={30} />
                </div>
                <div className="highlight-copy">
                  <p className="highlight-kicker">{activeCompanyHighlight.kicker}</p>
                  <h2>{activeCompanyHighlight.title}</h2>
                  <p>{activeCompanyHighlight.text}</p>
                </div>
              </article>

              <div className="carousel-controls" aria-label="Company highlight controls">
                <button
                  className="carousel-control"
                  type="button"
                  aria-label="Previous company highlight"
                  onClick={() =>
                    setActiveHighlight(
                      (current) => (current - 1 + companyHighlights.length) % companyHighlights.length,
                    )
                  }
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <div className="carousel-dots" aria-label="Choose a company highlight">
                  {companyHighlights.map((highlight, index) => (
                    <button
                      className={`carousel-dot ${index === activeHighlight ? 'is-active' : ''}`}
                      type="button"
                      aria-label={`Show highlight ${index + 1}: ${highlight.kicker}`}
                      aria-current={index === activeHighlight ? 'true' : undefined}
                      key={highlight.kicker}
                      onClick={() => setActiveHighlight(index)}
                    />
                  ))}
                </div>
                <button
                  className="carousel-control"
                  type="button"
                  aria-label={carouselPlaying ? 'Pause company highlights' : 'Play company highlights'}
                  title={carouselPlaying ? 'Pause highlights' : 'Play highlights'}
                  onClick={() => setCarouselPlaying((playing) => !playing)}
                >
                  {carouselPlaying ? (
                    <Pause size={18} aria-hidden="true" />
                  ) : (
                    <Play size={18} aria-hidden="true" />
                  )}
                </button>
                <button
                  className="carousel-control"
                  type="button"
                  aria-label="Next company highlight"
                  onClick={() =>
                    setActiveHighlight((current) => (current + 1) % companyHighlights.length)
                  }
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="startup-band" aria-labelledby="startup-title">
          <div className="section-inner startup-layout">
            <div className="startup-copy">
              <p className="eyebrow">Startup-ready engineering</p>
              <h2 id="startup-title">Make the first impression feel experienced, not experimental.</h2>
              <p>
                Startups need speed, but prospects also look for clarity, depth, and execution
                confidence. We help shape the technical foundation, product experience, data story,
                and launch path so the business feels ready for serious conversations.
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

        <section className="section-block" id="solutions" aria-labelledby="solutions-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Solutions</p>
              <h2 id="solutions-title">One engineering partner across AI, cloud, data, apps, firmware, and operations.</h2>
              <p>
                Cloud Data Tech LLC helps turn business ideas into working technology: from AI
                workflows and data platforms to secure cloud systems, customer applications, and
                connected products.
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

        <section className="approach-band" id="delivery" aria-labelledby="delivery-title">
          <div className="section-inner approach-layout">
            <div className="approach-copy">
              <p className="eyebrow">Delivery</p>
              <h2 id="delivery-title">Clear execution from first conversation to production support.</h2>
              <p>
                Good consulting is not just advice. We pair technology direction with hands-on
                implementation so strategy becomes shipped software, stable infrastructure, and
                systems your team can maintain.
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

        <section className="section-block capabilities-section" id="technology" aria-labelledby="technology-title">
          <div className="section-inner capabilities-layout">
            <div className="capability-panel">
              <p className="eyebrow">AI & Technology</p>
              <h2 id="technology-title">Modern engineering depth without locking you into one narrow stack.</h2>
              <p>
                The technology stack should match the business outcome. We support greenfield
                development, modernization, automation, AI-enabled workflows, cloud infrastructure,
                data platforms, and embedded software delivery.
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
              <p className="eyebrow">Working standards</p>
              <h2 id="insight-title">Credibility comes from how the work is planned, built, secured, and supported.</h2>
            </div>
            <div className="insight-grid">
              {deliverySignals.map(({ icon: Icon, title, text }) => (
                <article key={title}>
                  <Icon size={24} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="careers-section" id="careers" aria-labelledby="careers-title">
          <div className="section-inner careers-stack">
            <div className="careers-heading">
              <p className="eyebrow">Careers</p>
              <h2 id="careers-title">Why join Cloud Data Tech LLC?</h2>
              <p>
                We are building a practical engineering company for people who want to solve real
                business problems with AI, cloud, data, software, firmware, testing, and automation.
              </p>
            </div>

            <div className="career-benefit-grid">
              {careerBenefits.map(({ icon: Icon, title, text }) => (
                <article className="career-benefit-card" key={title}>
                  <Icon size={24} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="openings-panel" aria-labelledby="openings-title">
              <div className="openings-copy">
                <p className="eyebrow">Current openings</p>
                <h3 id="openings-title">No active openings right now.</h3>
                <p>
                  We are not listing role-specific positions today. As Cloud Data Tech LLC grows,
                  we will add openings here. You can still share your resume so we can keep your
                  profile for upcoming opportunities.
                </p>
              </div>
              <div className="future-roles" aria-label="Future hiring areas">
                {futureHiringAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
              <a
                className="button button-primary"
                href={`mailto:${contactEmail}?subject=${encodeURIComponent('Career profile - Cloud Data Tech LLC')}`}
              >
                <Mail size={18} />
                Share Your Resume
              </a>
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
                <div className="contact-address">
                  <MapPin size={20} />
                  <address>
                    2770, Main St
                    <br />
                    Suite 236
                    <br />
                    Frisco, TX-75033
                    <br />
                    United States
                  </address>
                </div>
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
                <select name="service" defaultValue="AI and automation">
                  <option>AI and automation</option>
                  <option>Cloud consulting</option>
                  <option>Data engineering</option>
                  <option>Application development</option>
                  <option>Firmware and embedded</option>
                  <option>Security, QA and DevOps</option>
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
          <div className="footer-brand-block">
            <FooterBrand />
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <p className="footer-heading">Quick Links</p>
            <div className="footer-links">
              {footerNavItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
          <div className="footer-contact">
            <p className="footer-heading">Contact</p>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href="https://www.clouddatatechllc.com">www.clouddatatechllc.com</a>
          </div>
        </div>
        <div className="section-inner footer-bottom">
          <p>© {new Date().getFullYear()} Cloud Data Tech LLC. All rights reserved.</p>
        </div>
      </footer>

      {showBackToTop && (
        <button
          className="back-to-top"
          type="button"
          aria-label="Back to top"
          title="Back to top"
          onClick={scrollToTop}
        >
          <ArrowUp size={22} strokeWidth={2.5} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export default App
