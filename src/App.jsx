import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";

import FoodMenu from "./pages/FoodMenu";
import LiquorMenu from "./pages/LiquorMenu";
import SheeshaMenu from "./pages/SheeshaMenu";

function Home() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  /* ---------------- MENU DATA ---------------- */
  const menus = [
    { title: "FOOD MENU", path: "/food", img: "/menu/food.jpg" },
    { title: "LIQUOR MENU", path: "/liquor", img: "/menu/liquor.jpg" },
    { title: "SHEESHA MENU", path: "/sheesha", img: "/menu/sheesha.jpg" },
  ];

  /* ---------------- ABOUT AUTO SCROLL ---------------- */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % 5;
      sliderRef.current?.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
      {/* ================= HOME ================= */}
      <section
        id="home"
        className="min-h-screen animated-gradient bg-gradient-to-br from-purple-900 via-black to-indigo-900"
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
              <img src={item.img} className="h-48 w-full object-cover" />
              <div className="p-8">
                <h3 className="text-xl font-semibold gold-gradient-text">
                  {item.title}
                </h3>
                <p className="text-gray-500">Click to view full menu</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="py-24 animated-gradient bg-gradient-to-br from-black via-gray-950 to-black"
      >
        <div className="text-center px-6">
          <h2 className="text-5xl font-extrabold gold-gradient-text mb-6">
            About Shoukeen
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed">
            Shoukeen Indian Lounge blends tradition, taste, and atmosphere into
            one seamless experience. Crafted for those who appreciate flavour,
            ambience, and refined evenings.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-6"
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
              className="snap-center w-[85vw] md:w-[70vw] lg:w-[60vw] max-w-[900px]
                         h-[320px] md:h-[380px] object-cover rounded-3xl flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-32 animated-gradient bg-gradient-to-br from-black via-[#0b1a2a] to-[#050b14]"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/contact.jpeg"
            className="h-[380px] w-full object-cover rounded-3xl"
          />

          <div>
            <h2 className="text-5xl font-extrabold mb-6">
              Contact <span className="gold-gradient-text">Us</span>
            </h2>

            <p>ALOFT HOTELS</p>
            <p>📍 AL MINA BUR DUBAI</p>
            <p>📞 +971 501104966</p>
            <p>📧 shoukeenlounge@gmail.com</p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScFbiUzJ_5GZmAMJ5-nFPgdF57GviZm8uBupRW9-GKaqJVOwQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Give Feedback
            </a>
          </div>
        </div>
      </section>
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
