export default function Hero() {
  return (
    <section className="hero-section min-h-[100svh] flex items-center pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="page-container w-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-slate-400 mb-5">Hello, I'm</p>
          <h1 className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight">
            Zohaib Hassan
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-indigo-300">Business Analyst</p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-300">
            Computer Science graduate using my technical expertise to bridge the gap between stakeholders and developers - translating business needs into clear requirements and better digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="button-primary">Get In Touch</a>
            <a href="#projects" className="button-secondary">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}
