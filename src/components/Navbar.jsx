export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-black
        border-b border-white/10
        shadow-lg
        shadow-[0_8px_30px_rgba(0,0,0,0.8)]
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* LOGO + BRAND */}
        <div
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Shoukeen Logo"
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
          <h1 className="text-2xl font-extrabold tracking-wide gold-gradient-text">
            Shoukeen
          </h1>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li onClick={() => scrollTo("home")} className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li onClick={() => scrollTo("about")} className="hover:text-yellow-400 cursor-pointer">About</li>
          <li onClick={() => scrollTo("contact")} className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        <a
  href="https://docs.google.com/forms/d/e/1FAIpQLScFbiUzJ_5GZmAMJ5-nFPgdF57GviZm8uBupRW9-GKaqJVOwQ/viewform?usp=dialog"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
>
  FEEDBACK
</a>


      </div>
    </nav>
  );
}
