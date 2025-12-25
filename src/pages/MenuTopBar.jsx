import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuTopBar({ title, sections }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      for (let sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <div className="sticky top-20 z-40 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-4 overflow-x-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-sm px-3 py-1 rounded-full border border-white/20 hover:bg-white/10"
        >
          ← Back
        </button>

        <span className="text-yellow-400 font-semibold">{title}</span>

        <div className="flex gap-4 ml-auto">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-sm whitespace-nowrap ${
                active === s.id
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
