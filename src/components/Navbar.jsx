export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-orange-600 text-white">
      <h1 className="text-2xl font-bold">Argaam</h1>
      <div className="flex gap-6 text-sm font-medium">
        <a href="#">News</a>
        <a href="#">Sectors</a>
        <a href="#">Companies</a>
        <a href="#">Markets</a>
      </div>
    </div>
  );
}
