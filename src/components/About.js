import { useContent } from "../content";

export default function About() {
  const { about } = useContent();

  return (
    <section id="about" className="section-padding bg-white dark:bg-[#1c1917] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-700/20" />
      </div>
      <div className="max-w-4xl mx-auto relative">
        <h2 className="section-title">About Me</h2>
        <div className="relative">
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-700 rounded-full hidden md:block" />
          <div className="space-y-6 text-600 dark:text-400 leading-relaxed text-lg md:pl-8">
            <p className="relative pl-0 md:pl-4">{about.paragraph1}</p>
            <p className="relative pl-0 md:pl-4">{about.paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
