import Hero from "./components/Hero";
import ArticleCard from "./components/ArticleCard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      
      {/* MAIN CONTENT */}
      <section className="lg:col-span-3 space-y-6">
        <Hero />

        <h2 className="text-2xl font-bold">Latest Bali News</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ArticleCard
            title="Top 10 Things To Do in Bali for First-Time Visitors"
            excerpt="Discover must-see destinations, hidden gems, and local tips for your Bali adventure."
            slug="/blog/top-10-things-to-do-in-bali"
          />
          <ArticleCard
            title="Bali Travel Tips: How to Save Money in 2026"
            excerpt="Smart budgeting tips to enjoy Bali without overspending."
            slug="/blog/bali-travel-tips-save-money"
          />
        </div>
      </section>

      {/* SIDEBAR */}
      <aside className="space-y-6">
        <Sidebar />
      </aside>
    </main>
  );
}
