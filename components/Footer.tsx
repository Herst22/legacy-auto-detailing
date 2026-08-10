export default function Footer() {
  const descriptionStyle = {
    display: "block",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    color: "#a8a8a8",
    lineHeight: 1.7,
    textAlign: "left" as const,
    wordSpacing: "0px",
    letterSpacing: "0px",
    whiteSpace: "normal" as const,
  };

  const bottomTextStyle = {
    display: "block",
    color: "#a8a8a8",
    lineHeight: 1.6,
    textAlign: "left" as const,
    wordSpacing: "0px",
    letterSpacing: "0px",
    whiteSpace: "normal" as const,
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/assets/legacy-crest.png"
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

          <div style={descriptionStyle}>Premium mobile automotive detailing built around quality, precision, pride, and respect for your investment. Aircraft detailing services are coming soon.</div>
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
          <div style={bottomTextStyle}>© {new Date().getFullYear()} Legacy Auto Detailing LLC. All rights reserved.</div>

          <div style={bottomTextStyle}>Rose Bud, Arkansas &amp; surrounding communities</div>
        </div>
      </div>
    </footer>
  );
}