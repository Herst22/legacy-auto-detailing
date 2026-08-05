"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
const SERVICE_ID = "service_5o3pgaj";
const TEMPLATE_ID = "template_fxuz0s5";
const PUBLIC_KEY = "bwUC94xuN6Y_G4oAC";
export default function Home() {
  const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    )
    .then(() => {
      alert("Thank you! Your quote request has been sent.");
      form.current?.reset();
    })
    .catch((error) => {
      console.log("Status:", error.status);
      console.log("Text:", error.text);
      console.log(error);
      alert("Something went wrong. Please try again.");
    });
};
  return (
    <main className="bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
  <h1 className="text-3xl font-bold text-yellow-400">
    Legacy Auto Detailing
  </h1>

  <div className="hidden md:flex gap-8 text-gray-300">
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#gallery">Gallery</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>

  <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-bold hover:bg-yellow-300 transition">
  </button>
</nav>

<section 
id="home"
className="min-h-[85vh] flex items-center justify-center px-6">
  <div className="text-center max-w-4xl">
    <h2 className="text-6xl md:text-8xl font-extrabold text-yellow-400">
      Protect Your Investment
    </h2>

    <p className="mt-8 text-xl text-gray-300 leading-8">
      Premium mobile detailing for cars, trucks, SUVs, boats, and motorcycles.
      Professional results delivered with unmatched attention to detail.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
   <a
      href="#contact"
      className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
      >
        Get a Free Quote
      </a>

<a
      href="tel:+15017332375"
      className="border border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition"
      >
        Call Now
      </a>

    </div>
  </div>
</section>
<section 
id="services"
 className="bg-zinc-900 py-24 px-6 text-white">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-yellow-400">
      Our Services
    </h2>

    <p className="text-center text-gray-400 mt-4 mb-16">
      Professional detailing packages designed to protect your investment.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-black border border-yellow-500 rounded-xl p-8 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">
          Interior Detail
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Full Vacuum</li>
          <li>✔ Steam Cleaning</li>
          <li>✔ Leather Conditioning</li>
          <li>✔ Dashboard Restoration</li>
          <li>✔ Door Jamb Cleaning</li>
        </ul>
      </div>

      <div className="bg-black border border-yellow-500 rounded-xl p-8 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">
          Exterior Detail
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Foam Cannon Wash</li>
          <li>✔ Clay Bar Treatment</li>
          <li>✔ Paint Sealant</li>
          <li>✔ Wheel Cleaning</li>
          <li>✔ Tire Shine</li>
        </ul>
      </div>

      <div className="bg-black border border-yellow-500 rounded-xl p-8 hover:scale-105 transition">
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">
          Ceramic Coating
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Mirror Gloss Finish</li>
          <li>✔ Hydrophobic Protection</li>
          <li>✔ UV Protection</li>
          <li>✔ Long-Term Durability</li>
          <li>✔ Easier Maintenance</li>
        </ul>
      </div>

    </div>

  </div>
</section>
<section 
id="gallery" 
className="bg-black py-24 px-6 text-white">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-yellow-400">
      Our Work
    </h2>

    <p className="text-center text-gray-400 mt-4 mb-16">
      Every vehicle receives meticulous attention to detail and premium care.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        alt="Luxury Car"
        className="rounded-xl h-80 w-full object-cover border-2 border-yellow-500 hover:scale-105 transition duration-300"
      />

      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
        alt="Sports Car"
        className="rounded-xl h-80 w-full object-cover border-2 border-yellow-500 hover:scale-105 transition duration-300"
      />

      <img
        src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
        alt="Detailed Vehicle"
        className="rounded-xl h-80 w-full object-cover border-2 border-yellow-500 hover:scale-105 transition duration-300"
      />

    </div>

  </div>
</section>
<section
id="about"
 className="py-24 bg-black px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-yellow-400 text-center">
      Why Choose Legacy?
    </h2>

    <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
      We don't just clean vehicles—we restore, protect, and preserve your investment
      with professional products, meticulous attention to detail, and unmatched customer service.
    </p>

    <div className="grid md:grid-cols-2 gap-10 mt-16">

      <div className="bg-zinc-900 p-8 rounded-xl border border-yellow-500">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          Professional Equipment
        </h3>

        <p className="text-gray-300">
          Premium chemicals, professional tools, foam cannons, steam cleaning,
          and industry-leading ceramic coatings.
        </p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-xl border border-yellow-500">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          Mobile Convenience
        </h3>

        <p className="text-gray-300">
          We come to your home or workplace so you never have to waste time waiting.
        </p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-xl border border-yellow-500">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          Satisfaction Guaranteed
        </h3>

        <p className="text-gray-300">
          Every vehicle receives the same attention to detail as if it were our own.
        </p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-xl border border-yellow-500">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          Locally Owned
        </h3>

        <p className="text-gray-300">
          Proudly serving Arkansas with honest pricing, reliable service, and exceptional workmanship.
        </p>
      </div>

    </div>
  </div>
</section>
<section id="contact-info" className="py-24 bg-zinc-950 px-6">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-5xl font-bold text-yellow-400">
      Ready to Transform Your Vehicle?
    </h2>

    <p className="text-gray-400 mt-6 text-xl">
      Contact Legacy Auto Detailing today for a free quote.
      We proudly serve Rose Bud and the surrounding Arkansas communities.
    </p>

    <div className="mt-12 space-y-4 text-xl text-white">

      <p>📞 (501) XXX-XXXX</p>

      <p>📧 info@legacyautodetailing.com</p>

      <p>📍 Rose Bud, Arkansas</p>

    </div>

    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

      <a
        href="tel:+1501XXXXXXXX"
        className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
      >
        Call Now
      </a>

      <a
        href="mailto:info@legacyautodetailing.com"
        className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition"
      >
        Email Us
      </a>

    </div>

  </div>
</section>
<section id="pricing" className="bg-black py-24 px-6 text-white">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-yellow-400">
      Detailing Packages
    </h2>

    <p className="text-center text-gray-400 mt-4 mb-16">
      Premium service. Honest pricing. Exceptional results.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-8">
        <h3 className="text-3xl font-bold text-yellow-400">
          Legacy Essential
        </h3>

        <p className="text-5xl font-bold mt-6">$129</p>
        <p className="text-gray-400 mb-6">Starting Price</p>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Hand Wash</li>
          <li>✔ Wheel & Tire Cleaning</li>
          <li>✔ Interior Vacuum</li>
          <li>✔ Interior Wipe Down</li>
          <li>✔ Windows Cleaned</li>
        </ul>
      </div>

      <div className="bg-yellow-400 text-black rounded-xl p-8 scale-105 shadow-2xl">
        <span className="font-bold uppercase">Most Popular</span>

        <h3 className="text-3xl font-bold mt-4">
          Legacy Premium
        </h3>

        <p className="text-5xl font-bold mt-6">$229</p>
        <p className="mb-6">Starting Price</p>

        <ul className="space-y-3">
          <li>✔ Everything in Essential</li>
          <li>✔ Steam Cleaning</li>
          <li>✔ Clay Bar Treatment</li>
          <li>✔ Spray Sealant</li>
          <li>✔ Tire Dressing</li>
        </ul>
      </div>

      <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-8 hover:scale-105 transition duration-300">
  <span className="text-yellow-400 font-bold uppercase">
    Ultimate Detail
  </span>

  <h3 className="text-3xl font-bold text-yellow-400 mt-4">
    Legacy Signature
  </h3>

  <p className="text-5xl font-bold mt-6">$399</p>
  <p className="mb-6">Starting Price</p>

  <ul className="space-y-3 text-gray-300">
    <li>✓ Everything in Premium</li>
    <li>✓ Engine Bay Detail</li>
    <li>✓ Paint Decontamination</li>
    <li>✓ One-Step Paint Enhancement</li>
    <li>✓ Premium Wax or Sealant</li>
    <li>✓ Carpet & Seat Shampoo</li>
    <li>✓ Leather Conditioning</li>
    <li>✓ Trim Restoration</li>
    <li>✓ Glass Water Repellent</li>
    <li>✓ Final Showroom Inspection</li>
  </ul>
</div>

      <div className="bg-zinc-900 border border-yellow-500 rounded-xl p-8">
        <span className="text-yellow-400 font-bold uppercase">
          Coming Soon
        </span>

        <h3 className="text-3xl font-bold text-yellow-400 mt-4">
          Legacy Ceramic
        </h3>

        <p className="text-gray-400 mt-6">
          We're currently training, testing products, and investing in professional equipment to offer ceramic coatings with the quality our customers deserve.
        </p>
      </div>

    </div>
  </div>
</section>

<section 
id="contact"
className="bg-zinc-950 py-24 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-yellow-400">
      Request Your Free Quote
    </h2>

    <p className="text-center text-gray-400 mt-4 mb-16">
      Fill out the form below and we'll contact you as soon as possible with a customized quote.
    </p>

    <form
  ref={form}
  onSubmit={sendEmail}
  className="grid md:grid-cols-2 gap-8"
>

  <input
    type="text"
    name= "name"
    placeholder="Full Name"
    className="bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    className="bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white"
  />

  <select name="service" className="bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white">
    <option>Select Package</option>
    <option>Legacy Essential</option>
    <option>Legacy Premium</option>
    <option>Legacy Signature</option>
    <option>Legacy Ceramic (Coming Soon)</option>
  </select>

  <input
    type="date"
    name="date"
    className="bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white"
  />

  <input
    type="text"
    placeholder="Vehicle Make & Model"
    className="bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white"
  />
<select 
  name="vehicle_type"
  className="bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white"
  >
  <option>Select Vehicle Type</option>
  <option>Car</option>
  <option>Truck</option>
  <option>SUV</option>
  <option>Van</option>
  <option>Motorcycle</option>
</select>
<select 
name="referral"
className="bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white">
  <option>How did you hear about us?</option>
  <option>Google</option>
  <option>Facebook</option>
  <option>Instagram</option>
  <option>TikTok</option>
  <option>Friend / Family</option>
  <option>Yard Sign</option>
  <option>Other</option>
</select>
<input
  type="text"
  name="address"
  placeholder="Preferred Service Address"
  className="md:col-span-2 bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white"
/>

  <textarea
  name="message"
    placeholder="Tell us about your vehicle or any special requests..."
    rows={5}
    className="md:col-span-2 bg-zinc-900 border border-yellow-500 rounded-lg p-4 text-white"
  ></textarea>

  <button
  type="submit"
    className="md:col-span-2 bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-300 transition"
  >
    Request Free Quote
  </button>

</form>

</div>
</section>



    </main>
  );
}