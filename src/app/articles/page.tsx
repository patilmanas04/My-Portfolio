/* eslint-disable @next/next/no-img-element */
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import data from "@/data/data.json";

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
          const cardTone =
            index % 3 === 0 ? "bg-white" : index % 3 === 1 ? "bg-accent" : "bg-primary";

          return (
            <NeoCard
              key={article.id}
              className={`${cardTone} flex min-h-full flex-col overflow-hidden p-0`}
            >
              {article.thumbnail ? (
                <img
                  src={article.thumbnail}
                  alt=""
                  className="h-52 w-full border-b-4 border-black object-cover"
                />
              ) : (
                <div className="flex h-52 w-full items-center justify-center border-b-4 border-black bg-secondary">
                  <span className="border-2 border-black bg-background px-3 py-2 text-xs font-black uppercase tracking-widest">
                    No thumbnail
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col gap-4 p-4">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-widest">
                    {article.date}
                  </p>
                  <h2 className="mt-3 text-xl font-black uppercase leading-tight">
                    {article.title}
                  </h2>
                </div>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto w-fit"
                >
                  <NeoButton hoverTone="secondary">Read on Dev.to</NeoButton>
                </a>
              </div>
            </NeoCard>
          );
        })}
      </section>
    </div>
  );
}
