import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  const textElements = useRef([]);
  const buttonRef = useRef(null);

  // Hero animation
  useEffect(() => {
    const hero = heroRef.current;
    const texts = textElements.current.filter(Boolean);
    const heroButton = buttonRef.current;

    if (!hero || texts.length === 0 || !heroButton) return;

    const tl = gsap.timeline();
    tl.fromTo(hero, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" })
      .fromTo(texts, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.4")
      .fromTo(heroButton, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "elastic.out(1, 0.5)" }, "-=0.5");
  }, []);

  // Scroll animations
  useEffect(() => {
    const cleanUp = () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    sectionsRef.current.forEach((section) => {
      if (!section) return;

      const elements = gsap.utils.toArray(section.querySelectorAll("h2, p, .card-item, button"));
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(elements, { opacity: 0, y: 30 }, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out" 
      });
    });

    return cleanUp;
  }, []);

  // Données
 const members = [
  {
    name: "Yassine El Mansouri",
    role: "Président",
    age: 22,
    class: "TSDI 2",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500"
  },
  {
    name: "Amine Bouchra",
    role: "Vice-Président",
    age: 21,
    class: "TSDI 2",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
  },
  {
    name: "Sara El Fassi",
    role: "Secrétaire",
    age: 20,
    class: "TSDI 1",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500"
  },
  {
    name: "Oussama Belhaj",
    role: "Trésorier",
    age: 23,
    class: "TSDI 3",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
  },
  {
    name: "Nadia Bennani",
    role: "Responsable Communication",
    age: 22,
    class: "TSDI 2",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
  },
  {
    name: "Mohamed Lakhdar",
    role: "Responsable Événements",
    age: 21,
    class: "TSDI 2",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500"
  },
  {
    name: "Fatima Zahra Amrani",
    role: "Responsable Web",
    age: 20,
    class: "TSDI 1",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
  },
  {
    name: "Reda Chafiq",
    role: "Développeur Full Stack",
    age: 24,
    class: "TSDI 3",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500"
  },
  {
    name: "Kenza El Khalfi",
    role: "Designer UI/UX",
    age: 22,
    class: "TSDI 2",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
  },
  {
    name: "Hamza El Idrissi",
    role: "Responsable Réseaux",
    age: 23,
    class: "TSDI 3",
    image: "https://images.unsplash.com/photo-1522071901873-411886a10004?w=500"
  },
  {
    name: "Salma Bahmad",
    role: "Community Manager",
    age: 21,
    class: "TSDI 1",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500"
  },
  {
    name: "Rachid Benjelloun",
    role: "Mentor Technique",
    age: 25,
    class: "TSDI 3",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500"
  },
  {
    name: "Meryem El Ghaoui",
    role: "Responsable Formation",
    age: 22,
    class: "TSDI 2",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500"
  },
  {
    name: "Anas Touhami",
    role: "Développeur Frontend",
    age: 20,
    class: "TSDI 1",
    image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68f?w=500"
  },
  {
    name: "Lina Kaoutar",
    role: "Responsable Marketing",
    age: 22,
    class: "TSDI 2",
    image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?w=500"
  }
];


  const sponsors = [
  {
    name: "OFPPT",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Logo_OFPPT.png"
  },
  {
    name: "Mr. KAMAL DAOUDI",
    field: "DEVELOPPEMENT WEB",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  },
  {
    name: "Google",
    field: "Cloud & AI",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "GitHub",
    field: "Version Control",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
  },
  {
    name: "Vercel",
    field: "Web Hosting",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Vercel_logo_black.svg"
  }
];


  const announcements = [
    { date: "15 Mai 2023", title: "Hackathon Annuel" },
    { date: "22 Juin 2023", title: "Atelier Réseaux" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-black bg-opacity-80 backdrop-blur-md text-white py-4 px-6 fixed w-full z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-orbitron">CLUB IT</h1>
        <ul className="flex space-x-6">
          {['home', 'members', 'sponsors', 'announcements'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="relative px-2 py-1 overflow-hidden group">
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-500 group-hover:w-full"></span>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button onClick={() => { setShowForm(true); setFormType("Join"); }} 
                    className="relative px-2 py-1 overflow-hidden group cursor-pointer">
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-500 group-hover:w-full"></span>
              Rejoindre
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
   import { motion } from "framer-motion";

<section
  ref={heroRef}
  id="home"
  className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 pt-16 overflow-hidden"
>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center px-4 max-w-4xl mx-auto"
  >
    <motion.h1
      ref={(el) => (textElements.current[0] = el)}
      className="text-5xl md:text-7xl font-bold font-orbitron mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      BIENVENUE AU CLUB IT ISFO
    </motion.h1>

    <motion.p
      ref={(el) => (textElements.current[1] = el)}
      className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-300 font-exo"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      Accompagner les étudiants à travers la technologie, l'innovation et la
      collaboration.
    </motion.p>

    <motion.p
      ref={(el) => (textElements.current[2] = el)}
      className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-400 font-exo"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      Nous nous concentrons principalement sur le développement web et le
      développement réseau, tout en organisant des compétitions, comme des
      hackathons, ainsi que diverses activités parascolaires et formations. Notre
      mission est de créer une communauté dynamique rassemblant des passionnés de
      technologie et des futurs innovateurs, tout en accompagnant les étudiants
      rencontrant des difficultés dans ces domaines.
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      ref={buttonRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <button
        className="px-8 py-3 bg-indigo-600 text-white text-lg rounded-lg relative overflow-hidden group shadow-lg"
        onClick={() => {
          setShowForm(true);
          setFormType("Join");
        }}
      >
        <span className="absolute top-0 left-0 w-full h-0 bg-white bg-opacity-20 transition-all duration-300 group-hover:h-full"></span>
        <span className="relative z-10">Rejoindre Notre Communauté</span>
      </button>

      <button
        className="px-8 py-3 border-2 border-indigo-600 text-white text-lg rounded-lg relative overflow-hidden group shadow-lg"
        onClick={() =>
          document.getElementById("members")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="absolute top-0 left-0 w-0 h-full bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        <span className="relative z-10">Découvrir Plus</span>
      </button>
    </motion.div>
  </motion.div>
</section>


      {/* Members Section */}
      <section ref={(el) => (sectionsRef.current[0] = el)} id="members" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative pb-2">
            Nos Membres
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-600"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <div key={index} className="card-item relative h-96 rounded-xl overflow-hidden group">
                <img src={member.image} alt={member.name} 
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-indigo-400 mb-1">{member.role}</p>
                    <div className="text-sm text-gray-300">
                      <p>Âge: {member.age} ans</p>
                      <p>Classe: {member.class}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section ref={(el) => (sectionsRef.current[1] = el)} id="sponsors" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative pb-2">
            Nos Encadrants
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-indigo-600"></span>
          </h2>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="mb-20">

            {sponsors.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl h-80">
                  <div className="h-2/3 bg-gray-700 flex items-center justify-center">
                    <img src={sponsor.image} alt={sponsor.name} className="h-32 w-32 object-contain"/>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold">{sponsor.name}</h3>
                    <p className="text-gray-400">{sponsor.field}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Announcements Section */}
      <section ref={(el) => (sectionsRef.current[2] = el)} id="announcements" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative pb-2">
            Nos Annonces
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-indigo-600"></span>
          </h2>
          
          <div className="grid gap-8">
            {announcements.map((announcement, index) => (
              <div key={index} className="card-item bg-gray-900 rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{announcement.title}</h3>
                    <p className="text-gray-400">{announcement.date}</p>
                  </div>
                  <button 
                    onClick={() => { setShowForm(true); setFormType("Register"); }}
                    className="px-6 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                    S'inscrire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800 text-center">
  <p className="font-extrabold text-gray-400 text-lg px-4">
    © {new Date().getFullYear()} CLUB IT ISFO. Tous droits réservés.
  </p>
  <p className="font-bold text-gray-500 text-lg px-4 mt-2">
    Toute reproduction, distribution ou utilisation non autorisée du  
    contenu est strictement interdite.
  </p>
</footer>


      {/* Formulaire */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full relative">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              {formType === "Join" ? "Rejoindre le Club" : "S'inscrire"}
            </h2>
            <form className="space-y-4">
              <input type="text" placeholder="Nom complet" className="w-full p-3 bg-gray-800 rounded-lg"/>
              <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 rounded-lg"/>
              <button type="submit" className="w-full py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}