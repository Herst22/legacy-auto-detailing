export default function OurPromise() {
  const paragraphStyle = {
    display: "block",
    width: "100%",
    maxWidth: "700px",
    margin: "0 auto 1.4rem",
    color: "#a8a8a8",
    fontSize: "1rem",
    lineHeight: 1.8,
    textAlign: "left" as const,
    wordSpacing: "0px",
    letterSpacing: "0px",
    whiteSpace: "normal" as const,
  };

  return (
    <section id="our-promise" className="promise-section">
      <div className="promise-container">
        <div className="promise-heading">
          <p className="section-eyebrow">OUR PROMISE</p>
          <h2>Quality You Can See. Service You Can Trust.</h2>
        </div>

        <div className="promise-content">
          <div style={paragraphStyle}>At Legacy Auto Detailing, every vehicle receives the time, attention, and care it deserves. We do not believe in rushing through a job or cutting corners just to finish faster.</div>

          <div style={paragraphStyle}>Our promise is to provide dependable service, clear communication, and a professional finish that reflects the standards behind the Legacy name.</div>

          <div style={paragraphStyle}>As we develop our future aircraft detailing services, those same standards will guide every product, procedure, and protection method we introduce. Whether it drives or flies, your investment deserves precision, professionalism, and respect.</div>

          <div style={paragraphStyle}>If something is not right, we address it. Your satisfaction and the quality of our work will always come first.</div>
        </div>
      </div>
    </section>
  );
}