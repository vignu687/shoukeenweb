import { useNavigate } from "react-router-dom";

export default function MenuTopBar({ title, sections }) {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        sticky top-[88px] z-40
        backdrop-blur-lg
        bg-gradient-to-r
        from-black/70
        via-[#2a0f1f]/70
        to-black/70
        border-y border-white/10
      "
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: BACK + TITLE */}
        <div className="flex items-center gap-4">
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="text-gray-300 hover:text-yellow-400 transition text-sm"
          >
            ← Back
          </button>

          {/* TITLE */}
          <h1 className="text-xl font-bold gold-gradient-text">
            {title}
          </h1>
        </div>

        {/* RIGHT: SECTIONS */}
        <div className="flex gap-6 text-sm font-medium">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              {s.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
