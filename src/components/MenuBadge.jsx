export default function MenuBadge({ label }) {
  const styles = {
    "Best Seller": "bg-yellow-400 text-black",
    "Spicy": "bg-red-500 text-white",
    "New": "bg-green-500 text-white",
  };

  return (
    <span className={`absolute top-4 left-4 px-3 py-1 text-xs rounded-full font-semibold ${styles[label]}`}>
      {label}
    </span>
  );
}
