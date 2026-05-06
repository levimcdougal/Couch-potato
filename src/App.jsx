import { useEffect, useState } from 'react'
import img1 from './assets/IMG1.jpg'
import img2 from './assets/IMG2.jpg'
import img3 from './assets/IMG3.jpg'
import img4 from './assets/IMG4.jpg'
import img5 from './assets/IMG5.jpg'
import img6 from './assets/IMG6.jpg'
import img7 from './assets/IMG7.png'
import img8 from './assets/IMG8.png'
import img9 from './assets/IMG9.jpg'
import img10 from './assets/IMG10.jpg'
import logo from './assets/logo.png'
import houseImg from './assets/house.png'
import officeImg from './assets/office.png'
import broomImg from './assets/broom.png'
import mopImg from './assets/mop.png'
import bucketImg from './assets/bucket.png'
import vacImg from './assets/vac.png'
import './App.css'

const locations = {
  indiana: {
    label: 'Indiana',
    city: 'Indianapolis and surrounding areas',
    phone: '(765) 278-2922',
  },
  arizona: {
    label: 'Arizona',
    city: 'Phoenix, Scottsdale, Mesa, and nearby communities',
    phone: '(765) 278-2922',
  },
}

const serviceGroups = [
  {
    title: 'Residential Cleaning',
    text: 'Recurring home cleaning for busy households. We keep your space fresh on a schedule that works for you.',
    image: houseImg,
    items: [
      'Weekly service',
      'Bi-weekly service',
      'Monthly service',
      'Every 4 week service',
      'General maintenance cleans',
    ],
  },
  {
    title: 'Deep Cleans',
    text: 'A thorough top-to-bottom clean for homes that need more than a routine refresh.',
    image: vacImg,
    items: [
      'Full kitchen detail',
      'Bathroom scrub and sanitize',
      'Baseboards, vents, and fixtures',
      'Inside appliances',
      'Hard-to-reach areas',
    ],
  },
  {
    title: 'Move In / Move Out Cleans',
    text: 'Leave your old place spotless or get your new one ready before you unpack.',
    image: broomImg,
    items: [
      'Full property clean',
      'Inside cabinets and drawers',
      'Appliance interiors',
      'Walls and light switches',
      'Garage and utility areas',
    ],
  },
  {
    title: 'Targeted Cleans',
    text: 'Need just one room or one specific area handled? We clean exactly what you point us to.',
    image: bucketImg,
    items: [
      'Room or area specific',
      'Kitchen only',
      'Bathrooms only',
      'Bedroom refresh',
      'Custom scope on request',
    ],
  },
  {
    title: 'Airbnb & Short-Term Rentals',
    text: 'Turnover cleaning built for fast resets, fresh presentation, and guest-ready details.',
    image: mopImg,
    items: [
      'Guest turnover cleans',
      'Linen and surface refresh',
      'Kitchen and bath detail',
      'Restock checklists',
    ],
  },
  {
    title: 'Commercial Cleaning',
    text: 'Clean, consistent workspaces for offices, shops, studios, and shared facilities.',
    image: officeImg,
    items: [
      'Office cleaning',
      'Common area cleaning',
      'Restroom cleaning',
      'Flexible recurring schedules',
    ],
  },
]

const stats = ['Residential', 'Deep Cleans', 'Move In / Out', 'Targeted Cleans', 'Airbnb & STR', 'Commercial']

const reviews = [
  {
    name: 'Kendra Pritt',
    location: 'Indiana',
    text: 'She does an amazing job! Came right in and without instruction did everything I could ask for!! Thanks so much!!!',
  },
  {
    name: 'Aujanii Rief',
    location: 'Arizona',
    text: "She's Amazing! She did such a good job on cleaning my apartment! Very professional, friendly and great quality service! Book her asap and her prices are affordable!",
  },
  {
    name: 'Gianna Panico',
    location: 'Arizona',
    text: "She is seriously AMAZING!! I have been hesitant to hire cleaners because i feel as if no one can do as good of a job as i expect but she exceeded my expectations. My house is spotless and looks like it's never been touched. If i could recommend one cleaner to anyone it would be her!!!",
  },
  {
    name: 'Carey Stables',
    location: 'Indiana',
    text: "Best cleaning company I've ever worked with!! Hands down the best. They are willing to clean something that wasn't on the weekly schedule if I ask. They always love on the 4 dogs I have.",
  },
  {
    name: 'Chantel Maria',
    location: 'Indiana',
    text: "I can't recommend Couch Potato Cleaning enough! Absolutely reduces my stress level every week to have my house so organized and clean.",
  },
]

const servicePhotos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
]

function App() {
  const [page, setPage] = useState('home')
  const [location, setLocation] = useState('indiana')
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const selectedLocation = locations[location]

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 20)
    }

    updateScrolled()
    window.addEventListener('scroll', updateScrolled)

    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const goTo = (nextPage) => {
    setPage(nextPage)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className="site-shell">
      <header
        className={`topbar ${page === 'home' && !isScrolled ? 'topbar-transparent' : ''}`}
      >
        <button className="brand" type="button" onClick={() => goTo('home')}>
          <img src={logo} alt="Couch Potato Cleaning" />
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {['home', 'services', 'contact'].map((item) => (
            <button
              key={item}
              className={page === item ? 'active' : ''}
              type="button"
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
          <button className="estimate-button nav-mobile-cta" type="button" onClick={() => goTo('contact')}>
            Request an Estimate
          </button>
        </nav>

        <button className="estimate-button nav-desktop-cta" type="button" onClick={() => goTo('contact')}>
          Request an Estimate
        </button>

        <button className="hamburger" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        <div key={page} className="page-transition">
          {page === 'home' && (
            <HomePage
              selectedLocation={selectedLocation}
              goTo={goTo}
            />
          )}
          {page === 'services' && (
            <ServicesPage
              selectedLocation={selectedLocation}
              location={location}
              setLocation={setLocation}
              goTo={goTo}
            />
          )}
          {page === 'contact' && (
            <ContactPage />
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt="Couch Potato Cleaning" />
            <p>Home, rental, and commercial cleaning with a fresh-finish standard.</p>
          </div>

          <div className="footer-column">
            <h2>Pages</h2>
            {['home', 'services', 'contact'].map((item) => (
              <button key={item} type="button" onClick={() => goTo(item)}>
                {item}
              </button>
            ))}
          </div>


          <div className="footer-column">
            <h2>Service Areas</h2>
            <span>Indiana</span>
            <span>Arizona</span>
          </div>

          <div className="footer-column">
            <h2>Contact</h2>
            <a href="mailto:couchpotatocleaning@gmail.com">couchpotatocleaning@gmail.com</a>
            <a href="tel:7652782922">(765) 278-2922 — Indiana</a>
            <a href="tel:7652782922">(765) 278-2922 — Arizona</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Couch Potato Cleaning. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

function HomePage({ selectedLocation, goTo }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay">
          <p className="eyebrow">Professional Cleaning Services</p>
          <h1>Refresh your home or office without leaving the couch.</h1>
          <p className="hero-copy">
            Residential, short-term rental, and commercial cleaning for customers in
            {` ${selectedLocation.label}`}. Choose your location and request a clean that
            fits your schedule.
          </p>
          <div className="hero-actions">
            <button type="button" onClick={() => goTo('services')}>
              Explore Services
            </button>
            <button className="secondary" type="button" onClick={() => goTo('contact')}>
              Contact Us
            </button>
          </div>
          <div className="hero-trust">
            <span>✓ Licensed &amp; Insured</span>
            <span>✓ 100% Satisfaction Guarantee</span>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="intro-copy">
          <p className="eyebrow">About Us</p>
          <h2>We clean so you can relax.</h2>
          <p>
            From recurring maintenance to deep detail work, Couch Potato Cleaning keeps
            the process simple: select your location, choose the service type, and tell
            us what needs attention, we handle everything from there.
          </p>
          <p>
            We serve homeowners, renters, Airbnb hosts, and business owners across Indiana
            and Arizona. Whether you need a quick weekly refresh or a full deep clean before
            a move, our team shows up on time, does the job right, and leaves your space
            better than we found it, every single visit.
          </p>
          <button type="button" onClick={() => goTo('services')}>
            View What We Clean
          </button>
        </div>
      </section>

      <section className="service-strip">
        <p className="eyebrow">Our Services</p>
        <h2>Choose the clean that matches your space.</h2>
        <div className="quick-services">
          {stats.map((item) => (
            <button key={item} type="button" onClick={() => goTo('services')}>
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <p className="eyebrow">Reviews</p>
        <h2>What our customers are saying.</h2>
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <strong>{review.name}</strong>
                <span>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="work-gallery">
        <p className="eyebrow">Our Work</p>
        <h2>Clean spaces, fresh finishes, happy homes.</h2>
        <div className="photo-marquee" aria-label="Cleaning service photos">
          <div className="photo-marquee-track">
            {[...servicePhotos, ...servicePhotos].map((photo, index) => (
              <img
                key={`${photo}-${index}`}
                src={photo}
                alt=""
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesPage({ selectedLocation, location, setLocation, goTo }) {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Cleaning services built around homes, rentals, and businesses."
        text={`Now viewing service options for ${selectedLocation.city}.`}
        className="page-hero-services"
        showLogo
      />
      <section className="services-new-grid">
        {serviceGroups.map((group) => (
          <div className="service-item" key={group.title}>
            <h2>{group.title}</h2>
            {group.image && (
              <img src={group.image} alt={group.title} className="service-item-img" />
            )}
            <p>{group.text}</p>
            <ul className="service-items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button type="button" onClick={() => goTo('contact')}>Book Now</button>
          </div>
        ))}
      </section>

      <section className="how-it-works">
        <p className="eyebrow">How It Works</p>
        <h2>Clean in three simple steps.</h2>
        <div className="hiw-steps">
          <div className="hiw-step">
            <span className="hiw-number">1</span>
            <h3>Choose your location</h3>
            <p>Select Indiana or Arizona to connect with the right local team for your area.</p>
          </div>
          <div className="hiw-step">
            <span className="hiw-number">2</span>
            <h3>Pick a service</h3>
            <p>Recurring maintenance, deep cleans, Airbnb turnovers, commercial — we cover it all.</p>
          </div>
          <div className="hiw-step">
            <span className="hiw-number">3</span>
            <h3>Schedule your service</h3>
            <p>Pick a date and time that works for you and we'll take care of the rest.</p>
          </div>
        </div>
        <button type="button" onClick={() => goTo('contact')}>Get Started</button>
      </section>
    </>
  )
}

const faqs = [
  {
    q: 'What is included in a standard clean?',
    a: 'A standard clean covers all main living areas, bedrooms, bathrooms, and the kitchen — surfaces, floors, fixtures, and general tidying. Deep cleans and move-in/out cleans go further into detail areas like appliance interiors and baseboards.',
  },
  {
    q: 'Do I need to be home during the clean?',
    a: 'No. Many of our customers provide access and let us handle it while they are out. We just ask that the space is accessible and any pets are secured.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Couch Potato Cleaning is fully licensed and insured for your peace of mind.',
  },
  {
    q: 'Do you bring your own supplies?',
    a: 'Yes, we bring everything needed to get the job done. If you have a preferred product for a specific surface just let us know when booking.',
  },
  {
    q: 'How do I reschedule or cancel?',
    a: 'You can reschedule or cancel directly through your booking confirmation. We just ask for at least 24 hours notice when possible.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We currently serve Indianapolis and surrounding areas in Indiana, and Phoenix, Scottsdale, Mesa, and nearby communities in Arizona.',
  },
]

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your clean."
        text="Choose your location below to schedule directly online."
      />

      <section className="booking-section">
        <p className="eyebrow">Schedule Online</p>
        <h2>Pick your location to get started.</h2>
        <div className="booking-grid">
          <div className="booking-card">
            <div className="booking-card-header">
              <h3>Book a cleaning service in Indiana</h3>
              <span>Serving Indianapolis and surrounding areas</span>
            </div>
            <iframe
              src="https://cal.com/couchpotatocleaning?embed=true"
              className="cal-embed"
              frameBorder="0"
              title="Book Indiana"
            />
          </div>
          <div className="booking-card">
            <div className="booking-card-header">
              <h3>Book a cleaning service in Arizona</h3>
              <span>Serving Phoenix, Scottsdale, Mesa, and nearby communities</span>
            </div>
            <iframe
              src="https://cal.com/couchpotatocleaningarizona?embed=true"
              className="cal-embed"
              frameBorder="0"
              title="Book Arizona"
            />
          </div>
        </div>
      </section>

      <section className="direct-contact-section">
        <p className="eyebrow">Prefer to reach out directly?</p>
        <h2>We're always happy to hear from you.</h2>
        <div className="direct-contact-grid">
          <div className="direct-contact-card">
            <h3>Indiana</h3>
            <div className="direct-contact-rows">
              <div>
                <span>Phone</span>
                <a href="tel:7652782922">(765) 278-2922</a>
              </div>
              <div>
                <span>Text</span>
                <a href="sms:7652782922">(765) 278-2922</a>
              </div>
              <div>
                <span>Email</span>
                <a href="mailto:couchpotatocleaning@gmail.com">couchpotatocleaning@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="direct-contact-card">
            <h3>Arizona</h3>
            <div className="direct-contact-rows">
              <div>
                <span>Phone</span>
                <a href="tel:7652782922">(765) 278-2922</a>
              </div>
              <div>
                <span>Text</span>
                <a href="sms:7652782922">(765) 278-2922</a>
              </div>
              <div>
                <span>Email</span>
                <a href="mailto:couchpotatocleaning@gmail.com">couchpotatocleaning@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <p className="eyebrow">FAQ</p>
        <h2>Common questions.</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function PageHero({ eyebrow, title, text, className = '', showLogo = false }) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      {showLogo && (
        <div className="page-hero-layout">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <img src={logo} alt="Couch Potato Cleaning" className="page-hero-logo" />
        </div>
      )}
      {!showLogo && (
        <>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </>
      )}
    </section>
  )
}

function LocationChooser({ location, setLocation, compact = false }) {
  return (
    <section className={compact ? 'location-chooser compact' : 'location-chooser'}>
      <div>
        <p className="eyebrow">Choose Your Location</p>
        <h2>Where do you need cleaning?</h2>
      </div>
      <div className="location-buttons">
        {Object.entries(locations).map(([key, item]) => (
          <button
            key={key}
            className={location === key ? 'selected' : ''}
            type="button"
            onClick={() => setLocation(key)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default App
