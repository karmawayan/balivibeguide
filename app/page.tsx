import Link from "next/link";

const articles = [
  {
    slug: "bali-travel-tips",
    title: "Bali Travel Tips for First-Time Visitors",
    excerpt:
      "Essential Bali travel tips covering culture, transport, money, and etiquette.",
    date: "Jan 10, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Bali Travel News</h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{article.excerpt}</p>
            <p className="text-sm text-gray-400">{article.date}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
