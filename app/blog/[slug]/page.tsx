import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* =====================
   ARTICLE DATA (DUMMY)
===================== */
const articles = [
  {
    slug: "bali-travel-tips",
    title: "Bali Travel Tips for First-Time Visitors",
    description:
      "Essential Bali travel tips covering culture, transport, money, and local etiquette for first-time visitors.",
    content: `
Bali is one of the most popular travel destinations in the world. 
If this is your first time visiting Bali, understanding local culture, transport, and daily life will help you enjoy the island more.

## Respect Local Culture
Balinese people are deeply spiritual. Always dress modestly when visiting temples and respect local ceremonies.

## Transportation in Bali
Renting a scooter is popular, but hiring a car with a driver is safer and more comfortable for long distances.

## Money & Payments
Cash is still widely used, especially in local markets. Always carry small denominations.

## Best Time to Visit
The dry season from April to October is ideal for outdoor activities.
    `,
    date: "2026-01-10",
    category: "Travel Tips",
  },
];

/* =====================
   SEO META
===================== */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) return {};

  return {
    title: `${article.title} | BaliVibeGuide`,
    description: article.description,
  };
}

/* =====================
   PAGE
===================== */
export default function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <header className="mb-6">
        <p className="text-sm text-gray-500">{article.category}</p>
        <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
        <p className="text-gray-500 text-sm">
          Published on {article.date}
        </p>
      </header>

      <div className="prose prose-lg">
        {article.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </article>
  );
}
