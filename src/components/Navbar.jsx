import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id) => {
    // If already on home page, scroll
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on menu pages, go to home with hash
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* BRAND */}
        <div
          onClick={() => handleNav("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <h1 className="text-2xl font-extrabold gold-gradient-text">
            Shoukeen Menu
          </h1>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li
            onClick={() => handleNav("home")}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleNav("about")}
            className="hover:text-yellow-400 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => handleNav("contact")}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
