import { useEffect, useState } from 'react'
import './App.css'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@rodintech.com'
const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

const services = [
  { icon: 'code', title: 'Custom software', text: 'Purpose-built tools that fit the way your business actually works.' },
  { icon: 'window', title: 'Websites & apps', text: 'Fast, thoughtful digital experiences that turn visitors into customers.' },
  { icon: 'layers', title: 'SaaS products', text: 'From a sharp MVP to a platform ready for its next stage of growth.' },
  { icon: 'sparkles', title: 'AI & automation', text: 'Make repetitive work disappear and give your team room to focus.' },
  { icon: 'pen', title: 'UI/UX design', text: 'Clear, considered interfaces your customers will love to use.' },
  { icon: 'cart', title: 'E-commerce & APIs', text: 'Connected commerce and integrations that keep everything in sync.' },
]

const benefits = [
  'Made for your goals, never off-the-shelf guesswork',
  'Modern technology, chosen for the problem at hand',
  'Clear scopes, honest estimates, no surprises',
  'Built to grow with your business',
  'A real, collaborative team from start to finish',
  'Support that continues after launch',
]

const steps = [
  ['01', 'Discover', 'We learn your goals, your users, and what success looks like.'],
  ['02', 'Shape', 'We define the right scope and turn the plan into a clear design.'],
  ['03', 'Build', 'We develop in focused, transparent milestones—with your input.'],
  ['04', 'Deliver', 'We test, launch, and stay close as your product finds its feet.'],
]

const projects = [
  {
    type: 'SaaS · Concept project',
    name: 'Northstar',
    description: 'A calmer way for growing teams to see what is happening across their work.',
    theme: 'northstar',
    mark: 'N.',
    tags: ['Product design', 'Web application'],
  },
  {
    type: 'Commerce · Concept project',
    name: 'Form & Field',
    description: 'A considered storefront concept for a modern, independent home brand.',
    theme: 'formfield',
    mark: 'F&F',
    tags: ['E-commerce', 'Responsive web'],
  },
  {
    type: 'Analytics · Concept project',
    name: 'Clearview',
    description: 'A more human way to bring business performance into focus.',
    theme: 'clearview',
    mark: 'cv',
    tags: ['Dashboard', 'Data visualization'],
  },
]

const iconShapes = {
  arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
  code: <><path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16" /></>,
  window: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M8 6.5h.01M6 6.5h.01" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
  sparkles: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 14l1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></>,
  pen: <><path d="m15 5 4 4M4 20l4-.8L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z" /><path d="M13 7 17 11" /></>,
  cart: <><path d="M3 3h2l2.4 12.1A2 2 0 0 0 9.4 17h8.8a2 2 0 0 0 2-1.6L22 8H6" /><circle cx="10" cy="21" r="1" /><circle cx="19" cy="21" r="1" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
}

function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconShapes[name]}
    </svg>
  )
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="#home" aria-label="Rodin Tech home">
      <img className="brand-symbol" src="/icon2.png" alt="" />
      <span>rodin<span className="brand-tech">tech</span></span>
    </a>
  )
}

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`section-heading${centered ? ' section-heading-centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract illustration of connected digital systems" role="img">
      <div className="visual-glow" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="visual-core"><span className="core-mark"><i /><i /><i /><i /></span></div>
      <div className="float-card float-card-top"><span className="status-dot" /> Product systems <strong>connected</strong></div>
      <div className="float-card float-card-bottom"><span className="mini-bars"><i /><i /><i /><i /><i /></span><span>Built for what’s next</span><strong>01 — 04</strong></div>
      <span className="visual-caption">THOUGHTFUL BY DESIGN <span>✳</span> BUILT TO SCALE</span>
    </div>
  )
}

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art ${project.theme}`} aria-hidden="true">
      <div className="art-window">
        <div className="art-topbar"><span /><span /><span /><i>{project.mark}</i></div>
        <div className="art-content">
          {project.theme === 'northstar' && (
            <>
              <div className="art-sidebar"><b /><i /><i /><i /><i /></div>
              <div className="art-dashboard"><span className="art-kicker">MONDAY, OCTOBER 21</span><b>Good morning, Alex</b><div className="art-stats"><i /><i /><i /></div><div className="art-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
            </>
          )}
          {project.theme === 'formfield' && (
            <div className="art-store"><span>OBJECTS FOR SLOWER LIVING</span><b>Made to be<br />lived in.</b><i>DISCOVER THE COLLECTION ↗</i><div className="art-product"><span /></div></div>
          )}
          {project.theme === 'clearview' && (
            <div className="art-metrics"><span>YOUR BUSINESS, AT A GLANCE</span><b>Performance overview</b><div className="metric-row"><i /><i /><i /></div><div className="metric-chart"><i /><i /><i /><i /><i /><i /></div></div>
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setFormStatus({ type: '', message: '' })
    const form = event.currentTarget
    const data = new FormData(form)
    const inquiry = Object.fromEntries(data.entries())

    if (!contactEndpoint) {
      const subject = encodeURIComponent(`Project inquiry from ${inquiry.name}`)
      const body = encodeURIComponent(
        `Name: ${inquiry.name}\nBusiness email: ${inquiry.email}\nCompany: ${inquiry.company || 'Not provided'}\nProject budget: ${inquiry.budget || 'Not provided'}\n\nProject requirements:\n${inquiry.requirements}`,
      )
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
      setFormStatus({ type: 'success', message: `Your email app is opening with your inquiry addressed to ${contactEmail}.` })
      return
    }

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(inquiry),
      })
      if (!response.ok) throw new Error(`The inquiry could not be sent (server returned ${response.status}).`)
      form.reset()
      setFormStatus({ type: 'success', message: 'Thanks for reaching out. Your project inquiry has been sent.' })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong while sending your inquiry. Please email us directly.',
      })
    }
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
          <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>What we do</a>
            <a href="#work" onClick={closeMenu}>Our work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#process" onClick={closeMenu}>Our approach</a>
          </nav>
          <a className="nav-cta" href="#contact">Let’s talk <Icon name="arrow" size={16} /></a>
        </div>
      </header>

      <main className="min-h-screen">
        <section className="hero section-shell" id="home">
          <div className="hero-copy reveal">
            <div className="hero-kicker"><span className="kicker-line" /> A technology partner for what’s next</div>
            <h1>Transform your ideas into <span>powerful digital products.</span></h1>
            <p className="hero-subtitle">We build scalable websites, custom software, and intelligent digital solutions that help businesses grow faster.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let’s build your project <Icon name="arrow" size={17} /></a>
              <a className="button button-quiet" href="#services">Explore our services <span className="button-arrow">↓</span></a>
            </div>
            <div className="hero-proof"><span className="proof-star">✳</span><span>Good ideas deserve<br /><strong>great technology.</strong></span></div>
          </div>
          <HeroVisual />
          <div className="hero-footer"><span>INDEPENDENT THINKING. INTENTIONAL BUILDING.</span><a href="#services">SCROLL TO EXPLORE <span>↓</span></a></div>
        </section>

        <section className="services section-shell section-space" id="services">
          <SectionHeading eyebrow="What we do" title={<>Technology that moves<br className="desktop-break" /> your business forward.</>} text="From your first product idea to the systems that power your next chapter—we bring the right people and technology to make it real." />
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card reveal" key={service.title} style={{ '--delay': `${index * 55}ms` }}>
                <span className="service-icon"><Icon name={service.icon} size={21} /></span>
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Discuss ${service.title}`}><Icon name="arrow" size={17} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="why-section section-space">
          <div className="section-shell why-layout">
            <div className="why-copy reveal">
              <span className="eyebrow">The Rodin difference</span>
              <h2>Small enough to care.<br /><span>Experienced enough to deliver.</span></h2>
              <p>Good partnerships make better products. We bring a thoughtful, hands-on approach to every project—so you always know what we’re building, why it matters, and what comes next.</p>
              <a className="text-link" href="#about">A little more about us <Icon name="arrow" size={16} /></a>
            </div>
            <div className="benefit-grid reveal">
              {benefits.map((benefit, index) => (
                <div className="benefit-item" key={benefit}><span className="benefit-icon"><Icon name="check" size={15} /></span><span>{benefit}</span><small>0{index + 1}</small></div>
              ))}
            </div>
          </div>
        </section>

        <section className="work section-shell section-space" id="work">
          <SectionHeading eyebrow="A glimpse of what’s possible" title="Good work starts with a good idea." text="A few concept projects to show how we think. These are illustrative samples—not commissioned client work." />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card reveal" key={project.name} style={{ '--delay': `${index * 90}ms` }}>
                <ProjectArtwork project={project} />
                <div className="project-info">
                  <div className="project-meta"><span>{project.type}</span><span>0{index + 1} / 03</span></div>
                  <h3>{project.name}<a href="#contact" aria-label={`Discuss a project like ${project.name}`}><Icon name="arrow" size={17} /></a></h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <p className="project-disclaimer"><Icon name="sparkles" size={15} /> Concept work for demonstration purposes. Your project will be uniquely yours.</p>
        </section>

        <section className="about-section section-space" id="about">
          <div className="section-shell about-layout">
            <div className="about-stamp reveal"><div className="stamp-orbit"><span>R</span><i /><i /><i /></div><span className="stamp-caption">PEOPLE FIRST. PURPOSE BUILT.</span></div>
            <div className="about-copy reveal">
              <span className="eyebrow">A better kind of tech partner</span>
              <h2>Make technology<br />work for <span>people.</span></h2>
              <p>Rodin Tech is a software development and IT solutions partner for startups and growing businesses. We help teams streamline operations, improve productivity, and make their next big idea happen—with thoughtful software built around the people who use it.</p>
              <p>No unnecessary complexity. No one-size-fits-all answers. Just a committed team that wants your business to move forward.</p>
              <a className="text-link" href="#contact">Tell us what you’re building <Icon name="arrow" size={16} /></a>
            </div>
          </div>
        </section>

        <section className="process section-shell section-space" id="process">
          <SectionHeading eyebrow="A clear path from idea to launch" title="Thoughtful at every step." text="No black boxes or big reveals. Just good communication, careful craft, and progress you can see." />
          <div className="process-grid">
            {steps.map(([number, title, text], index) => (
              <article className="process-card reveal" key={number} style={{ '--delay': `${index * 70}ms` }}>
                <span className="process-number">{number}<span><Icon name="arrow" size={16} /></span></span>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial-section section-space">
          <div className="section-shell testimonial-inner reveal">
            <span className="eyebrow">The kind of partnership we believe in</span>
            <span className="quote-mark">“</span>
            <blockquote>Great technology should feel less like a tool—and more like a team that has your back.</blockquote>
            <p>This is our guiding principle, not a customer testimonial.</p>
          </div>
        </section>

        <section className="contact section-shell section-space" id="contact">
          <div className="contact-panel">
            <div className="contact-copy reveal">
              <span className="eyebrow">Your next chapter starts here</span>
              <h2>Have an idea?<br />Let’s build something <span>amazing.</span></h2>
              <p>Tell us a little about what you have in mind. We’ll get back to you to talk through the possibilities.</p>
              <div className="contact-options">
                <a href={`mailto:${contactEmail}`}><span className="contact-icon"><Icon name="mail" size={18} /></span><span><small>Email us</small><strong>{contactEmail}</strong></span><Icon name="arrow" size={15} /></a>
                {whatsappNumber && <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><span className="contact-icon"><Icon name="pin" size={18} /></span><span><small>Chat on WhatsApp</small><strong>Usually happy to chat</strong></span><Icon name="arrow" size={15} /></a>}
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-heading"><span>01 — LET’S GET TO KNOW YOUR PROJECT</span><h3>Project inquiry</h3></div>
              <div className="form-row">
                <label><span>Your name</span><input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required /></label>
                <label><span>Business email</span><input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required /></label>
              </div>
              <div className="form-row">
                <label><span>Company name <span className="optional">(optional)</span></span><input name="company" type="text" autoComplete="organization" placeholder="Your company" /></label>
                <label><span>Project budget</span>
                  <select name="budget" defaultValue="">
                    <option value="" disabled>Select a range</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                    <option value="$15,000 – $50,000">$15,000 – $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                    <option value="Let’s talk">Let’s talk</option>
                  </select>
                </label>
              </div>
              <label><span>What are you looking to build?</span><textarea name="requirements" rows="4" placeholder="A little about your idea, goals, or challenges..." required /></label>
              <div className="form-submit-row">
                <button className="button button-primary" type="submit">Submit project inquiry <Icon name="arrow" size={17} /></button>
                <span>We’ll only use your details to respond.</span>
              </div>
              <p className={`form-status${formStatus.type ? ` form-status-${formStatus.type}` : ''}`} role="status" aria-live="polite">{formStatus.message}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <div className="footer-main">
            <div className="footer-about"><Brand footer /><p>Building digital solutions that move businesses forward.</p><span>INDEPENDENT THINKING. INTENTIONAL BUILDING.</span></div>
            <div className="footer-links"><h3>Explore</h3><a href="#services">What we do</a><a href="#work">Our work</a><a href="#about">About Rodin Tech</a><a href="#process">Our approach</a></div>
            <div className="footer-links"><h3>Our services</h3><a href="#services">Custom software</a><a href="#services">Websites & apps</a><a href="#services">SaaS products</a><a href="#services">AI & automation</a></div>
            <div className="footer-links footer-contact"><h3>Say hello</h3><a href={`mailto:${contactEmail}`}>{contactEmail}</a><a href="#contact">Start a project <Icon name="arrow" size={13} /></a><span><Icon name="pin" size={14} /> Working with teams worldwide</span></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Rodin Tech. All rights reserved.</span><span>Built with care, for what’s next <b>✳</b></span></div>
        </div>
      </footer>
    </>
  )
}

export default App
