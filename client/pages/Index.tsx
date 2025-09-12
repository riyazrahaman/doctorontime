import { useState } from "react";
import {
  Search,
  MapPin,
  Heart,
  Pill,
  Syringe,
  Brain,
  Clipboard,
  Hand,
  Dna,
  Eye,
  Plus,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-medical-secondary border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-opensans">
              <span className="text-medical-primary">DoctorOnTime</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-medical-primary font-inter text-base font-medium hover:text-medical-dark transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black font-inter text-base hover:text-medical-primary transition-colors"
            >
              Specialties
            </a>
            <a
              href="#"
              className="text-black font-inter text-base hover:text-medical-primary transition-colors"
            >
              Doctors
            </a>
            <a
              href="#"
              className="text-black font-inter text-base hover:text-medical-primary transition-colors"
            >
              OPO
            </a>
            <a
              href="#"
              className="text-black font-inter text-base hover:text-medical-primary transition-colors"
            >
              Login
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-medical-primary text-white px-6 py-3 rounded-xl font-inter text-base hover:bg-medical-dark transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <a
              href="#"
              className="block text-medical-primary font-inter text-base font-medium"
            >
              Home
            </a>
            <a href="#" className="block text-black font-inter text-base">
              Specialties
            </a>
            <a href="#" className="block text-black font-inter text-base">
              Doctors
            </a>
            <a href="#" className="block text-black font-inter text-base">
              OPO
            </a>
            <a href="#" className="block text-black font-inter text-base">
              Login
            </a>
            <button className="w-full bg-medical-primary text-white px-6 py-3 rounded-xl font-inter text-base mt-4">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-medical-secondary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta leading-tight">
                <span className="text-medical-dark">Get Expert </span>
                <span className="text-medical-primary">
                  Medical Consultation!
                </span>
              </h1>
              <p className="text-medical-text-secondary font-inter text-lg max-w-md">
                Our doctors provide expert medical advice and consultation. Get
                in touch with our team to discuss.
              </p>
              <p className="text-medical-dark font-inter font-semibold">
                DoctorOnTime – No Queues. Just Care. ✅
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-xl shadow-lg p-4 max-w-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <MapPin className="w-6 h-6 text-gray-600" />
                    <input
                      type="text"
                      placeholder="Search Doctors in your location"
                      className="flex-1 text-gray-700 font-inter text-sm outline-none"
                    />
                  </div>
                  <button className="bg-medical-primary p-3 rounded-xl hover:bg-medical-dark transition-colors">
                    <Search className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 lg:max-w-lg">
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d4dc4db78e1dfc7a1d7eb0a111caebfc729ba018?width=1110"
                  alt="Beautiful young female doctor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-medical-secondary rounded-full shadow-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="flex-1 lg:max-w-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8b8ef59a7e0ac4cf5630da181b8f8ad4a0c8c95e?width=1094"
              alt="Medical team"
              className="w-full h-auto rounded-[56px] shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-medical-primary font-inter text-base font-semibold mb-4">
                About Us
              </p>
              <h2 className="text-medical-dark font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                DoctorOnTime – No Queues. Just Care. ✅
              </h2>
            </div>
            <p className="text-medical-text-secondary font-inter text-lg leading-relaxed">
              DoctorOnTime is a smart healthcare booking platform that connects
              patients to top hospitals instantly. Our mission is simple – no
              waiting, no hassle, just timely access to the right doctors.
            </p>
            <button className="bg-medical-primary text-white px-8 py-4 rounded-lg font-inter text-base hover:bg-medical-dark transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpecialtyCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <div className="group p-8 rounded-3xl shadow-lg transition-all hover:scale-105 bg-white text-gray-900 hover:bg-medical-primary hover:text-white">
      <div className="text-center space-y-6">
        <div className="w-28 h-28 mx-auto rounded-3xl flex items-center justify-center bg-medical-secondary">
          <Icon className="w-12 h-12 text-medical-primary group-hover:text-white" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-jakarta group-hover:text-white">
            {title}
          </h3>
          <p className="text-lg font-inter leading-relaxed text-medical-text-secondary group-hover:text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const SpecialtySection = () => {
  const specialties = [
    {
      icon: Pill,
      title: "Dentistry",
      description: "Get consultation Form our Dentistry team",
    },
    {
      icon: Syringe,
      title: "General Diagnosis",
      description: "Get consultation form our General Diagnosis team",
    },
    {
      icon: Brain,
      title: "Neuro Surgery",
      description: "Get consultation form our Neuro Surgery team",
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Get consultation form our Cardiology team",
    },
    {
      icon: Clipboard,
      title: "Pharmacy",
      description: "Get consultation form our Pharmacy team",
    },
    {
      icon: Hand,
      title: "Trained Staff",
      description: "Get consultation form our Trained staff team",
    },
    {
      icon: Dna,
      title: "DNA Mapping",
      description: "Get consultation form our DNA Mapping team",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Get consultation form our Ophthalmology team",
    },
    {
      icon: Plus,
      title: "Medical Aid",
      description: "Get consultation form our Emergency Medical Aid Team",
    },
  ];

  return (
    <section className="bg-medical-secondary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-medical-dark font-jakarta text-4xl md:text-5xl lg:text-6xl font-bold">
            Our Specialty
          </h2>
          <p className="text-black font-inter text-lg max-w-md mx-auto">
            We provide the world class services with the best medical team!
          </p>
        </div>

        {/* Specialty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              icon={specialty.icon}
              title={specialty.title}
              description={specialty.description}
              isHighlighted={specialty.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image Grid */}
          <div className="flex-1 lg:max-w-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/42b32d4ee20c70f83a150bb3cd7f870b6c857870?width=524"
                  alt="Doctor 1"
                  className="w-full h-48 lg:h-64 object-cover rounded-[44px]"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/eee43c2c227c95ab9ba87d400df29db946a3c258?width=524"
                  alt="Doctor 2"
                  className="w-full h-48 lg:h-64 object-cover rounded-[44px]"
                />
              </div>
              <div className="space-y-4 mt-12">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/aa98b40ba8e1c325d95378d2648cd753d6b60a42?width=524"
                  alt="Doctor 3"
                  className="w-full h-48 lg:h-64 object-cover rounded-[44px]"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/97d2ff7ddf32dc305efbcab2d7bbd7f8dfe5b4bb?width=524"
                  alt="Doctor 4"
                  className="w-full h-48 lg:h-64 object-cover rounded-[44px]"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-medical-primary font-inter text-base font-semibold mb-4">
                Integrity
              </p>
              <h2 className="text-medical-dark font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Our Stellar Values
              </h2>
            </div>
            <div className="space-y-4 text-medical-text-secondary font-inter text-lg leading-relaxed">
              <p>
                <span className="font-jakarta font-bold text-medical-dark">
                  Timeliness -
                </span>{" "}
                We value your time. No waiting rooms, no delays, just faster
                access to care.
              </p>
              <p>
                <span className="font-jakarta font-bold text-medical-dark">
                  Trust -
                </span>{" "}
                Health is personal, and we build every connection with honesty
                and reliability.
              </p>
              <p>
                <span className="font-jakarta font-bold text-medical-dark">
                  Innovation -
                </span>{" "}
                We harness AI and technology to make healthcare smarter and
                simpler.
              </p>
              <p>
                <span className="font-jakarta font-bold text-medical-dark">
                  Patient-First Care -
                </span>{" "}
                Every decision we make starts with what’s best for the patient.
              </p>
              <p>
                <span className="font-jakarta font-bold text-medical-dark">
                  Accessibility -
                </span>{" "}
                Quality healthcare should be available to everyone, everywhere.
              </p>
            </div>
            <button className="bg-medical-primary text-white px-8 py-4 rounded-lg font-inter text-base hover:bg-medical-dark transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
      {/* Quote Icon */}
      <div className="text-medical-dark">
        <svg width="30" height="30" viewBox="0 0 31 30" fill="none">
          <path
            d="M13.3871 20.3832C13.3871 21.5795 12.9684 22.5813 12.131 23.3888C11.2936 24.1963 10.2469 24.6 8.99081 24.6C7.79455 24.6 6.77772 24.1365 5.94034 23.2094C5.10296 22.2823 4.68427 21.1159 4.68427 19.7103C4.68427 18.6935 4.90856 17.572 5.35716 16.3458C5.83567 15.1197 6.44875 13.8785 7.19641 12.6225C7.97398 11.3664 8.84127 10.1253 9.79828 8.89909C10.7852 7.64302 11.7721 6.47666 12.759 5.40002L13.9702 6.38694C12.6245 7.97199 11.503 9.57199 10.6058 11.1869C9.70856 12.8019 9.17025 14.3869 8.99081 15.9421C10.1871 16.0318 11.2188 16.4804 12.0861 17.2879C12.9534 18.0954 13.3871 19.1271 13.3871 20.3832ZM26.2618 20.3832C26.2618 21.5795 25.8431 22.5813 25.0058 23.3888C24.1684 24.1963 23.1216 24.6 21.8656 24.6C20.6693 24.6 19.6525 24.1365 18.8151 23.2094C17.9777 22.2823 17.559 21.1159 17.559 19.7103C17.559 18.6935 17.7833 17.572 18.2319 16.3458C18.7104 15.1197 19.3235 13.8785 20.0712 12.6225C20.8488 11.3664 21.716 10.1253 22.6731 8.89909C23.66 7.64302 24.6469 6.47666 25.6338 5.40002L26.8002 6.38694C25.4544 7.97199 24.3329 9.57199 23.4357 11.1869C22.5684 12.8019 22.045 14.3869 21.8656 15.9421C23.0618 16.0318 24.0936 16.4804 24.9609 17.2879C25.8282 18.0954 26.2618 19.1271 26.2618 20.3832Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Quote */}
      <p className="text-medical-text-secondary font-inter text-sm leading-relaxed">
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bf867458385ab2d484f8278255ff8f63b1de895e?width=80"
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-medical-text-secondary font-inter text-sm font-semibold">
            {name}
          </p>
          <p className="text-medical-text-light font-inter text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Amazing work with zero hustle we got our appointment booked and the best part is 10% on medical bill it saved a lot for me",
      name: "Michael",
      role: "User",
    },
    {
      quote:
        "Amazing work with zero hustle we got our appointment booked and the best part is 10% on medical bill it saved a lot for me",
      name: "Sarah",
      role: "User",
    },
    {
      quote:
        "Amazing work with zero hustle we got our appointment booked and the best part is 10% on medical bill it saved a lot for me",
      name: "Daniel",
      role: "User",
    },
    {
      quote:
        "Amazing work with zero hustle we got our appointment booked and the best part is 10% on medical bill it saved a lot for me",
      name: "Priya",
      role: "User",
    },
  ];

  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((s) => (s - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((s) => (s + 1) % testimonials.length);

  return (
    <section className="bg-medical-secondary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-8">
          <div className="lg:max-w-2xl space-y-4">
            <h2 className="text-medical-dark font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Read feedback about our Services and wonderful team!
            </h2>
            <p className="text-medical-text-secondary font-inter text-lg">
              We take care of our users just like a family member. Read the
              testimonials from our users.
            </p>
          </div>

          {/* Desktop Navigation (kept for larger screens) */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center hover:bg-medical-dark transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center hover:bg-medical-dark transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="max-w-md mx-auto">
            <TestimonialCard
              quote={testimonials[active].quote}
              name={testimonials[active].name}
              role={testimonials[active].role}
            />

            {/* Arrows below the box */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={prev}
                className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center hover:bg-medical-dark transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div className="text-sm text-medical-text-secondary font-inter">
                {active + 1} / {testimonials.length}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center hover:bg-medical-dark transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-medical-footer text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-jakarta">
                  DoctorOnTime
                </h3>
                <p className="text-medical-text-light font-inter text-sm leading-relaxed">
                  The ultimate destination for all of your medical needs
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <div className="w-8 h-8 border border-medical-text-light rounded-full flex items-center justify-center hover:bg-medical-text-light hover:text-medical-footer transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 border border-medical-text-light rounded-full flex items-center justify-center hover:bg-medical-text-light hover:text-medical-footer transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 border border-medical-text-light rounded-full flex items-center justify-center hover:bg-medical-text-light hover:text-medical-footer transition-colors cursor-pointer">
                  <Instagram className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Explore */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold font-jakarta">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    Surgery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    OPD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    Speciality
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold font-jakarta">About Us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    Who we are
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    Our Vision
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medical-text-light font-inter text-sm hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold font-jakarta">Contact</h4>
              <ul className="space-y-3">
                <li className="text-medical-text-light font-inter text-sm">
                  +923041234567
                </li>
                <li className="text-medical-text-light font-inter text-sm">
                  favorite@doctor.com
                </li>
                <li className="text-medical-text-light font-inter text-sm">
                  Glassplace, Near
                  <br />
                  Cool Avenue, Boson
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-medical-footer-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white font-inter">
            Copyright 2024 Favorite Doctor, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <HeroSection />
      <AboutSection />
      <SpecialtySection />
      <ValuesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
