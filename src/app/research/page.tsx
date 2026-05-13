import NeoCard from "@/components/ui/NeoCard";
import data from "@/data/data.json";

export default function ResearchPage() {
  const { research } = data;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-7">
      <header className="border-b-4 border-black pb-6">
        <p className="mb-3 inline-block border-2 border-black bg-secondary px-3 py-1 text-xs font-black uppercase tracking-widest">
          Publications
        </p>
        <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
          RESEARCH // PUBLICATIONS
        </h1>
      </header>

      <section className="flex flex-col gap-6">
        {research.map((item, index) => (
          <NeoCard
            key={item.id}
            className={index % 2 === 0 ? "bg-white p-5 md:p-6" : "bg-background p-5 md:p-6"}
          >
            <h2 className="text-2xl font-black uppercase leading-tight md:text-3xl">
              {item.title}
            </h2>

            <div className="mt-4 w-fit border-4 border-black bg-accent px-3 py-2 shadow-neo-shadow">
              <p className="text-xs font-black uppercase tracking-wide md:text-sm">
                {item.conference}
              </p>
            </div>

            <p className="mt-6 border-t-4 border-black pt-4 text-sm font-bold leading-relaxed md:text-base">
              {item.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block border-2 border-black bg-secondary px-2 py-1 text-xs font-black uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </NeoCard>
        ))}
      </section>
    </div>
  );
}
