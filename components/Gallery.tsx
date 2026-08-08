export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-heading">
          <p className="section-eyebrow">OUR WORK</p>

          <h2>Clean. Refined. Legacy.</h2>

          <p>
            A closer look at the kind of vehicles Legacy Auto Detailing is built
            to care for.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-card">
            <img src="/assets/truck.jpg" alt="Detailed truck" />
          </div>

          <div className="gallery-card">
            <img src="/assets/suv.jpg" alt="Detailed SUV" />
          </div>

          <div className="gallery-card">
            <img src="/assets/camaro.jpg" alt="Detailed Camaro" />
          </div>
        </div>
      </div>
    </section>
  );
}