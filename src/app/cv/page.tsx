import NeoButton from "@/components/ui/NeoButton";
import SocialLinks from "@/components/ui/SocialLinks";
import data from "@/data/data.json";

function getDrivePreviewUrl(url: string) {
  return url.replace("/view", "/preview").replace(/\?.*$/, "");
}

export default function CvPage() {
  const { links } = data;
  const resumePreviewUrl = getDrivePreviewUrl(links.resume);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-7">
      <header className="border-b-4 border-black pb-6">
        <p className="mb-3 inline-block border-2 border-black bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest">
          Resume
        </p>
        <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
          RESUME // CURRICULUM VITAE
        </h1>
      </header>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <NeoButton
          as="a"
          href={links.resume}
          target="_blank"
          rel="noreferrer"
          hoverTone="accent"
          className="w-fit bg-secondary px-5 py-3 text-sm md:text-base"
        >
          Download Resume
        </NeoButton>
        <SocialLinks />
      </div>

      <section className="border-4 border-black bg-white shadow-neo-shadow">
        <iframe
          src={resumePreviewUrl}
          title="Resume preview"
          className="h-[540px] w-full md:h-[800px]"
        />
      </section>
    </div>
  );
}
