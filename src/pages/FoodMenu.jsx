import Navbar from "../components/Navbar";
import MenuTopBar from "./MenuTopBar";
import ScrollProgress from "../components/ScrollProgress";

function MenuImage({ src }) {
  return (
    <img
      src={src}
      loading="lazy"
      className="w-full rounded-2xl shadow-lg mb-10"
    />
  );
}

export default function FoodMenu() {
  const sections = [
    { id: "starters", label: "Starters" },
    { id: "mains", label: "Mains" },
    { id: "desserts", label: "Desserts" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollProgress />

      <div className="pt-28">
        <MenuTopBar title="Food Menu" sections={sections} />

        <div className="max-w-4xl mx-auto px-6 space-y-16 pb-24">
          <section id="starters">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Starters</h2>
           <MenuImage src="/menu/foodmenu/foodmenu1.png" />



          </section>

          <section id="mains">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Mains</h2>
           <MenuImage src="/menu/foodmenu/foodmenu2.png" />
          </section>

          <section id="desserts">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Desserts</h2>
             <MenuImage src="/menu/foodmenu/foodmenu3.png" />
          </section>
        </div>
      </div>
    </div>
  );
}
