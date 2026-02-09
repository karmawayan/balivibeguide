export default function Hero() {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <img
        src="/bali-hero.jpg"
        alt="Bali Travel Guide"
        className="w-full h-[380px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-end p-6">
        <div className="text-white">
          <h1 className="text-3xl font-bold mb-2">
            Ultimate Bali Travel Guide for Global Travelers
          </h1>
          <p className="max-w-xl">
            Everything you need to know before visiting Bali — culture, destinations, and travel tips.
          </p>
        </div>
      </div>
    </div>
  );
}

