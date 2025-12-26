import Navbar from "../components/Navbar";
import MenuTopBar from "./MenuTopBar";
import ScrollProgress from "../components/ScrollProgress";

export default function SheeshaMenu() {
  return (
    <div
      className="
        min-h-screen
        text-white
        animated-gradient
        bg-gradient-to-br
        from-black
        via-[#0f2a1a]
        to-black
      "
    >
      <Navbar />
      <ScrollProgress />

      <div className="pt-28">
        <MenuTopBar
          title="Sheesha Menu"
          sections={[{ id: "sheesha", label: "Flavours" }]}
        />

        <div className="max-w-4xl mx-auto px-6 pb-24">
          <img
            src="/menu/sheeshamenu/sheeshamenu1.png"
            className="rounded-2xl mb-10 w-full"
          />
          <img
            src="/menu/sheeshamenu/sheeshamenu2.png"
            className="rounded-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
}
