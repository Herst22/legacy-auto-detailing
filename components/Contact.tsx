"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      "service_5o3pgaj",
      "template_fxuz0s5",
      form.current,
      "bwUC94xuN6Y_G4oAC"
    )
    .then(() => {
      alert("Thank you! Your message has been sent.");
      form.current?.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    });
};
 return (
  <section id="contact" className="contact-section">
   <div className="contact-container">
    <div className="contact-heading">
     <p className="section-eyebrow">CONTACT LEGACY</p>

     <h2>Ready to Give Your Vehicle the Care It Deserves?</h2>

     <p>
      Have a question, need help choosing a service, or ready to book your
      detail? Send us a message and Legacy Auto Detailing will get back
      with you as soon as possible.
     </p>
    </div>

    <div className="contact-layout">
     <div className="contact-info">
      <div className="contact-info-item">
       <span>01</span>
       <div>
        <h3>Mobile Service</h3>
        <p>
         Premium detailing brought directly to you in Rose Bud and
         surrounding Arkansas communities.
        </p>
       </div>
      </div>

      <div className="contact-info-item">
       <span>02</span>
       <div>
        <h3>Questions Welcome</h3>
        <p>
         Not sure which detail is right for your vehicle? Reach out and
         we will help you choose the best option.
        </p>
       </div>
      </div>

      <div className="contact-info-item">
       <span>03</span>
       <div>
        <h3>Quality First</h3>
        <p>
         Every appointment is handled with professionalism, clear
         communication, and attention to detail.
        </p>
       </div>
      </div>
     </div>

     <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="contact-field">
       <label htmlFor="name">NAME</label>
       <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
       />
      </div>

      <div className="contact-field">
       <label htmlFor="email">EMAIL</label>
       <input
        id="email"
        name="email"
        type="email"
        placeholder="Your email"
       />
      </div>

      <div className="contact-field">
       <label htmlFor="phone">PHONE</label>
       <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Your phone number"
       />
      </div>
<div className="contact-field">
  <label htmlFor="vehicle">VEHICLE</label>
  <input
    id="vehicle"
    name="vehicle"
    type="text"
    placeholder="Year, make, and model"
  />
</div>

<div className="contact-field">
  <label htmlFor="vehicle_type">VEHICLE TYPE</label>
  <select id="vehicle_type" name="vehicle_type" defaultValue="">
    <option value="" disabled>
      Select vehicle type
    </option>
    <option value="Car">Car</option>
    <option value="SUV">SUV</option>
    <option value="Truck">Truck</option>
    <option value="Van">Van</option>
    <option value="Other">Other</option>
  </select>
</div>

<div className="contact-field">
  <label htmlFor="address">ADDRESS</label>
  <input
    id="address"
    name="address"
    type="text"
    placeholder="Service address"
  />
</div>

<div className="contact-field">
  <label htmlFor="preferred_date">PREFERRED DATE</label>
  <input
    id="preferred_date"
    name="preferred_date"
    type="date"
  />
</div>

<div className="contact-field">
  <label htmlFor="referral">HOW DID YOU HEAR ABOUT US?</label>
  <select id="referral" name="referral" defaultValue="">
    <option value="" disabled>
      Select one
    </option>
    <option value="Facebook">Facebook</option>
    <option value="Google">Google</option>
    <option value="Friend or Family">Friend or Family</option>
    <option value="Repeat Customer">Repeat Customer</option>
    <option value="Saw Our Vehicle / Advertising">Saw Our Vehicle / Advertising</option>
    <option value="Other">Other</option>
  </select>
</div>

      <div className="contact-field">
       <label htmlFor="service">SERVICE</label>
       <select id="service" name="service" defaultValue="">
        <option value="" disabled>
         Select a service
        </option>
        <option value="Exterior Detail">Exterior Detail</option>
        <option value="Interior Detail">Interior Detail</option>
        <option value="Full Detail">Full Detail</option>
        <option value="Membership">Monthly Membership</option>
        <option value="Other">Other / Question</option>
       </select>
      </div>

      <div className="contact-field">
       <label htmlFor="message">MESSAGE</label>
       <textarea
        id="message"
        name="message"
        rows={6}
        placeholder="Tell us about your vehicle and what you need..."
       />
      </div>

      <button type="submit" className="btn btn-primary contact-submit">
       SEND MESSAGE
      </button>
     </form>
    </div>
   </div>
  </section>
 );
}