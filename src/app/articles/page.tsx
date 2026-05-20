/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import NeoButton from "@/components/ui/NeoButton";
import Link from "next/link";
import NeoCard from "@/components/ui/NeoCard";
import data from "@/data/data.json";

export const metadata: Metadata = {
  title: "Articles",
};

export default function ArticlesPage() {
  const { articles } = data;

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-7">
      <header className="border-b-4 border-black pb-6">
        <p className="mb-3 inline-block border-2 border-black bg-secondary px-3 py-1 text-xs font-black uppercase tracking-widest">
          Dev.to feed
        </p>
        <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
          ARTICLES
        </h1>
      </header>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {articles.map((article, index) => {
          const isEvenCard = index % 2 === 0;
          const cardTone = isEvenCard ? "bg-white" : "bg-teal-50";
          const tagTone = isEvenCard ? "bg-teal-50" : "bg-white";

          return (
            <NeoCard
              key={article.id}
              className={`${cardTone} flex min-h-full flex-col overflow-hidden p-0 text-black`}
            >
              {article.thumbnail ? (
                <img
                  src={article.thumbnail}
                  alt=""
                  className="w-full aspect-[1000/420] border-b-4 border-black object-cover"
                />
              ) : (
                <div className={`${cardTone} flex h-52 w-full items-center justify-center border-b-4 border-black`}>
                  <span
                    className={`${tagTone} border-2 border-black px-3 py-2 text-xs font-black uppercase tracking-widest text-black`}
                  >
                    No thumbnail
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col gap-4 p-4">
                <div>
                  <p
                    className={`${tagTone} inline-block border-2 border-black px-2 py-1 font-mono text-xs font-black uppercase tracking-widest text-black`}
                  >
                    {article.date}
                  </p>
                  <h2 className="mt-3 text-xl font-black uppercase leading-tight text-black">
                    {article.title}
                  </h2>
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className={`${tagTone} border-2 border-black px-2 py-1 text-xs font-black uppercase tracking-wider text-black`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-auto w-fit"
                >
                  <NeoButton hoverTone="secondary">Read Article</NeoButton>
                </Link>
              </div>
            </NeoCard>
          );
        })}
      </section>
    </div>
  );
}
