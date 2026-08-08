export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="section-heading">
          <p className="section-eyebrow">OUR SERVICES</p>

          <h2>Premium Detailing Built Around Your Vehicle</h2>

          <p className="section-description">
            From routine maintenance to complete interior and exterior
            restoration, every service is performed with attention to detail,
            premium products, and long-lasting protection in mind.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <p className="service-number">01</p>

            <h3>Exterior Detail</h3>

            <p>
              A thorough exterior cleaning designed to restore gloss, remove
              contamination, clean wheels and tires, and protect your
              vehicle&apos;s finish.
            </p>

            <a href="#contact" className="service-link">
              Request Service
            </a>
          </article>

          <article className="service-card">
            <p className="service-number">02</p>

            <h3>Interior Detail</h3>

            <p>
              Deep interior cleaning focused on carpets, seats, trim, glass,
              surfaces, and the areas that are often overlooked during routine
              cleaning.
            </p>

            <a href="#contact" className="service-link">
              Request Service
            </a>
          </article>

          <article className="service-card">
            <p className="service-number">03</p>

            <h3>Full Detail</h3>

            <p>
              Complete interior and exterior detailing for clients who want
              their entire vehicle refreshed through one premium service.
            </p>

            <a href="#contact" className="service-link">
              Request Service
            </a>
          </article>
        </div>

        <div className="discount-banner">
          <div className="discount-content">
            <p className="discount-eyebrow">LEGACY APPRECIATION DISCOUNT</p>

            <h3>20% Off for Military &amp; First Responders</h3>

            <p>
              Legacy Auto Detailing proudly offers 20% off qualifying detailing
              services for active-duty military, veterans, law enforcement,
              firefighters, EMTs, and paramedics.
            </p>

            <small>
              Discount cannot be combined with membership pricing or other
              promotional offers.
            </small>
          </div>

          <div className="discount-badge">
            <span>20%</span>
            <small>OFF</small>
          </div>
        </div>

        <div className="membership-section">
          <div className="membership-heading">
            <p className="section-eyebrow">LEGACY MEMBERSHIPS</p>

            <h2>Premium Care. Every Month.</h2>

            <p>
              Keep your vehicle consistently clean, protected, and
              presentation-ready with one of our monthly maintenance
              memberships.
            </p>
          </div>

          <div className="membership-grid">
            <article className="membership-card">
              <p className="membership-tier">ESSENTIAL</p>

              <h3>Legacy Essential</h3>

              <div className="membership-price">
                <span className="membership-dollar">$</span>
                <span className="membership-amount">79</span>
                <span className="membership-period">/month</span>
              </div>

              <ul className="membership-features">
                <li>1 monthly maintenance detail</li>
                <li>Exterior hand wash</li>
                <li>Wheels and tires cleaned</li>
                <li>Tire dressing</li>
                <li>Interior vacuum</li>
                <li>Interior surface wipe-down</li>
                <li>Interior and exterior windows</li>
                <li>Priority scheduling</li>
              </ul>

              <a href="#contact" className="membership-button">
                Choose Essential
              </a>
            </article>

            <article className="membership-card featured">
              <div className="popular-badge">MOST POPULAR</div>

              <p className="membership-tier">PREMIER</p>

              <h3>Legacy Premier</h3>

              <div className="membership-price">
                <span className="membership-dollar">$</span>
                <span className="membership-amount">129</span>
                <span className="membership-period">/month</span>
              </div>

              <ul className="membership-features">
                <li>Everything in Legacy Essential</li>
                <li>Enhanced interior maintenance</li>
                <li>Door jamb cleaning</li>
                <li>Detailed wheel and tire care</li>
                <li>Spray wax or sealant protection</li>
                <li>Priority scheduling</li>
                <li>10% off additional detailing services</li>
              </ul>

              <a href="#contact" className="membership-button">
                Choose Premier
              </a>
            </article>

            <article className="membership-card black-label">
              <p className="membership-tier">BLACK LABEL</p>

              <h3>Legacy Black Label</h3>

              <div className="membership-price">
                <span className="membership-dollar">$</span>
                <span className="membership-amount">199</span>
                <span className="membership-period">/month</span>
              </div>

              <ul className="membership-features">
                <li>Everything in Legacy Premier</li>
                <li>Enhanced paint protection maintenance</li>
                <li>Premium interior conditioning</li>
                <li>Detailed trim and wheel care</li>
                <li>Highest scheduling priority</li>
                <li>15% off additional detailing services</li>
                <li>1 complimentary full-detail upgrade per year</li>
              </ul>

              <a href="#contact" className="membership-button">
                Choose Black Label
              </a>
            </article>
          </div>

          <p className="membership-note">
            Membership services are designed for regularly maintained vehicles.
            Additional charges may apply for excessive pet hair, stains, mud,
            heavy contamination, oversized vehicles, or other conditions
            requiring additional labor.
          </p>
        </div>
      </div>
    </section>
  );
}