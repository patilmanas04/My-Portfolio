import data from "@/data/data.json";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";

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
          const cardTone =
            index % 3 === 0 ? "bg-white" : index % 3 === 1 ? "bg-accent" : "bg-secondary";

          return (
            <NeoCard key={project.id} className={`${cardTone} flex min-h-full flex-col gap-4`}>
              <div>
                <span className="inline-block border-2 border-black bg-primary px-2 py-1 text-xs font-black uppercase tracking-wide">
                  {project.type}
                </span>
                <h2 className="mt-3 text-xl font-black uppercase leading-tight">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm font-bold leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block border-2 border-black bg-background px-2 py-1 text-xs font-black uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {githubLink ? (
                    <a href={githubLink} target="_blank" rel="noreferrer">
                      <NeoButton hoverTone="primary">Github</NeoButton>
                    </a>
                  ) : (
                    <NeoButton disabled hoverTone="primary">
                      Github
                    </NeoButton>
                  )}

                  {liveLink ? (
                    <a href={liveLink} target="_blank" rel="noreferrer">
                      <NeoButton hoverTone="accent">Live</NeoButton>
                    </a>
                  ) : (
                    <NeoButton disabled hoverTone="accent">
                      Live
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
