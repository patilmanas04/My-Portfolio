import { FileDown } from "lucide-react";
import type { SVGProps } from "react";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import data from "@/data/data.json";

type BrandIconProps = SVGProps<SVGSVGElement> & {
  strokeWidth?: number;
};

function GithubMark({ ...props }: BrandIconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
      />
    </svg>
  );
}

function LinkedinMark({ ...props }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
      />
    </svg>
  );
}

function InstagramMark({ ...props }: BrandIconProps) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" {...props}>
      <path
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141Zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7Zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8Zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8ZM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1Z"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const socialLinks = [
  { label: "Github", key: "github", icon: GithubMark },
  { label: "LinkedIn", key: "linkedin", icon: LinkedinMark },
  { label: "Instagram", key: "instagram", icon: InstagramMark },
  { label: "Dev.to", key: "devto", icon: null },
  { label: "Resume", key: "resume", icon: FileDown },
] as const;

export default function Home() {
  const { profile, experience, articles, links } = data;
  const featuredExperience = experience.slice(0, 2);
  const featuredArticles = articles.slice(0, 2);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-7">
      <NeoCard className="bg-secondary p-5 md:p-6">
        <p className="mb-3 inline-block border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-widest">
          AI Engineer + Full-Stack Developer
        </p>
        <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-base font-extrabold md:text-xl">{profile.tagline}</p>
        <p className="mt-5 max-w-4xl border-2 border-black bg-background px-4 py-3 text-sm font-bold leading-relaxed md:text-base">
          {profile.about}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <NeoButton hoverTone="accent">View Work</NeoButton>
          <NeoButton hoverTone="primary">Read Articles</NeoButton>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 border-t-4 border-black pt-5">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            const href = links[item.key];

            return (
              <a
                key={item.key}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                title={item.label}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border-4 border-black bg-white text-black shadow-neo-shadow transition-all duration-150 ease-in-out hover:bg-secondary active:translate-y-1 active:shadow-none"
              >
                {Icon ? (
                  <Icon
                    className={item.key === "github" || item.key === "instagram" ? "h-6 w-6" : "h-5 w-5"}
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                ) : (
                  <span className="text-sm font-black leading-none tracking-tighter">DEV</span>
                )}
              </a>
            );
          })}
        </div>
      </NeoCard>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="inline-block border-2 border-black bg-white px-3 py-1 text-lg font-black uppercase">
            Experience
          </h2>
          {featuredExperience.map((item, index) => (
            <NeoCard
              key={item.id}
              className={index % 2 === 0 ? "bg-white" : "bg-background"}
            >
              <p className="text-xs font-black uppercase tracking-widest">{item.timeline}</p>
              <h3 className="mt-2 text-xl font-black uppercase">{item.role}</h3>
              <p className="mt-1 text-sm font-extrabold">{item.company}</p>
              <ul className="mt-4 space-y-2">
                {item.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight} className="text-sm font-bold leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </NeoCard>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="inline-block border-2 border-black bg-white px-3 py-1 text-lg font-black uppercase">
            Articles
          </h2>
          {featuredArticles.map((article, index) => (
            <NeoCard
              key={article.id}
              className={index % 2 === 0 ? "bg-primary" : "bg-secondary"}
            >
              <p className="text-xs font-black uppercase tracking-widest">{article.date}</p>
              <h3 className="mt-2 text-xl font-black leading-tight">{article.title}</h3>
              <p className="mt-2 text-sm font-extrabold uppercase">{article.platform}</p>
            </NeoCard>
          ))}
          {featuredArticles.length === 0 && (
            <NeoCard className="bg-primary">
              <p className="text-sm font-black uppercase">
                Articles coming soon.
              </p>
            </NeoCard>
          )}
        </div>
      </section>
    </div>
  );
}
