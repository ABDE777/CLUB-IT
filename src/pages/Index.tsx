import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  const textElements = useRef([]);
  const buttonRef = useRef(null);

  // Hero animation with staggered text reveals
  useEffect(() => {
    const hero = heroRef.current;
    const texts = textElements.current.filter(Boolean); // Filter out null elements
    const heroButton = buttonRef.current;

    if (!hero || texts.length === 0 || !heroButton) return; // Guard clause

    // Clear any existing animations
    gsap.killTweensOf([hero, ...texts, heroButton]);

    // Create timeline for staggered animation
    const tl = gsap.timeline();

    tl.fromTo(
      hero,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        texts,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(
        heroButton,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "elastic.out(1, 0.5)" },
        "-=0.5"
      );
  }, []);

  // Scroll animations
  useEffect(() => {
    // Clean up function to avoid memory leaks
    const cleanUp = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      // Get all headings, paragraphs, and images in the section
      const heading = section.querySelector("h2");
      const paragraphs = section.querySelectorAll("p");
      const cards = section.querySelectorAll(".card-item");
      const buttons = section.querySelectorAll("button");

      if (!heading) return; // Skip if no heading is found

      // Create a timeline for each section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Animate the elements if they exist
      tl.fromTo(
        heading,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      if (paragraphs.length > 0) {
        tl.fromTo(
          paragraphs,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );
      }

      if (buttons.length > 0) {
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        );
      }
    });

    // Clean up animations when component unmounts
    return cleanUp;
  }, []);

  // Sponsors and Professors data
  const sponsors = [
    {
      name: "OFPPT",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Mr. KAMAL DAOUDI",
      field: "DEVELOPEMENT WEB",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Mme HANANE BELAOUD",
      field: "RESEAU",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "InnovateTech",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "FutureSystems",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "NextGen Solutions",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Digital Innovators",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navbar with hover animations */}
      <nav className="bg-black bg-opacity-80 backdrop-blur-md text-white py-4 px-6 fixed w-full z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-orbitron">CLUB IT</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="relative px-2 py-1 overflow-hidden group"
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-500 group-hover:w-full"></span>
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#members"
              className="relative px-2 py-1 overflow-hidden group"
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-500 group-hover:w-full"></span>
              Membres
            </a>
          </li>
          <li>
            <a
              href="#sponsors"
              className="relative px-2 py-1 overflow-hidden group"
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-500 group-hover:w-full"></span>
              encadrants
            </a>
          </li>
          <li>
            <a
              href="#announcements"
              className="relative px-2 py-1 overflow-hidden group"
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-500 group-hover:w-full"></span>
              Annonces
            </a>
          </li>
          <li>
            <button
              className="relative px-2 py-1 overflow-hidden group cursor-pointer bg-transparent border-none"
              onClick={() => {
                setShowForm(true);
                setFormType("Join");
              }}
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-500 group-hover:w-full"></span>
              Rejoindre
            </button>
          </li>
        </ul>
      </nav>

      {/* Enhanced Hero Section with combined content and animations */}
      <section
        ref={heroRef}
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 pt-16 overflow-hidden"
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1
            ref={(el) => (textElements.current[0] = el)}
            className="text-5xl md:text-7xl font-bold font-orbitron mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
          >
            BIENVENUE AU CLUB IT ISFO
          </h1>

          <p
            ref={(el) => (textElements.current[1] = el)}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-300 font-exo"
          >
            Accompagner les étudiants à travers la technologie, l'innovation et
            la collaboration.
          </p>

          <p
            ref={(el) => (textElements.current[2] = el)}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-400 font-exo"
          >
            Nous nous concentrons principalement sur le développement web et le
            développement réseau, tout en organisant des compétitions, comme des
            hackathons, ainsi que diverses activités parascolaires et
            formations. Notre mission est de créer une communauté dynamique
            rassemblant des passionnés de technologie et des futurs innovateurs,
            tout en accompagnant les étudiants rencontrant des difficultés dans
            ces domaines.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            ref={buttonRef}
          >
            <button
              className="px-8 py-3 bg-indigo-600 text-white text-lg rounded-lg relative overflow-hidden group"
              onClick={() => {
                setShowForm(true);
                setFormType("Join");
              }}
            >
              <span className="absolute top-0 left-0 w-full h-0 bg-white bg-opacity-20 transition-all duration-300 group-hover:h-full"></span>
              <span className="relative z-10">Rejoindre Notre Communauté</span>
            </button>

            <button
              className="px-8 py-3 border-2 border-indigo-600 text-white text-lg rounded-lg relative overflow-hidden group"
              onClick={() =>
                document
                  .getElementById("members")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="absolute top-0 left-0 w-0 h-full bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10">Découvrir Plus</span>
            </button>
          </div>
        </div>
      </section>

      {/* Members Section with card hover effects */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        id="members"
        className="py-20 px-6 bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center my-10">
            <h2 className="text-4xl font-bold font-orbitron inline-block relative">
              Nos Membres
              <span className="absolute left-0 top- bottom-0 w-full h-0.5 bg-indigo-600 mt-20"></span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="card-item relative group w-full max-w-[180px] aspect-[3/4] bg-gray-700 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:rotate-1"
              >
                <div className="absolute inset-0 bg-gray-600 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-lg font-bold transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    Membre {index + 1}
                  </p>
                  <p className="text-sm text-gray-300 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Rôle: President
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors and Professors Section with enhanced sliders */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        id="sponsors"
        className="py-20 px-6 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center my-10">
            <h2 className="text-4xl font-bold font-orbitron inline-block relative">
              Nos encadrants & Nos Sponsors
              <span className="absolute left-0 top- bottom-0 w-full h-0.5 bg-indigo-600 mt-20"></span>
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            loop={true}
            className="mb-20"
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="card-item bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] h-[300px]">
                  <div className="h-[60%] overflow-hidden">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 filter hover:brightness-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-[40%] p-5 flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900">
                    <h3 className="text-2xl font-bold font-orbitron text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                      {sponsor.name}
                    </h3>
                    <p className="text-gray-400 text-center mt-2 font-exo">
                      {sponsor.field || "Sponsor Fier"}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Announcements Section with enhanced cards */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        id="announcements"
        className="py-20 px-6 bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center my-10">
            <h2 className="text-4xl font-bold font-orbitron inline-block relative">
              Nos Anonces
              <span className="absolute left-0 top- bottom-0 w-full h-0.5 bg-indigo-600 mt-20"></span>
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="card-item bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-l-4 border-indigo-600"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 animate-pulse relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30"></div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-2xl font-bold font-orbitron mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                      Annonce {index + 1}
                    </h3>
                    <p className="text-gray-300 mb-6 font-exo">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent nec magna tristique, dapibus felis non, accumsan
                      odio. Nullam sed semper nisi, vel congue lectus. Morbi
                      vitae aliquam sem, at volutpat nisi.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-exo">
                        Publié le: {10 + index} Mai, 2023
                      </span>
                      <button
                        className="px-5 py-2 bg-indigo-600 text-white rounded-lg relative overflow-hidden group"
                        onClick={() => {
                          setShowForm(true);
                          setFormType("Register");
                        }}
                      >
                        <span className="absolute top-0 left-0 w-full h-0 bg-white bg-opacity-20 transition-all duration-300 group-hover:h-full"></span>
                        <span className="relative z-10">S'inscrire</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with animated gradient */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold font-orbitron mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                CLUB IT ISFO
              </h2>
              <p className="text-gray-400 font-exo">
                Accompagner les étudiants à travers la technologie, l'innovation
                et la collaboration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-orbitron mb-6 relative inline-block">
                Liens Rapides
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"></span>
              </h3>
              <ul className="space-y-3 font-exo">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#members"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Membres
                  </a>
                </li>
                <li>
                  <a
                    href="#sponsors"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> encadrants & Sponsors
                  </a>
                </li>
                <li>
                  <a
                    href="#announcements"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Annonces
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold font-orbitron mb-6 relative inline-block">
                Ressources
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"></span>
              </h3>
              <ul className="space-y-3 font-exo">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Tutoriels
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Calendrier
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> Newsletter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold font-orbitron mb-6 relative inline-block">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"></span>
              </h3>
              <ul className="space-y-3 font-exo">
                <li className="flex items-start text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="mr-2 mt-1">📍</span>
                  <span>
                    ISFO CASABLANCA / DR CASA SETTAT Route Aeroport Sidi MAAROUF
                    CASABLANCA
                  </span>
                </li>
                <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="mr-2">✉️</span>
                  CLUB-IT-ISFO@gmail.com
                </li>
                <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="mr-2">📱</span>
                  Tel : 0522
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300 group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300 group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300 group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-8 text-center">
            <p className="font-extrabold text-gray-500 text-lg px-4 font-orbitron">
              © {new Date().getFullYear()} CLUB IT ISFO. Tous droits réservés.
            </p>
            <p className="font-bold text-gray-500 text-lg px-4 font-exo">
              Toute reproduction, distribution ou utilisation non autorisée du
              contenu est strictement interdite.
            </p>
          </div>
        </div>

        {/* Animated gradient background */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 background-animate"></div>
      </footer>

      {/* Floating Registration Form with animation */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-sm z-50 p-4">
          <div
            className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-scale-in"
            style={{ animation: "scale-in 0.3s ease-out forwards" }}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setShowForm(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold font-orbitron text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              {formType === "Join"
                ? "Formulaire d'Adhésion"
                : "Formulaire d'Inscription"}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 font-exo">
                  Nom Complet
                </label>
                <input
                  type="text"
                  placeholder="Entrez votre nom complet"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-white font-exo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 font-exo">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-white font-exo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 font-exo">
                  Numéro de Téléphone
                </label>
                <input
                  type="text"
                  placeholder="Entrez votre numéro de téléphone"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-white font-exo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 font-exo">
                  Programme/Domaine d'Étude
                </label>
                <input
                  type="text"
                  placeholder="Ex: Informatique"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-white font-exo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 font-exo">
                  Institution
                </label>
                <input
                  type="text"
                  placeholder="Entrez votre institution"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 text-white font-exo"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 relative overflow-hidden group font-exo"
              >
                <span className="absolute top-0 left-0 w-full h-0 bg-white bg-opacity-20 transition-all duration-300 group-hover:h-full"></span>
                <span className="relative z-10">Soumettre</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
