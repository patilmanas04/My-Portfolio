import data from "@/data/data.json";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import { GithubMark } from "@/components/ui/SocialLinks";
import { Globe } from "lucide-react";

export default function WorkPage() {
  const { work } = data;

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-7">
      <header className="border-b-4 border-black pb-6">
        <p className="mb-3 inline-block border-2 border-black bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest">
          Selected builds
        </p>
        <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
          WORK // PROJECTS
        </h1>
      </header>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2 2xl:grid-cols-3">
        {work.map((project, index) => {
          const githubLink = project.links.github;
          const liveLink = project.links.live;
          const isEvenCard = index % 2 === 0;
          const cardTone = isEvenCard ? "bg-white" : "bg-teal-50";
          const tagTone = isEvenCard ? "bg-teal-50" : "bg-white";

          return (
            <NeoCard
              key={project.id}
              className={`${cardTone} flex min-h-full flex-col gap-4 text-black`}
            >
              <div>
                <span
                  className={`${tagTone} inline-block border-2 border-black px-2 py-1 text-xs font-black uppercase tracking-wide text-black`}
                >
                  {project.type}
                </span>
                <h2 className="mt-3 text-xl font-black uppercase leading-tight text-black">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm font-bold leading-relaxed text-black">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`${tagTone} inline-block border-2 border-black px-2 py-1 text-xs font-black uppercase text-black`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {githubLink && githubLink.length > 0 && (
                    <NeoButton
                      as="a"
                      href={githubLink}
                      target="_blank"
                      rel="noreferrer"
                      hoverTone="primary"
                      aria-label={`${project.title} GitHub repository`}
                      title={`${project.title} GitHub repository`}
                      className="h-11 w-11 px-0 py-0"
                    >
                      <GithubMark
                        className="block h-7 w-7 shrink-0"
                        width={28}
                        height={28}
                        aria-hidden="true"
                      />
                    </NeoButton>
                  )}

                  {liveLink && liveLink.length > 0 && (
                    <NeoButton
                      as="a"
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                      hoverTone="accent"
                      aria-label={`${project.title} live site`}
                      title={`${project.title} live site`}
                      className="h-11 w-11 px-0 py-0"
                    >
                      <Globe
                        className="block h-7 w-7 shrink-0"
                        size={28}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </NeoButton>
                  )}
                </div>
              </div>
            </NeoCard>
          );
        })}
      </section>
    </div>
  );
}
