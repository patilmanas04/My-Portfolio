"use client";

import { FileDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { SVGProps } from "react";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import data from "@/data/data.json";

import SocialLinks from "@/components/ui/SocialLinks";

export default function Home() {
  const { profile, experience, articles, links, work, research, community } = data;
  const featuredExperience = experience.slice(0, 2);
  const featuredArticles = articles.slice(0, 2);

  const featuredWork = work.filter(
    (item) =>
      item.title === "Sub-Millisecond Voice Activity Detection (VAD) with Custom Wakeword" ||
      item.title === "Full-Stack RAG Chatbot Engine"
  );

  const researchSpotlight = research.find(
    (item) => item.title === "Data-Driven Rockfall Assessment using Synthetic Training and CNN–XGBoost Integration"
  );

  const featuredCommunity = community.slice(0, 2);

  const lines = [
    "> Transitioning into Digital professional role at TCS...",
    "> Pinging from base: Bardoli, Gujarat",
    "> Probably smashing shuttles on the badminton court.",
  ];

  const [typedLines, setTypedLines] = useState<string[]>([""]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setTypedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = currentLine.substring(0, charIndex + 1);
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else if (currentLineIndex < lines.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCharIndex(0);
        setTypedLines((prev) => [...prev, ""]);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLineIndex, lines]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-7">
      <NeoCard className="bg-secondary p-5 md:p-6">
        <p className="mb-3 inline-block border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-widest">
          AI Engineer & Full-Stack Developer
        </p>
        <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-base font-extrabold md:text-xl">{profile.tagline}</p>
        <p className="mt-5 max-w-4xl border-2 border-black bg-background px-4 py-3 text-sm font-bold leading-relaxed md:text-base">
          {profile.about}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/work"><NeoButton hoverTone="accent">View Work</NeoButton></Link>
          <Link href="/articles"><NeoButton hoverTone="primary">Read Articles</NeoButton></Link>
        </div>

        <div className="mt-6 border-t-4 border-black pt-5">
          <SocialLinks />
        </div>
      </NeoCard>

      <section className="gap-8">
        <h2 className="mb-4 text-2xl font-black uppercase tracking-tight">Featured Work</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredWork.map((item) => (
            <NeoCard
              key={item.id}
              className={
                item.title === "Sub-Millisecond Voice Activity Detection (VAD) with Custom Wakeword"
                  ? "bg-orange-400"
                  : "bg-cyan-400"
              }
            >
              <span className="inline-block border-2 border-black bg-white px-2 py-1 text-xs font-black uppercase tracking-wider mb-3">{item.type}</span>
              <h3 className="mt-2 text-xl font-black uppercase leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm font-bold leading-relaxed">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border-2 border-black bg-white px-2 py-1 text-xs font-black uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {researchSpotlight && (
        <section className="gap-8">
          <h2 className="mb-4 text-2xl font-black uppercase tracking-tight">Research Spotlight</h2>
          <NeoCard className="bg-purple-300">
            <span className="inline-block border-2 border-black bg-white px-2 py-1 text-xs font-black uppercase tracking-wider mb-3">Research Paper</span>
            <h3 className="mt-2 text-xl font-black uppercase leading-tight">{researchSpotlight.title}</h3>
            <p className="mt-3 text-sm font-bold leading-relaxed">{researchSpotlight.description}</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="border-2 border-black bg-white px-2 py-1 text-xs font-black uppercase">
                {researchSpotlight.conference}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {researchSpotlight.techStack.map((tech) => (
                <span
                  key={tech}
                  className="border-2 border-black bg-white px-2 py-1 text-xs font-black uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </NeoCard>
        </section>
      )}

      <section className="gap-8">
        <h2 className="mb-4 text-2xl font-black uppercase tracking-tight">Community & Impact</h2>
        <div className="space-y-6">
          {featuredCommunity.map((item, index) => (
            <NeoCard
              key={item.id}
              className={index === 0 ? "bg-teal-50 text-black" : "bg-white text-black"}
            >
              <span className="inline-block border-2 border-black bg-background px-2 py-1 text-xs font-black uppercase tracking-wider mb-3">{item.timeline}</span>
              <h3 className="mt-2 text-xl font-black uppercase text-black">{item.role}</h3>
              <p className="mt-1 text-sm font-extrabold text-black">{item.organization}</p>
              <p className="mt-3 text-base font-medium text-black">{item.description}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      <section className="gap-8">
        <div className="border-4 border-black bg-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
          <div className="flex items-center gap-2 border-b-4 border-white bg-gray-800 px-3 py-2">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <span className="flex-1 text-center font-mono text-xs text-gray-400">user@macbook:~ - current_status.sh</span>
          </div>
          <div className="p-4 font-mono text-sm min-h-[120px]">
            {typedLines.map((line, index) => {
              const isTyping = index === currentLineIndex && charIndex < lines[index].length;
              const isDone = index === lines.length - 1 && currentLineIndex >= lines.length - 1 && charIndex >= lines[index].length;
              return (
                <div key={index} className="text-green-400">
                  {line}
                  {(isTyping || isDone) && <span className="animate-pulse">_</span>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
              <span className="inline-block border-2 border-black bg-white px-2 py-1 text-xs font-black uppercase tracking-wider mb-3">{item.timeline}</span>
              <h3 className="mt-2 text-xl font-black uppercase">{item.role}</h3>
              <p className="mt-1 text-sm font-extrabold">{item.company}</p>
              <div className="mt-4">
                {item.highlights.slice(0, 2).map((highlight) => (
                  <p key={highlight} className="mb-3 text-base font-medium">{highlight}</p>
                ))}
              </div>
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
              <div className="flex gap-2">
                <span className="inline-block border-2 border-black bg-white px-2 py-1 text-xs font-black uppercase tracking-wider mb-3">{article.date}</span>
                <span className="inline-block border-2 border-black bg-white px-2 py-1 text-xs font-black uppercase tracking-wider mb-3">{article.platform}</span>
              </div>
              <h3 className="mt-2 text-xl font-black leading-tight">{article.title}</h3>
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
