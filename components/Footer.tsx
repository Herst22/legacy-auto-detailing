export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/images/legacy-crest.png"
            alt="Legacy Auto Detailing Crest"
            style={{
              width: "150px",
              maxWidth: "150px",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />

          <h2>LEGACY AUTO DETAILING</h2>

          <p>
            Premium mobile detailing built around quality, pride, and attention
            to detail.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#why-legacy">Why Legacy</a>
          <a href="#our-promise">Our Promise</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Legacy Auto Detailing LLC. All rights
            reserved.
          </p>

          <p>Rose Bud, Arkansas & surrounding areas</p>
        </div>
      </div>
    </footer>
  );
}