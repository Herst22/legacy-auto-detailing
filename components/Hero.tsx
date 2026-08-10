export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <img
          src="/assets/legacy-crest.png"
          alt="Legacy Auto Detailing Crest"
          style={{
            width: "220px",
            maxWidth: "220px",
            height: "auto",
            display: "block",
            marginBottom: "20px",
          }}
        />

        <p className="hero-eyebrow">
          PREMIUM AUTOMOTIVE CARE • AIRCRAFT DETAILING COMING SOON
        </p>

        <h1 className="hero-title">
          Preserve the Finish.
          <span> Protect the Legacy.</span>
        </h1>

        <p className="hero-description">
          Premium automotive detailing with aircraft appearance care coming
          soon. Built around meticulous workmanship, exceptional presentation,
          and long-lasting protection.
        </p>

        <div className="hero-buttons">
          <a
            href="https://app.squareup.com/appointments/book/na91kgmns7xlpf/L2D8MGPVDVC20/start"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-primary-button"
          >
            Book Automotive Detail
          </a>

          <a href="#services" className="hero-secondary-button">
            View Services
          </a>
        </div>
      </div>

      <a
        href="#services"
        className="hero-scroll"
        aria-label="Scroll to services"
      >
        <span>Explore</span>
        <span className="hero-scroll-arrow">↓</span>
      </a>
    </section>
  );
}