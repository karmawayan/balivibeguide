import Link from "next/link";

export default function ArticleCard({ title, excerpt, slug }: any) {
  return (
    <Link href={slug} className="block border rounded-xl p-4 hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{excerpt}</p>
    </Link>
  );
}
