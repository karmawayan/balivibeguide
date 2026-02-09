export default function Sidebar() {
  return (
    <>
      <div className="border rounded-xl p-4">
        <h3 className="font-bold mb-3">🔥 Trending</h3>
        <ul className="space-y-2 text-sm">
          <li>Best Time to Visit Bali</li>
          <li>Bali Visa Rules Update</li>
          <li>Top Beaches in Uluwatu</li>
        </ul>
      </div>

      <div className="border rounded-xl p-4 text-center">
        <p className="text-xs text-gray-500 mb-2">Advertisement</p>
        {/* ADSTERRA SCRIPT NANTI DI SINI */}
        <div className="h-[250px] bg-gray-100 flex items-center justify-center">
          Adsterra Banner
        </div>
      </div>
    </>
  );
}
