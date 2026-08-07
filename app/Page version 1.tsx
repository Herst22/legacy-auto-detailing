"use client";

import Image from "next/image";
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

        console.log(error);

        alert("Something went wrong. Please try again.");

      });

  };

  return (

<main className="bg-black text-white overflow-x-hidden">

{/* =====================================================
                    NAVIGATION
===================================================== */}

<nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500">

<div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-2">

<div className="flex items-center">

<Image
src="/images/legacy-crest.png"
alt="Legacy Auto Detailing"
width={190}
height={190}
priority
className="
transition-all
duration-700
hover:scale-110
hover:rotate-2
drop-shadow-[0_0_25px_rgba(250,204,21,0.45)]
hover:drop-shadow-[0_0_60px_rgba(250,204,21,0.80)]
"
/>

</div>

<div className="hidden lg:flex items-center gap-10">

<a
href="#home"
className="
relative
font-semibold
transition-all
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>

Home

</a>

<a
href="#services"
className="
relative
font-semibold
transition-all
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>

Services

</a>

<a
href="#pricing"
className="
relative
font-semibold
transition-all
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>

Pricing

</a>

<a
href="#gallery"
className="
relative
font-semibold
transition-all
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>

Gallery

</a>

<a
href="#contact"
className="
relative
font-semibold
transition-all
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>

Contact

</a>

</div>

<a
href="#contact"
className="
bg-yellow-400
text-black
font-bold
px-6
py-3
rounded-xl
transition-all
duration-300
hover:bg-yellow-300
hover:shadow-[0_0_35px_rgba(250,204,21,0.55)]
hover:-translate-y-1
"
>

Free Quote

</a>

</div>

</nav>

{/* =====================================================
                    HERO
===================================================== */}

<section
id="home"
className="
relative
min-h-screen
flex
items-center
justify-center
overflow-hidden
pt-32
"
>

<div className="absolute inset-0">

<Image
src="/images/hero.jpg"
alt="Luxury Vehicle"
fill
priority
className="object-cover"
/>

<div className="absolute inset-0 bg-black/75"></div>

</div>

<div className="relative z-10 text-center max-w-5xl px-6">

<h1
className="
text-6xl
md:text-8xl
font-extrabold
leading-tight
drop-shadow-[0_0_20px_rgba(250,204,21,0.20)]
"
>

Protect Your Investment.

<br />

<span className="text-yellow-400">

Preserve Your Legacy.

</span>

</h1>

<p className="mt-10 text-xl md:text-2xl text-gray-300 leading-9">

Premium mobile detailing delivered directly to your home or workplace.

We specialize in restoring, protecting, and preserving the vehicles you take pride in owning.

</p>

<div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">

<a
href="#contact"
className="
bg-yellow-400
text-black
font-bold
px-10
py-5
rounded-xl
transition-all
duration-300
hover:bg-yellow-300
hover:shadow-[0_0_35px_rgba(250,204,21,0.55)]
hover:-translate-y-1
"
>

Request Free Quote

</a>

<a
href="tel:+15017332375"
className="
border-2
border-yellow-400
text-yellow-400
font-bold
px-10
py-5
rounded-xl
transition-all
duration-300
hover:bg-yellow-400
hover:text-black
hover:scale-105
"
>

Call (501) 733-2375

</a>

</div>

<div className="mt-20 flex flex-wrap justify-center gap-12">

<div>

<div className="text-4xl">

⭐⭐⭐⭐⭐

</div>

<p className="mt-3 text-gray-300">

Premium Customer Care

</p>

</div>

<div>

<div className="text-4xl">

🚗

</div>

<p className="mt-3 text-gray-300">

Mobile Service

</p>

</div>

<div>

<div className="text-4xl">

🛡️

</div>

<p className="mt-3 text-gray-300">

Fully Insured

</p>

</div>

</div>

</div>

</section>
{/* =====================================================
                    SERVICES
===================================================== */}

<section
  id="services"
  className="bg-zinc-900 py-28 px-6"
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-yellow-400">
      Premium Detailing Services
    </h2>

    <p className="text-center text-gray-400 text-xl mt-6 mb-20 max-w-3xl mx-auto">
      Every package is designed to restore, protect, and preserve your vehicle
      using professional products and meticulous craftsmanship.
    </p>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* ================= Interior ================= */}

      <div
        className="
        bg-black
        border
        border-yellow-500
        rounded-2xl
        p-10
        transition-all
        duration-500
        hover:-translate-y-4
        hover:scale-[1.03]
        hover:border-yellow-300
        hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]
        "
      >

        <div className="text-6xl mb-6">
          🧼
        </div>

        <h3 className="text-3xl font-bold text-yellow-400 mb-6">
          Interior Detailing
        </h3>

        <p className="text-gray-300 leading-8 mb-8">
          Restore your interior to like-new condition with deep cleaning,
          steam treatment, leather care, and meticulous attention to every
          surface.
        </p>

        <ul className="space-y-3 text-gray-300">

          <li>✔ Complete Interior Vacuum</li>
          <li>✔ Steam Cleaning</li>
          <li>✔ Leather Conditioning</li>
          <li>✔ Dashboard Restoration</li>
          <li>✔ Door Jamb Cleaning</li>
          <li>✔ Interior Window Cleaning</li>

        </ul>

      </div>

      {/* ================= Exterior ================= */}

      <div
        className="
        bg-black
        border
        border-yellow-500
        rounded-2xl
        p-10
        transition-all
        duration-500
        hover:-translate-y-4
        hover:scale-[1.03]
        hover:border-yellow-300
        hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]
        "
      >

        <div className="text-6xl mb-6">
          🚗
        </div>

        <h3 className="text-3xl font-bold text-yellow-400 mb-6">
          Exterior Detailing
        </h3>

        <p className="text-gray-300 leading-8 mb-8">
          Safely remove contaminants, restore gloss, and protect your paint
          with professional washing techniques and premium sealants.
        </p>

        <ul className="space-y-3 text-gray-300">

          <li>✔ Foam Cannon Wash</li>
          <li>✔ Clay Bar Treatment</li>
          <li>✔ Paint Sealant</li>
          <li>✔ Wheel Cleaning</li>
          <li>✔ Tire Dressing</li>
          <li>✔ Exterior Glass Cleaning</li>

        </ul>

      </div>

      {/* ================= Ceramic ================= */}

      <div
        className="
        bg-black
        border
        border-yellow-500
        rounded-2xl
        p-10
        transition-all
        duration-500
        hover:-translate-y-4
        hover:scale-[1.03]
        hover:border-yellow-300
        hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]
        "
      >

        <div className="text-6xl mb-6">
          🛡️
        </div>

        <h3 className="text-3xl font-bold text-yellow-400 mb-6">
          Ceramic Coatings
        </h3>

        <p className="text-gray-300 leading-8 mb-8">
          Industry-leading ceramic coatings designed to provide years of
          protection, incredible gloss, and easier maintenance.

        </p>

        <div className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-full mb-8">
          Coming in 2027
        </div>

        <ul className="space-y-3 text-gray-300">

          <li>✔ Long-Term Protection</li>
          <li>✔ Hydrophobic Finish</li>
          <li>✔ UV Protection</li>
          <li>✔ Mirror Gloss</li>
          <li>✔ Easier Cleaning</li>

        </ul>

      </div>

    </div>

  </div>

</section>
{/* =====================================================
                    GALLERY
===================================================== */}

<section
  id="gallery"
  className="bg-black py-28 px-6"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-yellow-400">
      Our Work
    </h2>

    <p className="text-xl text-gray-400 text-center mt-6 mb-20 max-w-3xl mx-auto">
      Whether it's your truck, SUV, sports car, or daily driver, every vehicle
      receives the same premium attention to detail and protection.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      {/* Truck */}

      <div className="group overflow-hidden rounded-2xl border-2 border-yellow-500 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_45px_rgba(250,204,21,0.45)]">

        <Image
          src="/images/truck.jpg"
          alt="Detailed Pickup Truck"
          width={1200}
          height={900}
          className="h-96 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

      </div>

      {/* Camaro */}

      <div className="group overflow-hidden rounded-2xl border-2 border-yellow-500 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_45px_rgba(250,204,21,0.45)]">

        <Image
          src="/images/camaro.jpg"
          alt="Detailed Sports Car"
          width={1200}
          height={900}
          className="h-96 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

      </div>

      {/* SUV */}

      <div className="group overflow-hidden rounded-2xl border-2 border-yellow-500 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_45px_rgba(250,204,21,0.45)]">

        <Image
          src="/images/suv.jpg"
          alt="Detailed SUV"
          width={1200}
          height={900}
          className="h-96 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

      </div>

    </div>

    <div className="text-center mt-20">

      <h3 className="text-4xl font-bold text-yellow-400">
        Your Vehicle Could Be Next
      </h3>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
        Every detail is completed using premium products, professional techniques,
        and meticulous craftsmanship to restore, protect, and preserve your investment.
      </p>

      <a
        href="#contact"
        className="inline-block mt-10 bg-yellow-400 text-black font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.60)]"
      >
        Request Your Free Quote
      </a>

    </div>

  </div>
</section>
{/* =====================================================
                WHY CHOOSE LEGACY
===================================================== */}

<section
  id="about"
  className="bg-zinc-900 py-32 px-6"
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-yellow-400">

      Why Choose Legacy?

    </h2>

    <p className="text-center text-gray-400 text-xl mt-6 mb-20 max-w-4xl mx-auto">

      We don't just clean vehicles—we restore, protect, and preserve your
      investment with professional equipment, premium products, and an
      uncompromising commitment to quality.

    </p>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Card 1 */}

      <div className="bg-black border border-yellow-500 rounded-2xl p-10 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:border-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]">

        <div className="text-5xl mb-6">🧰</div>

        <h3 className="text-2xl font-bold text-yellow-400 mb-6">

          Professional Equipment

        </h3>

        <p className="text-gray-300 leading-8">

          Premium detailing chemicals, foam cannons, steam cleaning,
          professional polishers, and industry-leading equipment ensure
          exceptional results every visit.

        </p>

      </div>

      {/* Card 2 */}

      <div className="bg-black border border-yellow-500 rounded-2xl p-10 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:border-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]">

        <div className="text-5xl mb-6">🏠</div>

        <h3 className="text-2xl font-bold text-yellow-400 mb-6">

          Mobile Convenience

        </h3>

        <p className="text-gray-300 leading-8">

          We come directly to your home or workplace, saving you valuable
          time while delivering professional results where it's most
          convenient for you.

        </p>

      </div>

      {/* Card 3 */}

      <div className="bg-black border border-yellow-500 rounded-2xl p-10 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:border-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]">

        <div className="text-5xl mb-6">⭐</div>

        <h3 className="text-2xl font-bold text-yellow-400 mb-6">

          Satisfaction Guaranteed

        </h3>

        <p className="text-gray-300 leading-8">

          Every vehicle is treated with the same care, pride, and attention
          to detail as if it were our own. We aren't satisfied until you are.

        </p>

      </div>

      {/* Card 4 */}

      <div className="bg-black border border-yellow-500 rounded-2xl p-10 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:border-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]">

        <div className="text-5xl mb-6">🇺🇸</div>

        <h3 className="text-2xl font-bold text-yellow-400 mb-6">

          Locally Owned

        </h3>

        <p className="text-gray-300 leading-8">

          Proudly serving Rose Bud and Central Arkansas with honest pricing,
          dependable service, and workmanship built on integrity.

        </p>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
                    OUR PROMISE
===================================================== */}

<section className="bg-black py-28 px-6">

  <div className="max-w-5xl mx-auto text-center">

    <Image
      src="/images/legacy-crest.png"
      alt="Legacy Family Crest"
      width={170}
      height={170}
      className="mx-auto mb-10 transition-all duration-700 hover:scale-110 drop-shadow-[0_0_35px_rgba(250,204,21,0.45)] hover:drop-shadow-[0_0_60px_rgba(250,204,21,0.8)]"
    />

    <h2 className="text-5xl font-bold text-yellow-400">

      Our Promise

    </h2>

    <p className="text-xl text-gray-300 leading-10 mt-10 max-w-4xl mx-auto">

      Every vehicle entrusted to Legacy Auto Detailing is treated with the
      same care, respect, and attention to detail as if it were our own.

      <br /><br />

      We believe professionalism, integrity, craftsmanship, and honest
      service should be evident in every interaction—from your first phone
      call to the final inspection.

      <br /><br />

      Our mission is simple:

      <span className="text-yellow-400 font-bold">

        Protect Your Investment. Preserve Your Legacy.

      </span>

    </p>

  </div>

</section>
{/* =====================================================
                    PRICING
===================================================== */}

<section
  id="pricing"
  className="bg-zinc-950 py-32 px-6"
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-yellow-400">

      Premium Detailing Packages

    </h2>

    <p className="text-center text-xl text-gray-400 mt-6 mb-20">

      Transparent pricing. Premium results. No surprises.

    </p>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

      {/* ================= ESSENTIAL ================= */}

      <div className="bg-black border border-yellow-500 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:border-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]">

        <h3 className="text-3xl font-bold text-yellow-400">

          Legacy Essential

        </h3>

        <p className="text-6xl font-bold mt-8">

          $129

        </p>

        <p className="text-gray-500">

          Starting At

        </p>

        <ul className="space-y-3 mt-8 text-gray-300">

          <li>✔ Premium Hand Wash</li>
          <li>✔ Wheels & Tires</li>
          <li>✔ Interior Vacuum</li>
          <li>✔ Dashboard Cleaning</li>
          <li>✔ Interior Windows</li>
          <li>✔ Final Inspection</li>

        </ul>

        <a
          href="#contact"
          className="block mt-10 bg-yellow-400 text-center text-black font-bold py-4 rounded-xl transition-all duration-300 hover:bg-yellow-300 hover:-translate-y-1"
        >
          Book Essential
        </a>

      </div>

      {/* ================= PREMIUM ================= */}

      <div className="relative bg-yellow-400 text-black rounded-2xl p-8 scale-105 shadow-2xl transition-all duration-500 hover:scale-110">

        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-yellow-400 px-5 py-2 rounded-full font-bold text-sm">

          MOST POPULAR

        </div>

        <h3 className="text-3xl font-bold mt-6">

          Legacy Premium

        </h3>

        <p className="text-6xl font-bold mt-8">

          $229

        </p>

        <p>

          Starting At

        </p>

        <ul className="space-y-3 mt-8">

          <li>✔ Everything in Essential</li>
          <li>✔ Foam Cannon Wash</li>
          <li>✔ Clay Bar Treatment</li>
          <li>✔ Steam Cleaning</li>
          <li>✔ Leather Conditioning</li>
          <li>✔ Paint Sealant</li>
          <li>✔ Door Jambs</li>

        </ul>

        <a
          href="#contact"
          className="block mt-10 bg-black text-yellow-400 text-center font-bold py-4 rounded-xl transition-all duration-300 hover:bg-zinc-900"
        >
          Book Premium
        </a>

      </div>

      {/* ================= SIGNATURE ================= */}

      <div className="bg-black border border-yellow-500 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:border-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]">

        <h3 className="text-3xl font-bold text-yellow-400">

          Legacy Signature

        </h3>

        <p className="text-6xl font-bold mt-8">

          $399

        </p>

        <p className="text-gray-500">

          Starting At

        </p>

        <ul className="space-y-3 mt-8 text-gray-300">

          <li>✔ Everything in Premium</li>
          <li>✔ Paint Enhancement</li>
          <li>✔ Engine Bay Detail</li>
          <li>✔ Carpet Shampoo</li>
          <li>✔ Seat Shampoo</li>
          <li>✔ Trim Restoration</li>
          <li>✔ Showroom Finish</li>

        </ul>

        <a
          href="#contact"
          className="block mt-10 bg-yellow-400 text-center text-black font-bold py-4 rounded-xl transition-all duration-300 hover:bg-yellow-300 hover:-translate-y-1"
        >
          Book Signature
        </a>

      </div>

      {/* ================= CERAMIC ================= */}

      <div className="bg-black border border-yellow-500 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:border-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]">

        <div className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-full">

          Coming 2027

        </div>

        <h3 className="text-3xl font-bold text-yellow-400 mt-6">

          Legacy Ceramic

        </h3>

        <p className="text-gray-400 mt-6 leading-8">

          Professional ceramic coating services with premium coating systems,
          long-term protection, incredible gloss, and hydrophobic performance.

        </p>

        <ul className="space-y-3 mt-8 text-gray-300">

          <li>✔ Multi-Year Protection</li>
          <li>✔ UV Protection</li>
          <li>✔ Hydrophobic Finish</li>
          <li>✔ Easier Maintenance</li>
          <li>✔ Professional Installation</li>

        </ul>

        <a
          href="#contact"
          className="block mt-10 border-2 border-yellow-400 text-center text-yellow-400 font-bold py-4 rounded-xl transition-all duration-300 hover:bg-yellow-400 hover:text-black"
        >
          Join Waitlist
        </a>

      </div>

    </div>

  </div>

</section>
{/* =====================================================
                  CONTACT
===================================================== */}

<section
  id="contact"
  className="bg-black py-32 px-6"
>

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-yellow-400">

      Request Your Free Quote

    </h2>

    <p className="text-center text-xl text-gray-400 mt-6 mb-16 max-w-3xl mx-auto">

      Ready to restore and protect your vehicle? Tell us about your vehicle
      below and we'll contact you with a customized quote.

    </p>

    <div className="grid lg:grid-cols-3 gap-10 mb-20">

      <div className="bg-zinc-900 rounded-2xl border border-yellow-500 p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(250,204,21,0.45)]">

        <div className="text-5xl mb-5">📞</div>

        <h3 className="text-2xl font-bold text-yellow-400 mb-4">

          Call

        </h3>

        <a
          href="tel:+15017332375"
          className="text-gray-300 hover:text-yellow-400"
        >

          (501) 733-2375

        </a>

      </div>

      <div className="bg-zinc-900 rounded-2xl border border-yellow-500 p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(250,204,21,0.45)]">

        <div className="text-5xl mb-5">📧</div>

        <h3 className="text-2xl font-bold text-yellow-400 mb-4">

          Email

        </h3>

        <a
          href="mailto:info@legacyautodetailingar.com"
          className="text-gray-300 hover:text-yellow-400 break-all"
        >

          info@legacyautodetailingar.com

        </a>

      </div>

      <div className="bg-zinc-900 rounded-2xl border border-yellow-500 p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(250,204,21,0.45)]">

        <div className="text-5xl mb-5">📍</div>

        <h3 className="text-2xl font-bold text-yellow-400 mb-4">

          Service Area

        </h3>

        <p className="text-gray-300">

          Rose Bud, Arkansas

          <br /><br />

          Proudly Serving Central Arkansas

        </p>

      </div>

    </div>

    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid md:grid-cols-2 gap-8"
    >

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className="bg-zinc-900 border border-yellow-500 rounded-xl p-5 text-white"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="bg-zinc-900 border border-yellow-500 rounded-xl p-5 text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="bg-zinc-900 border border-yellow-500 rounded-xl p-5 text-white"
      />

      <select
        name="service"
        className="bg-zinc-900 border border-yellow-500 rounded-xl p-5 text-white"
      >

        <option>Select Package</option>

        <option>Legacy Essential</option>

        <option>Legacy Premium</option>

        <option>Legacy Signature</option>

        <option>Legacy Ceramic</option>

      </select>

      <input
        type="text"
        name="vehicle_make_model"
        placeholder="Vehicle Make & Model"
        className="bg-zinc-900 border border-yellow-500 rounded-xl p-5 text-white"
      />

      <input
        type="date"
        name="date"
        className="bg-zinc-900 border border-yellow-500 rounded-xl p-5 text-white"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Tell us about your vehicle..."
        className="md:col-span-2 bg-zinc-900 border border-yellow-500 rounded-xl p-5 text-white"
      ></textarea>

      <button
        type="submit"
        className="md:col-span-2 bg-yellow-400 text-black font-bold py-5 rounded-xl transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.45)] hover:-translate-y-1"
      >

        Request My Free Quote

      </button>

    </form>

  </div>

</section>
{/* =====================================================
                    FOOTER
===================================================== */}

<footer className="bg-zinc-950 border-t border-yellow-500 py-24 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="flex justify-center">

      <Image
        src="/images/legacy-crest.png"
        alt="Legacy Auto Detailing Crest"
        width={240}
        height={240}
        className="
        transition-all
        duration-700
        hover:scale-110
        hover:rotate-2
        drop-shadow-[0_0_35px_rgba(250,204,21,0.45)]
        hover:drop-shadow-[0_0_70px_rgba(250,204,21,0.80)]
        "
      />

    </div>

    <div className="text-center mt-10">

      <h2 className="text-5xl font-extrabold text-yellow-400">

        Legacy Auto Detailing LLC

      </h2>

      <p className="text-2xl italic text-gray-300 mt-6">

        Protect Your Investment.
        <br />
        Preserve Your Legacy.

      </p>

      <p className="text-gray-400 leading-8 max-w-3xl mx-auto mt-8">

        Premium mobile detailing serving Rose Bud and Central Arkansas.
        We are committed to restoring, protecting, and preserving every
        vehicle with professional craftsmanship and unmatched customer care.

      </p>

    </div>

    <div className="border-t border-yellow-500 my-16"></div>

    <div className="grid md:grid-cols-3 gap-14">

      {/* Contact */}

      <div>

        <h3 className="text-yellow-400 text-2xl font-bold mb-6">

          Contact

        </h3>

        <div className="space-y-4 text-gray-300">

          <p>📞 (501) 733-2375</p>

          <p>📧 info@legacyautodetailingar.com</p>

          <p>📍 Rose Bud, Arkansas</p>

        </div>

      </div>

      {/* Navigation */}

      <div>

        <h3 className="text-yellow-400 text-2xl font-bold mb-6">

          Quick Links

        </h3>

        <div className="flex flex-col gap-4">

          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>

          <a href="#pricing" className="hover:text-yellow-400 transition">
            Pricing
          </a>

          <a href="#gallery" className="hover:text-yellow-400 transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </div>

      </div>

      {/* Hours */}

      <div>

        <h3 className="text-yellow-400 text-2xl font-bold mb-6">

          Business Hours

        </h3>

        <div className="space-y-4 text-gray-300">

          <p>Monday – Friday</p>
          <p>8:00 AM – 6:00 PM</p>

          <p>Saturday</p>
          <p>By Appointment</p>

          <p>Sunday</p>
          <p>Closed</p>

        </div>

      </div>

    </div>

    <div className="border-t border-zinc-800 mt-20 pt-10 text-center">

      <p className="text-gray-500">

        © 2026 Legacy Auto Detailing LLC. All Rights Reserved.

      </p>

      <p className="text-yellow-400 italic mt-4 text-lg">

        Fides • Honos • Fortitudo

      </p>

    </div>

  </div>

</footer>

</main>

  );

}