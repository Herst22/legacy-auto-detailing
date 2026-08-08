export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <img
  src="/images/legacy-crest.png"
  alt="Legacy Auto Detailing Crest"
  style={{
    width: "220px",
    maxWidth: "220px",
    height: "auto",
    display: "block",
    marginBottom: "20px",
  }}
/>
        <p className="hero-eyebrow">PREMIUM AUTOMOTIVE CARE</p>

        <h1 className="hero-title">
          Preserve the Finish.
          <span> Protect the Legacy.</span>
        </h1>

        <p className="hero-description">
          Professional auto detailing focused on premium results, meticulous
          workmanship, and long-lasting protection for your vehicle.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-primary-button">
            Book Your Detail
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