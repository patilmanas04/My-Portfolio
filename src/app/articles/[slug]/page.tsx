import type { Metadata } from "next";
import { notFound } from "next/navigation";
import data from "@/data/data.json";
import NeoButton from "@/components/ui/NeoButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return data.articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = data.articles.find((art) => art.slug === slug);

  return {
    title: article?.title ?? "Article",
  };
}

export default async function ArticleDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = data.articles.find((art) => art.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col pb-6 pt-4 md:pb-0">
      <div className="mb-6">
        <Link href="/articles" className="inline-flex items-center gap-2 font-black uppercase hover:underline">
          <ArrowLeft size={20} strokeWidth={3} /> Back to Articles
        </Link>
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col">
        {article.thumbnail && (
          <div className="mb-10 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.thumbnail}
              alt={article.title}
              className="h-auto w-full border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
        )}

        <h1 className="mb-8 text-3xl font-black uppercase leading-tight text-black md:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        <div className="mb-8 flex flex-wrap gap-3">
          {article.tags &&
            article.tags.map((tag: string) => (
              <span
                key={tag}
                className="border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                #{tag}
              </span>
            ))}
        </div>

        <div className="mb-10 space-y-4 text-sm font-bold leading-relaxed text-black md:text-base">
          {article.previewText ? (
            <p>{article.previewText}</p>
          ) : (
            <p>Read the full article on Dev.to to learn more!</p>
          )}
        </div>

        {article.summary && (
          <div className="relative mb-10 border-4 border-black bg-cyan-400 px-6 pb-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:px-8 md:pb-8 md:pt-10">
            <div className="absolute -top-4 left-6 border-2 border-black bg-white px-4 py-1 text-sm font-black uppercase tracking-widest text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Summary
            </div>
            <p className="font-sans text-lg font-bold leading-relaxed text-black md:text-xl">
              {article.summary}
            </p>
          </div>
        )}

        <NeoButton
          as="a"
          href={article.link}
          target="_blank"
          rel="noreferrer"
          hoverTone="accent"
          className="w-full !bg-white !py-4 !text-center !text-sm !font-black !uppercase !text-black hover:!bg-accent md:!text-lg"
        >
          READ FULL ARTICLE ON DEV.TO
        </NeoButton>
      </div>
    </div>
  );
}
