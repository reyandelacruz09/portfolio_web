import { useContent } from "../content";

export default function About() {
  const { about } = useContent();

  return (
    <section id="about" className="section-padding bg-white dark:bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          <p>{about.paragraph1}</p>
          <p>{about.paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
