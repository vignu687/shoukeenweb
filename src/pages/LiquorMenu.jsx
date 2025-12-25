import Navbar from "../components/Navbar";
import MenuTopBar from "./MenuTopBar";
import ScrollProgress from "../components/ScrollProgress";

export default function LiquorMenu() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollProgress />

      <div className="pt-28">
        <MenuTopBar
          title="Liquor Menu"
          sections={[{ id: "liquor", label: "All" }]}
        />

        <div className="max-w-4xl mx-auto px-6 pb-24">
         <img src="/menu/liquormenu/liquormenu1.png" className="rounded-2xl mb-10 w-full" />
<img src="/menu/liquormenu/liquormenu2.png" className="rounded-2xl w-full" />
<img src="/menu/liquormenu/liquormenu3.png" className="rounded-2xl mb-10 w-full" />
<img src="/menu/liquormenu/liquormenu4.png" className="rounded-2xl w-full" />
<img src="/menu/liquormenu/liquormenu5.png" className="rounded-2xl mb-10 w-full" />
<img src="/menu/liquormenu/liquormenu6.png" className="rounded-2xl w-full" />
<img src="/menu/liquormenu/liquormenu7.png" className="rounded-2xl w-full" />
        </div>
      </div>
    </div>
  );
}
