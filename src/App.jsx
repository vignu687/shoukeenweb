import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";

import FoodMenu from "./pages/FoodMenu";
import LiquorMenu from "./pages/LiquorMenu";
import SheeshaMenu from "./pages/SheeshaMenu";

function Home() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const [activePartner, setActivePartner] = useState(null);
  const [activeBio, setActiveBio] = useState(null);

  /* ---------------- MENU DATA ---------------- */
  const menus = [
    { title: "FOOD MENU", path: "/food", img: "/menu/food.jpg" },
    { title: "LIQUOR MENU", path: "/liquor", img: "/menu/liquor.jpg" },
    { title: "SHEESHA MENU", path: "/sheesha", img: "/menu/sheesha.jpg" },
  ];

  /* ---------------- PARTNERS DATA ---------------- */
  const partners = [
    {
      name: "Brand A",
      img: "/partners/partner1.jpg",
      desc: "Premium spirits and lounge collaboration partner.",
    },
    {
      name: "Brand B",
      img: "/partners/partner2.jpg",
      desc: "Luxury hospitality and curated events partner.",
    },
    {
      name: "Brand C",
      img: "/partners/partner3.jpg",
      desc: "Exclusive food & beverage sourcing partner.",
    },
    {
      name: "Brand D",
      img: "/partners/partner4.jpg",
      desc: "Lifestyle and ambience experience partner.",
    },
  ];

  /* ---------------- DEVCOPS DATA ---------------- */
 const devcops = [
  {
    name: "Vignesh Bhat",
    role: "Frontend and App Developer / Freelancer",
    img: "/devcops/dev1.jpeg",
   bio: "A frontend and app developer focused on crafting premium, high-performance digital experiences. Specializes in modern React architectures, smooth UI animations, and user-centric design systems. Passionate about transforming ideas into scalable, elegant products with strong attention to detail and usability.",
    socials: {
      linkedin: "https://www.linkedin.com/in/vignesh-bhat-209808218",
      github: "https://github.com/vignu687",
    },
  },
  {
    name: "Karthik Vignesh",
    role: "Software Engineer @LG Soft India",
    img: "/devcops/dev2.jpeg",
   bio: "A backend-focused software engineer experienced in building secure, scalable, and high-performance systems. Strong in system architecture, APIs, and database design, with a focus on reliability and maintainability. Enjoys solving complex engineering problems and designing backend solutions that scale seamlessly.",
    socials: {
      linkedin: "https://www.linkedin.com/in/karthik-link",
      github: "https://github.com/kv13b",
    },
  },
];


  /* ---------------- ABOUT AUTO SCROLL ---------------- */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % 3;
      sliderRef.current?.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">

      {/* ================= HOME ================= */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-40 px-6 text-center"
        >
          <h1 className="text-6xl font-extrabold gold-gradient-text">

            SHOUKEEN{" "}
            <span className="gold-gradient-text">PREMIUM INDIAN LOUNGE</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mb-20">
            Premium dining, crafted drinks, and elevated ambience.
          </p>
        </motion.div>

        {/* MENU CARDS */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-28">
          {menus.map((item, i) => (
            <motion.div
              key={item.title}
              onClick={() => navigate(item.path)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition-all"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">
                  Click to view full menu
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     {/* ================= ABOUT ================= */}
<section id="about" className="py-36 bg-black">
  <h2 className="text-5xl font-extrabold text-center mb-12 gold-gradient-text">
    About Shoukeen
  </h2>
  <p className="text-gray-400 max-w-2xl mx-auto mb-20">
           Shoukeen Indian Lounge blends tradition, taste, and atmosphere into one seamless experience.
Crafted for those who appreciate flavour, ambience, and refined evenings.
  </p>

  <div
    ref={sliderRef}
    className="
      flex gap-4 overflow-x-auto no-scrollbar
      scroll-smooth snap-x snap-mandatory
      px-6
    "
  >
    {[
      "/about1.jpeg",
      "/about2.jpeg",
      "/about3.jpeg",
      "/about4.jpeg",
      "/about5.jpeg",
      
    ].map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`About ${i + 1}`}
        className="
          snap-center
          w-[85vw] md:w-[70vw] lg:w-[60vw]
          max-w-[900px]
          h-[320px] md:h-[380px]
          object-cover
          rounded-3xl
          flex-shrink-0
        "
        loading="lazy"
      />
    ))}
  </div>
</section>

     
    
{/* ================= DEVCOPS ================= */}
<section
  id="devcops"
  className="py-36 bg-gradient-to-br from-gray-950 via-black to-gray-800"
>
  {/* SECTION HEADING */}
  <div className="text-center mb-16 px-6">
    <h2 className="text-5xl font-extrabold mb-4">
      Devcops <span className="gold-gradient-text">Team</span>
    </h2>
    <p className="text-gray-400 max-w-xl mx-auto">
      The minds behind the experience — building scalable, reliable, and
      premium digital solutions.
    </p>
  </div>

  {/* TEAM CARDS */}
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 px-6">
    {devcops.map((m) => (
      <div
        key={m.name}
        className="
          group
          bg-white/5 border border-white/10
          rounded-2xl p-8 text-center
          transition-all duration-300
          hover:-translate-y-2 hover:border-yellow-400/30
        "
      >
        {/* IMAGE */}
        <img
          src={m.img}
          alt={m.name}
          className="h-40 w-40 object-cover rounded-full mx-auto mb-6"
        />

        {/* NAME */}
        <h3 className="text-xl font-semibold gold-gradient-text">
          {m.name}
        </h3>

        {/* ROLE */}
        <p className="text-gray-400 text-sm mt-1">
          {m.role}
        </p>

        {/* SOCIAL LINKS (SHOW ON HOVER) */}
        <div className="flex justify-center gap-5 mt-4 opacity-0 group-hover:opacity-100 transition">
          {m.socials?.linkedin && (
            <a
              href={m.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-yellow-400 transition"
            >
              LinkedIn
            </a>
          )}

          {m.socials?.github && (
            <a
              href={m.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-yellow-400 transition"
            >
              GitHub
            </a>
          )}
        </div>

        {/* VIEW BIO */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={() => setActiveBio(m)}
            className="text-sm text-yellow-400 underline hover:text-yellow-300 transition"
          >
            View Bio
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-40 bg-gradient-to-br from-purple-900 via-black to-indigo-900"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/contact.jpeg"
            className="h-[380px] w-full object-cover rounded-3xl"
          />
          <div>
            <h2 className="text-5xl font-extrabold mb-6">
              Contact <span className="text-yellow-400">Us</span>
            </h2>
             <p> ALOFT HOTELS  </p>
            <p>📍 AL MINA BUR DUBAI </p>
            <p>📞 +971 501104966</p>
            <p>📧 shoukeenlounge@gmail.com</p>
          </div>
        </div>
      </section>

      {/* ================= MODALS ================= */}
      {activePartner && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl max-w-md text-center">
            <img src={activePartner.img} className="h-48 w-full object-cover rounded-xl mb-4" />
            <h3 className="text-yellow-400 text-2xl mb-2">{activePartner.name}</h3>
            <p className="text-gray-300 mb-6">{activePartner.desc}</p>
            <button onClick={() => setActivePartner(null)} className="bg-yellow-400 text-black px-6 py-2 rounded-full">
              Close
            </button>
          </div>
        </div>
      )}

      {activeBio && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl max-w-md text-center">
            <h3 className="text-yellow-400 text-2xl mb-2">{activeBio.name}</h3>
            <p className="text-gray-300 mb-6">{activeBio.bio}</p>
            <button onClick={() => setActiveBio(null)} className="bg-yellow-400 text-black px-6 py-2 rounded-full">
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<FoodMenu />} />
      <Route path="/liquor" element={<LiquorMenu />} />
      <Route path="/sheesha" element={<SheeshaMenu />} />
    </Routes>
  );
}
