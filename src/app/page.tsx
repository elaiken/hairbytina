"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-xl text-gold tracking-wider">
            Hair By Tina
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-sans tracking-widest uppercase">
            <a href="#about" className="text-gray-light hover:text-gold transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-light hover:text-gold transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-gray-light hover:text-gold transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-gray-light hover:text-gold transition-colors">
              Contact
            </a>
            <a
              href="#book"
              className="border border-gold text-gold px-5 py-2 hover:bg-gold hover:text-dark transition-colors"
            >
              Book Now
            </a>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-gold" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-90" />
        <div className="relative z-10">
          <p className="font-sans text-gold text-sm tracking-[0.4em] uppercase mb-6">
            Luxury Hair Studio
          </p>
          <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-6 leading-tight">
            Hair By Tina
          </h1>
          <div className="w-24 h-px bg-gold mx-auto mb-6" />
          <p className="font-sans text-gray-light text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Where elegance meets artistry. Experience premium hair care tailored to your unique beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="bg-gold text-dark font-sans font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="border border-gold/40 text-gold font-sans font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:border-gold hover:bg-gold/10 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] bg-dark-card border border-gold/10 flex items-center justify-center">
            <span className="text-gray text-sm tracking-widest uppercase">Photo Coming Soon</span>
          </div>
          <div>
            <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Meet Tina</h2>
            <div className="w-16 h-px bg-gold mb-6" />
            <p className="text-gray-light leading-relaxed mb-6">
              With over 10 years of experience in the beauty industry, Tina has built a reputation for
              transforming hair into works of art. Her passion for beauty began at a young age and has
              grown into a career dedicated to making every client feel confident and radiant.
            </p>
            <p className="text-gray-light leading-relaxed mb-8">
              Specializing in color, cuts, braids, and extensions, Tina stays at the forefront of
              trends while honoring timeless techniques. Every appointment is a personalized experience
              designed around you.
            </p>
            <p className="font-serif text-gold text-xl italic">
              &ldquo;Your hair is your crown — wear it well.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-dark-lighter">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Services</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Haircuts & Styling", price: "From $65", desc: "Precision cuts and custom styling for any occasion." },
            { name: "Hair Coloring", price: "From $95", desc: "Full color, highlights, balayage, and creative color." },
            { name: "Braids & Twists", price: "From $85", desc: "Box braids, cornrows, twists, and protective styles." },
            { name: "Extensions & Weaves", price: "From $150", desc: "Sew-ins, clip-ins, tape-ins, and fusion extensions." },
            { name: "Treatments & Repair", price: "From $55", desc: "Deep conditioning, keratin, and damage repair." },
            { name: "Bridal & Special Events", price: "From $120", desc: "Glamorous looks for your most important moments." },
          ].map((service) => (
            <div
              key={service.name}
              className="bg-dark-card border border-gold/10 p-8 hover:border-gold/30 transition-colors group"
            >
              <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold transition-colors">
                {service.name}
              </h3>
              <p className="text-gold font-sans text-sm font-semibold tracking-wider mb-4">
                {service.price}
              </p>
              <p className="text-gray text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#book"
            className="inline-block bg-gold text-dark font-sans font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors"
          >
            Book a Service
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Gallery</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Balayage Blend",
            "Silk Press",
            "Box Braids",
            "Bridal Updo",
            "Color Transformation",
            "Protective Style",
          ].map((label, i) => (
            <div
              key={label}
              className="aspect-square bg-dark-card border border-gold/10 flex items-center justify-center hover:border-gold/30 transition-colors"
            >
              <span className="text-gray text-xs tracking-widest uppercase text-center px-4">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-dark-lighter">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Client Love
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Testimonials</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Tina is absolutely amazing! My hair has never looked this good. I won't trust anyone else.",
              name: "Michelle R.",
            },
            {
              quote: "The best salon experience I've ever had. So relaxing and my color came out perfect.",
              name: "Jasmine T.",
            },
            {
              quote: "Tina did my wedding hair and I cried happy tears. She truly is an artist.",
              name: "Ashley M.",
            },
          ].map((t) => (
            <div key={t.name} className="text-center">
              <p className="text-gold text-3xl font-serif mb-4">&ldquo;</p>
              <p className="text-gray-light text-sm leading-relaxed mb-4 italic">
                {t.quote}
              </p>
              <p className="text-gold font-sans text-xs tracking-widest uppercase">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking / Contact Section */}
      <section id="book" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Book Your Visit</h2>
            <div className="w-16 h-px bg-gold mb-8" />
            <p className="text-gray-light leading-relaxed mb-8">
              Ready to elevate your look? Reach out to schedule your appointment. Walk-ins are
              welcome, but booking ahead ensures your preferred time slot.
            </p>
            <div id="contact" className="space-y-4 text-sm font-sans">
              <div className="flex items-center gap-4">
                <span className="text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="text-gray-light">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-gray-light">hello@hairbytina.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-gray-light">123 Beauty Lane, Suite 4, Los Angeles, CA 90001</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-gray-light">Tue – Sat: 9am – 7pm | Sun – Mon: Closed</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-gold hover:text-gold-light transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-gray mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-dark-card border border-gold/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-gray mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full bg-dark-card border border-gold/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-gray mb-2">
                  Service Interested In
                </label>
                <select className="w-full bg-dark-card border border-gold/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors">
                  <option value="">Select a service</option>
                  <option value="haircut">Haircut & Styling</option>
                  <option value="color">Hair Coloring</option>
                  <option value="braids">Braids & Twists</option>
                  <option value="extensions">Extensions & Weaves</option>
                  <option value="treatment">Treatments & Repair</option>
                  <option value="bridal">Bridal & Special Events</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-gray mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-dark-card border border-gold/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about the look you're going for..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-dark font-sans font-semibold text-sm tracking-widest uppercase py-4 hover:bg-gold-light transition-colors"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/10 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-serif text-gold text-lg tracking-wider">Hair By Tina</p>
          <p className="text-gray text-xs font-sans tracking-wider">
            &copy; {new Date().getFullYear()} Hair By Tina. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
