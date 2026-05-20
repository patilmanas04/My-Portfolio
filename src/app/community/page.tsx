import NeoCard from "@/components/ui/NeoCard";
import data from "@/data/data.json";

export default function CommunityPage() {
  const { community } = data;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-7">
      <header className="border-b-4 border-black pb-6">
        <p className="mb-3 inline-block border-2 border-black bg-accent px-3 py-1 text-xs font-black uppercase tracking-widest">
          Timeline
        </p>
        <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
          COMMUNITY & LEADERSHIP
        </h1>
      </header>

      <section className="flex flex-col gap-6">
        {community.map((item, index) => (
          <NeoCard
            key={item.id}
            className={index % 2 === 0 ? "bg-white" : "bg-background"}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-black uppercase leading-tight md:text-2xl">
                  {item.role}
                </h2>
                <p className="mt-2 text-sm font-extrabold uppercase leading-snug md:text-base">
                  {item.organization}
                </p>
              </div>

              <p
                className={`w-fit shrink-0 border-2 border-black px-3 py-2 text-sm font-black uppercase ${
                  index % 2 === 0 ? "bg-secondary" : "bg-accent"
                }`}
              >
                {item.timeline}
              </p>
            </div>

            {/* Images Array */}
            {item.images && item.images.some((url: string) => url) && (
              <div className="mt-6 flex flex-wrap items-start gap-4 md:gap-6">
                {item.images.map((imgUrl: string, imgIdx: number) => {
                  if (!imgUrl) return null;
                  return (
                    <div key={imgIdx} className="shrink-0 max-w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgUrl}
                        alt={`${item.role} related image`}
                        className="max-h-48 md:max-h-64 w-auto h-auto max-w-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      />
                    </div>
                  );
                })}
              </div>
            )}

            <p className="mt-5 border-t-2 border-black pt-4 text-sm font-bold leading-relaxed md:text-base">
              {item.description}
            </p>
          </NeoCard>
        ))}
      </section>
    </div>
  );
}
